goog.provide("cljs.core.match");
/**
 * Enable syntax check of match macros
 */
(function (){
cljs.core.match._STAR_syntax_check_STAR_ = cljs.core.atom.call(null,true); return (
new cljs.core.Var(function(){return cljs.core.match._STAR_syntax_check_STAR_;},new cljs.core.Symbol("cljs.core.match","*syntax-check*","cljs.core.match/*syntax-check*",(226219889),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"*syntax-check*","*syntax-check*",(-997255801),null),"cljs/core/match.cljc",(17),(1),true,(52),(54),cljs.core.List.EMPTY,"Enable syntax check of match macros",(cljs.core.truth_(cljs.core.match._STAR_syntax_check_STAR_)?cljs.core.match._STAR_syntax_check_STAR_.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match._STAR_line_STAR_; return (
new cljs.core.Var(function(){return cljs.core.match._STAR_line_STAR_;},new cljs.core.Symbol("cljs.core.match","*line*","cljs.core.match/*line*",(-1827765339),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"*line*","*line*",(-723435305),null),"cljs/core/match.cljc",(29),(1),true,(56),(56),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.match._STAR_line_STAR_)?cljs.core.match._STAR_line_STAR_.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match._STAR_locals_STAR_ = null; return (
new cljs.core.Var(function(){return cljs.core.match._STAR_locals_STAR_;},new cljs.core.Symbol("cljs.core.match","*locals*","cljs.core.match/*locals*",(1012676445),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"*locals*","*locals*",(-488048113),null),"cljs/core/match.cljc",(31),(1),true,(57),(57),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.match._STAR_locals_STAR_)?cljs.core.match._STAR_locals_STAR_.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match._STAR_warned_STAR_; return (
new cljs.core.Var(function(){return cljs.core.match._STAR_warned_STAR_;},new cljs.core.Symbol("cljs.core.match","*warned*","cljs.core.match/*warned*",(1629963900),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"*warned*","*warned*",(-1202485842),null),"cljs/core/match.cljc",(31),(1),true,(58),(58),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.match._STAR_warned_STAR_)?cljs.core.match._STAR_warned_STAR_.cljs$lang$test:null)])));})()
;
/**
 * Allow map matching syntax to check for IMatchLookup
 */
(function (){
cljs.core.match._STAR_match_lookup_STAR_ = false; return (
new cljs.core.Var(function(){return cljs.core.match._STAR_match_lookup_STAR_;},new cljs.core.Symbol("cljs.core.match","*match-lookup*","cljs.core.match/*match-lookup*",(-689847027),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"*match-lookup*","*match-lookup*",(-313194497),null),"cljs/core/match.cljc",(17),(1),true,(60),(62),cljs.core.List.EMPTY,"Allow map matching syntax to check for IMatchLookup",(cljs.core.truth_(cljs.core.match._STAR_match_lookup_STAR_)?cljs.core.match._STAR_match_lookup_STAR_.cljs$lang$test:null)])));})()
;
/**
 * Default vector type. Can be rebound allowing emission of
 *           custom inline code for vector patterns, for example
 *           type-hinted primitive array operations
 */
(function (){
cljs.core.match._STAR_vector_type_STAR_ = new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296)); return (
new cljs.core.Var(function(){return cljs.core.match._STAR_vector_type_STAR_;},new cljs.core.Symbol("cljs.core.match","*vector-type*","cljs.core.match/*vector-type*",(114913470),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"*vector-type*","*vector-type*",(1296905160),null),"cljs/core/match.cljc",(16),(1),true,(64),(68),cljs.core.List.EMPTY,"Default vector type. Can be rebound allowing emission of\n             custom inline code for vector patterns, for example\n             type-hinted primitive array operations",(cljs.core.truth_(cljs.core.match._STAR_vector_type_STAR_)?cljs.core.match._STAR_vector_type_STAR_.cljs$lang$test:null)])));})()
;
/**
 * In the presence of recur we cannot apply code size optimizations
 */
(function (){
cljs.core.match._STAR_recur_present_STAR_ = false; return (
new cljs.core.Var(function(){return cljs.core.match._STAR_recur_present_STAR_;},new cljs.core.Symbol("cljs.core.match","*recur-present*","cljs.core.match/*recur-present*",(-2051510385),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"*recur-present*","*recur-present*",(-568055043),null),"cljs/core/match.cljc",(18),(1),true,(70),(72),cljs.core.List.EMPTY,"In the presence of recur we cannot apply code size optimizations",(cljs.core.truth_(cljs.core.match._STAR_recur_present_STAR_)?cljs.core.match._STAR_recur_present_STAR_.cljs$lang$test:null)])));})()
;
/**
 * Flag to optimize performance over code size.
 */
(function (){
cljs.core.match._STAR_no_backtrack_STAR_ = false; return (
new cljs.core.Var(function(){return cljs.core.match._STAR_no_backtrack_STAR_;},new cljs.core.Symbol("cljs.core.match","*no-backtrack*","cljs.core.match/*no-backtrack*",(777662169),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"*no-backtrack*","*no-backtrack*",(1690823575),null),"cljs/core/match.cljc",(17),(1),true,(74),(76),cljs.core.List.EMPTY,"Flag to optimize performance over code size.",(cljs.core.truth_(cljs.core.match._STAR_no_backtrack_STAR_)?cljs.core.match._STAR_no_backtrack_STAR_.cljs$lang$test:null)])));})()
;
/**
 * Pre-allocated exception used for backtracing
 */
(function (){
cljs.core.match.backtrack = (new Error("Could not find match.")); return (
new cljs.core.Var(function(){return cljs.core.match.backtrack;},new cljs.core.Symbol("cljs.core.match","backtrack","cljs.core.match/backtrack",(463239872),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"backtrack","backtrack",(-450871918),null),"cljs/core/match.cljc",(12),(1),(78),(79),cljs.core.List.EMPTY,"Pre-allocated exception used for backtracing",(cljs.core.truth_(cljs.core.match.backtrack)?cljs.core.match.backtrack.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.backtrack_expr = (function cljs$core$match$backtrack_expr(){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",(595905694),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core.match","backtrack","cljs.core.match/backtrack",(463239872),null))));
}); return (
new cljs.core.Var(function(){return cljs.core.match.backtrack_expr;},new cljs.core.Symbol("cljs.core.match","backtrack-expr","cljs.core.match/backtrack-expr",(-266539442),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"backtrack-expr","backtrack-expr",(971548988),null),"cljs/core/match.cljc",(21),(1),(82),(82),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(cljs.core.match.backtrack_expr)?cljs.core.match.backtrack_expr.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.backtrack_sym = (function cljs$core$match$backtrack_sym(){
return new cljs.core.Symbol("cljs.core.match","backtrack","cljs.core.match/backtrack",(463239872),null);
}); return (
new cljs.core.Var(function(){return cljs.core.match.backtrack_sym;},new cljs.core.Symbol("cljs.core.match","backtrack-sym","cljs.core.match/backtrack-sym",(1286791265),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"backtrack-sym","backtrack-sym",(1963894067),null),"cljs/core/match.cljc",(20),(1),(88),(88),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(cljs.core.match.backtrack_sym)?cljs.core.match.backtrack_sym.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match._STAR_backtrack_stack_STAR_ = cljs.core.List.EMPTY; return (
new cljs.core.Var(function(){return cljs.core.match._STAR_backtrack_stack_STAR_;},new cljs.core.Symbol("cljs.core.match","*backtrack-stack*","cljs.core.match/*backtrack-stack*",(-258929514),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"*backtrack-stack*","*backtrack-stack*",(-1224389032),null),"cljs/core/match.cljc",(40),(1),true,(94),(94),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.match._STAR_backtrack_stack_STAR_)?cljs.core.match._STAR_backtrack_stack_STAR_.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match._STAR_root_STAR_ = true; return (
new cljs.core.Var(function(){return cljs.core.match._STAR_root_STAR_;},new cljs.core.Symbol("cljs.core.match","*root*","cljs.core.match/*root*",(128447767),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"*root*","*root*",(1292612549),null),"cljs/core/match.cljc",(29),(1),true,(95),(95),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.match._STAR_root_STAR_)?cljs.core.match._STAR_root_STAR_.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.warn = (function cljs$core$match$warn(msg){
if(cljs.core.not.call(null,cljs.core.deref.call(null,cljs.core.match._STAR_warned_STAR_))){
var _STAR_print_fn_STAR_741_742 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_err_fn_STAR_;

try{cljs.core.println.call(null,"WARNING:",[cljs.core.str(cljs.core._STAR_ns_STAR_),cljs.core.str(", line "),cljs.core.str(cljs.core.match._STAR_line_STAR_),cljs.core.str(":")].join(''),msg);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_741_742;
}
return cljs.core.reset_BANG_.call(null,cljs.core.match._STAR_warned_STAR_,true);
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return cljs.core.match.warn;},new cljs.core.Symbol("cljs.core.match","warn","cljs.core.match/warn",(-1183539983),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"warn","warn",(1203820975),null),"cljs/core/match.cljc",(11),(1),(97),(97),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"msg","msg",(254428083),null)], null)),null,(cljs.core.truth_(cljs.core.match.warn)?cljs.core.match.warn.cljs$lang$test:null)])));})()
;
cljs.core.ILookup.prototype.cljs$core$match$protocols$IMatchLookup$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ILookup.prototype.cljs$core$match$protocols$IMatchLookup$val_at$arity$3 = (function (this$,k,not_found){
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,not_found);
});
(function (){
cljs.core.match.val_at_expr = (function cljs$core$match$val_at_expr(var_args){
var args__23658__auto__ = [];
var len__23656__auto___744 = arguments.length;
var i__23657__auto___745 = (0);
while(true){
if((i__23657__auto___745 < len__23656__auto___744)){
args__23658__auto__.push((arguments[i__23657__auto___745]));

var G__746 = (i__23657__auto___745 + (1));
i__23657__auto___745 = G__746;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((0) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((0)),(0),null)):null);
return cljs.core.match.val_at_expr.cljs$core$IFn$_invoke$arity$variadic(argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return cljs.core.match.val_at_expr;},new cljs.core.Symbol("cljs.core.match","val-at-expr","cljs.core.match/val-at-expr",(666401894),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"val-at-expr","val-at-expr",(1561082280),null),"cljs/core/match.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(136),(136),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),null,(cljs.core.truth_(cljs.core.match.val_at_expr)?cljs.core.match.val_at_expr.cljs$lang$test:null)])));})()
;

cljs.core.match.val_at_expr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",(-296075407),null)),args));
});

cljs.core.match.val_at_expr.cljs$lang$maxFixedArity = (0);

cljs.core.match.val_at_expr.cljs$lang$applyTo = (function (seq743){
return cljs.core.match.val_at_expr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq743));
});

new cljs.core.Var(function(){return cljs.core.match.val_at_expr;},new cljs.core.Symbol("cljs.core.match","val-at-expr","cljs.core.match/val-at-expr",(666401894),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"val-at-expr","val-at-expr",(1561082280),null),"cljs/core/match.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(136),(136),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),null,(cljs.core.truth_(cljs.core.match.val_at_expr)?cljs.core.match.val_at_expr.cljs$lang$test:null)]));
(function (){
cljs.core.match.vector_type = (function cljs$core$match$vector_type(var_args){
var args__23658__auto__ = [];
var len__23656__auto___749 = arguments.length;
var i__23657__auto___750 = (0);
while(true){
if((i__23657__auto___750 < len__23656__auto___749)){
args__23658__auto__.push((arguments[i__23657__auto___750]));

var G__751 = (i__23657__auto___750 + (1));
i__23657__auto___750 = G__751;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((1) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((1)),(0),null)):null);
return cljs.core.match.vector_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return cljs.core.match.vector_type;},new cljs.core.Symbol("cljs.core.match","vector-type","cljs.core.match/vector-type",(1059805993),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"vector-type","vector-type",(2039946875),null),"cljs/core/match.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"t","t",(242699008),null),new cljs.core.Symbol(null,"r","r",(1169147337),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",(242699008),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"r","r",(1169147337),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(154),(154),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",(242699008),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"r","r",(1169147337),null)], null)),null,(cljs.core.truth_(cljs.core.match.vector_type)?cljs.core.match.vector_type.cljs$lang$test:null)])));})()
;

cljs.core.match.vector_type.cljs$core$IFn$_invoke$arity$variadic = (function (t,r){
return t;
});

cljs.core.match.vector_type.cljs$lang$maxFixedArity = (1);

cljs.core.match.vector_type.cljs$lang$applyTo = (function (seq747){
var G__748 = cljs.core.first.call(null,seq747);
var seq747__$1 = cljs.core.next.call(null,seq747);
return cljs.core.match.vector_type.cljs$core$IFn$_invoke$arity$variadic(G__748,seq747__$1);
});

new cljs.core.Var(function(){return cljs.core.match.vector_type;},new cljs.core.Symbol("cljs.core.match","vector-type","cljs.core.match/vector-type",(1059805993),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"vector-type","vector-type",(2039946875),null),"cljs/core/match.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"t","t",(242699008),null),new cljs.core.Symbol(null,"r","r",(1169147337),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",(242699008),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"r","r",(1169147337),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(154),(154),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",(242699008),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"r","r",(1169147337),null)], null)),null,(cljs.core.truth_(cljs.core.match.vector_type)?cljs.core.match.vector_type.cljs$lang$test:null)]));
if(typeof cljs.core.match.check_size_QMARK_ !== 'undefined'){
} else {
(function (){
cljs.core.match.check_size_QMARK_ = (function (){var method_table__23489__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23490__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23491__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23492__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23493__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core.match","check-size?"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__23493__auto__,method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__));
})(); return (
new cljs.core.Var(function(){return cljs.core.match.check_size_QMARK_;},new cljs.core.Symbol("cljs.core.match","check-size?","cljs.core.match/check-size?",(636848612),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"check-size?","check-size?",(-79608810),null),"cljs/core/match.cljc",(22),(1),(156),(156),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.match.check_size_QMARK_)?cljs.core.match.check_size_QMARK_.cljs$lang$test:null)])));})()
;
}
if(typeof cljs.core.match.tag !== 'undefined'){
} else {
(function (){
cljs.core.match.tag = (function (){var method_table__23489__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23490__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23491__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23492__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23493__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core.match","tag"),((function (method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__,hierarchy__23493__auto__){
return (function (t){
return t;
});})(method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__,hierarchy__23493__auto__))
,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__23493__auto__,method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__));
})(); return (
new cljs.core.Var(function(){return cljs.core.match.tag;},new cljs.core.Symbol("cljs.core.match","tag","cljs.core.match/tag",(1600840050),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"tag","tag",(350170304),null),"cljs/core/match.cljc",(14),(1),(157),(157),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.match.tag)?cljs.core.match.tag.cljs$lang$test:null)])));})()
;
}
if(typeof cljs.core.match.test_inline !== 'undefined'){
} else {
(function (){
cljs.core.match.test_inline = (function (){var method_table__23489__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23490__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23491__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23492__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23493__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core.match","test-inline"),cljs.core.match.vector_type,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__23493__auto__,method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__));
})(); return (
new cljs.core.Var(function(){return cljs.core.match.test_inline;},new cljs.core.Symbol("cljs.core.match","test-inline","cljs.core.match/test-inline",(-53716383),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"test-inline","test-inline",(-1286596297),null),"cljs/core/match.cljc",(22),(1),(158),(158),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.match.test_inline)?cljs.core.match.test_inline.cljs$lang$test:null)])));})()
;
}
if(typeof cljs.core.match.test_with_size_inline !== 'undefined'){
} else {
(function (){
cljs.core.match.test_with_size_inline = (function (){var method_table__23489__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23490__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23491__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23492__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23493__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core.match","test-with-size-inline"),cljs.core.match.vector_type,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__23493__auto__,method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__));
})(); return (
new cljs.core.Var(function(){return cljs.core.match.test_with_size_inline;},new cljs.core.Symbol("cljs.core.match","test-with-size-inline","cljs.core.match/test-with-size-inline",(2133117112),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"test-with-size-inline","test-with-size-inline",(-1232041462),null),"cljs/core/match.cljc",(32),(1),(159),(159),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.match.test_with_size_inline)?cljs.core.match.test_with_size_inline.cljs$lang$test:null)])));})()
;
}
if(typeof cljs.core.match.test_with_min_size_inline !== 'undefined'){
} else {
(function (){
cljs.core.match.test_with_min_size_inline = (function (){var method_table__23489__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23490__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23491__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23492__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23493__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core.match","test-with-min-size-inline"),cljs.core.match.vector_type,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__23493__auto__,method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__));
})(); return (
new cljs.core.Var(function(){return cljs.core.match.test_with_min_size_inline;},new cljs.core.Symbol("cljs.core.match","test-with-min-size-inline","cljs.core.match/test-with-min-size-inline",(1555237714),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"test-with-min-size-inline","test-with-min-size-inline",(-1845180384),null),"cljs/core/match.cljc",(36),(1),(160),(160),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.match.test_with_min_size_inline)?cljs.core.match.test_with_min_size_inline.cljs$lang$test:null)])));})()
;
}
if(typeof cljs.core.match.count_inline !== 'undefined'){
} else {
(function (){
cljs.core.match.count_inline = (function (){var method_table__23489__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23490__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23491__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23492__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23493__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core.match","count-inline"),cljs.core.match.vector_type,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__23493__auto__,method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__));
})(); return (
new cljs.core.Var(function(){return cljs.core.match.count_inline;},new cljs.core.Symbol("cljs.core.match","count-inline","cljs.core.match/count-inline",(-292340202),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"count-inline","count-inline",(-720899872),null),"cljs/core/match.cljc",(23),(1),(161),(161),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.match.count_inline)?cljs.core.match.count_inline.cljs$lang$test:null)])));})()
;
}
if(typeof cljs.core.match.nth_inline !== 'undefined'){
} else {
(function (){
cljs.core.match.nth_inline = (function (){var method_table__23489__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23490__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23491__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23492__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23493__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core.match","nth-inline"),cljs.core.match.vector_type,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__23493__auto__,method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__));
})(); return (
new cljs.core.Var(function(){return cljs.core.match.nth_inline;},new cljs.core.Symbol("cljs.core.match","nth-inline","cljs.core.match/nth-inline",(1687707643),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"nth-inline","nth-inline",(708051277),null),"cljs/core/match.cljc",(21),(1),(162),(162),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.match.nth_inline)?cljs.core.match.nth_inline.cljs$lang$test:null)])));})()
;
}
if(typeof cljs.core.match.nth_offset_inline !== 'undefined'){
} else {
(function (){
cljs.core.match.nth_offset_inline = (function (){var method_table__23489__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23490__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23491__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23492__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23493__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core.match","nth-offset-inline"),cljs.core.match.vector_type,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__23493__auto__,method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__));
})(); return (
new cljs.core.Var(function(){return cljs.core.match.nth_offset_inline;},new cljs.core.Symbol("cljs.core.match","nth-offset-inline","cljs.core.match/nth-offset-inline",(2010313467),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"nth-offset-inline","nth-offset-inline",(-2002338739),null),"cljs/core/match.cljc",(28),(1),(163),(163),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.match.nth_offset_inline)?cljs.core.match.nth_offset_inline.cljs$lang$test:null)])));})()
;
}
if(typeof cljs.core.match.subvec_inline !== 'undefined'){
} else {
(function (){
cljs.core.match.subvec_inline = (function (){var method_table__23489__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23490__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23491__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23492__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23493__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core.match","subvec-inline"),cljs.core.match.vector_type,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__23493__auto__,method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__));
})(); return (
new cljs.core.Var(function(){return cljs.core.match.subvec_inline;},new cljs.core.Symbol("cljs.core.match","subvec-inline","cljs.core.match/subvec-inline",(-198440470),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"subvec-inline","subvec-inline",(-845952220),null),"cljs/core/match.cljc",(24),(1),(164),(164),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.match.subvec_inline)?cljs.core.match.subvec_inline.cljs$lang$test:null)])));})()
;
}
if(typeof cljs.core.match.nthnext_inline !== 'undefined'){
} else {
(function (){
cljs.core.match.nthnext_inline = (function (){var method_table__23489__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23490__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23491__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23492__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23493__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core.match","nthnext-inline"),cljs.core.match.vector_type,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__23493__auto__,method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__));
})(); return (
new cljs.core.Var(function(){return cljs.core.match.nthnext_inline;},new cljs.core.Symbol("cljs.core.match","nthnext-inline","cljs.core.match/nthnext-inline",(-109342265),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"nthnext-inline","nthnext-inline",(571987465),null),"cljs/core/match.cljc",(25),(1),(165),(165),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.match.nthnext_inline)?cljs.core.match.nthnext_inline.cljs$lang$test:null)])));})()
;
}
cljs.core._add_method.call(null,cljs.core.match.check_size_QMARK_,new cljs.core.Keyword(null,"default","default",(-1987822328)),(function (_){
return true;
}));
cljs.core._add_method.call(null,cljs.core.match.tag,new cljs.core.Keyword(null,"default","default",(-1987822328)),(function (t){
throw (new Error([cljs.core.str("No tag specified for vector specialization "),cljs.core.str(t)].join('')));
}));
cljs.core._add_method.call(null,cljs.core.match.tag,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296)),(function (_){
return cljs.core.PersistentVector;
}));
(function (){
cljs.core.match.with_tag = (function cljs$core$match$with_tag(t,ocr){
var the_tag = cljs.core.match.tag.call(null,t);
var the_tag__$1 = the_tag;
return cljs.core.vary_meta.call(null,ocr,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",(-1290361223)),the_tag__$1);
}); return (
new cljs.core.Var(function(){return cljs.core.match.with_tag;},new cljs.core.Symbol("cljs.core.match","with-tag","cljs.core.match/with-tag",(994136434),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"with-tag","with-tag",(-1028842452),null),"cljs/core/match.cljc",(15),(1),(177),(177),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",(242699008),null),new cljs.core.Symbol(null,"ocr","ocr",(622507032),null)], null)),null,(cljs.core.truth_(cljs.core.match.with_tag)?cljs.core.match.with_tag.cljs$lang$test:null)])));})()
;
cljs.core._add_method.call(null,cljs.core.match.test_inline,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296)),(function (t,ocr){
var the_tag = cljs.core.match.tag.call(null,t);
var c = ((cljs.core._EQ_.call(null,the_tag,cljs.core.PersistentVector))?the_tag:((typeof the_tag === 'string')?the_tag:(((the_tag instanceof cljs.core.Symbol))?[cljs.core.str(the_tag.call(null))].join(''):(function(){throw (new Error([cljs.core.str("Unsupported tag type"),cljs.core.str(the_tag)].join('')))})()
)));
if(cljs.core._EQ_.call(null,t,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296)))){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",(-1550392028),null)),(function (){var x__23399__auto__ = ocr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
} else {
if(cljs.core.truth_(c.isArray())){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","array?","cljs.core/array?",(-1655912448),null)),(function (){var x__23399__auto__ = ocr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
} else {
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",(2044751870),null)),(function (){var x__23399__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = ocr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));

}
}
}));
cljs.core._add_method.call(null,cljs.core.match.test_with_size_inline,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296)),(function (t,ocr,size){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null)),(function (){var x__23399__auto__ = cljs.core.match.test_inline.call(null,t,ocr);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","==","cljs.core/==",(-632471488),null)),(function (){var x__23399__auto__ = cljs.core.match.count_inline.call(null,t,cljs.core.match.with_tag.call(null,t,ocr));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
}));
cljs.core._add_method.call(null,cljs.core.match.test_with_min_size_inline,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296)),(function (t,ocr,size){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null)),(function (){var x__23399__auto__ = cljs.core.match.test_inline.call(null,t,ocr);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core",">=","cljs.core/>=",(350096541),null)),(function (){var x__23399__auto__ = cljs.core.match.count_inline.call(null,t,cljs.core.match.with_tag.call(null,t,ocr));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
}));
cljs.core._add_method.call(null,cljs.core.match.count_inline,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296)),(function (_,ocr){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",(-921270233),null)),(function (){var x__23399__auto__ = ocr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
}));
cljs.core._add_method.call(null,cljs.core.match.nth_inline,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296)),(function (_,ocr,i){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",(1961052085),null)),(function (){var x__23399__auto__ = ocr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
}));
cljs.core._add_method.call(null,cljs.core.match.nth_offset_inline,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296)),(function (t,ocr,i,offset){
return cljs.core.match.nth_inline.call(null,t,ocr,i);
}));
cljs.core._add_method.call(null,cljs.core.match.subvec_inline,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296)),(function() {
var G__752 = null;
var G__752__3 = (function (_,ocr,start){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","subvec","cljs.core/subvec",(1039737205),null)),(function (){var x__23399__auto__ = ocr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = start;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
});
var G__752__4 = (function (_,ocr,start,end){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","subvec","cljs.core/subvec",(1039737205),null)),(function (){var x__23399__auto__ = ocr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = start;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = end;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
});
G__752 = function(_,ocr,start,end){
switch(arguments.length){
case 3:
return G__752__3.call(this,_,ocr,start);
case 4:
return G__752__4.call(this,_,ocr,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__752.cljs$core$IFn$_invoke$arity$3 = G__752__3;
G__752.cljs$core$IFn$_invoke$arity$4 = G__752__4;
return G__752;
})()
);
cljs.core._add_method.call(null,cljs.core.match.nthnext_inline,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296)),(function (_,ocr,n){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nthnext","cljs.core/nthnext",(-1690777327),null)),(function (){var x__23399__auto__ = ocr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
}));
cljs.core.PersistentVector.prototype.cljs$core$match$protocols$IVecMod$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.cljs$core$match$protocols$IVecMod$prepend$arity$2 = (function (this$,x){
var this$__$1 = this;
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),this$__$1);
});

cljs.core.PersistentVector.prototype.cljs$core$match$protocols$IVecMod$drop_nth$arity$2 = (function (this$,n){
var this$__$1 = this;
return cljs.core.into.call(null,cljs.core.subvec.call(null,this$__$1,(0),n),cljs.core.subvec.call(null,this$__$1,(n + (1)),cljs.core.count.call(null,this$__$1)));
});

cljs.core.PersistentVector.prototype.cljs$core$match$protocols$IVecMod$swap$arity$2 = (function (this$,n){
var this$__$1 = this;
var x = cljs.core.nth.call(null,this$__$1,n);
return cljs.core.match.protocols.prepend.call(null,cljs.core.match.protocols.drop_nth.call(null,this$__$1,n),x);
});
cljs.core.Subvec.prototype.cljs$core$match$protocols$IVecMod$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Subvec.prototype.cljs$core$match$protocols$IVecMod$prepend$arity$2 = (function (this$,x){
var this$__$1 = this;
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),this$__$1);
});

cljs.core.Subvec.prototype.cljs$core$match$protocols$IVecMod$drop_nth$arity$2 = (function (this$,n){
var this$__$1 = this;
return cljs.core.into.call(null,cljs.core.subvec.call(null,this$__$1,(0),n),cljs.core.subvec.call(null,this$__$1,(n + (1)),cljs.core.count.call(null,this$__$1)));
});

cljs.core.Subvec.prototype.cljs$core$match$protocols$IVecMod$swap$arity$2 = (function (this$,n){
var this$__$1 = this;
var x = cljs.core.nth.call(null,this$__$1,n);
return cljs.core.match.protocols.prepend.call(null,cljs.core.match.protocols.drop_nth.call(null,this$__$1,n),x);
});
(function (){
cljs.core.match.wildcard_pattern_QMARK_; return (
new cljs.core.Var(function(){return cljs.core.match.wildcard_pattern_QMARK_;},new cljs.core.Symbol("cljs.core.match","wildcard-pattern?","cljs.core.match/wildcard-pattern?",(259834235),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"wildcard-pattern?","wildcard-pattern?",(-930609975),null),"cljs/core/match.cljc",(27),(1),(269),true,(269),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.match.wildcard_pattern_QMARK_)?cljs.core.match.wildcard_pattern_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.constructor_QMARK_ = (function cljs$core$match$constructor_QMARK_(p){
return cljs.core.not.call(null,cljs.core.match.wildcard_pattern_QMARK_.call(null,p));
}); return (
new cljs.core.Var(function(){return cljs.core.match.constructor_QMARK_;},new cljs.core.Symbol("cljs.core.match","constructor?","cljs.core.match/constructor?",(-815269767),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"constructor?","constructor?",(30098743),null),"cljs/core/match.cljc",(19),(1),(271),(271),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null)], null)),null,(cljs.core.truth_(cljs.core.match.constructor_QMARK_)?cljs.core.match.constructor_QMARK_.cljs$lang$test:null)])));})()
;
if(typeof cljs.core.match.groupable_QMARK_ !== 'undefined'){
} else {
/**
 * Determine if two patterns may be grouped together for simultaneous
 * testing.
 */
(function (){
cljs.core.match.groupable_QMARK_ = (function (){var method_table__23489__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23490__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23491__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23492__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23493__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core.match","groupable?"),((function (method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__,hierarchy__23493__auto__){
return (function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.core.match","tag","cljs.core.match/tag",(-39691477)).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword("cljs.core.match","tag","cljs.core.match/tag",(-39691477)).cljs$core$IFn$_invoke$arity$1(b)], null);
});})(method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__,hierarchy__23493__auto__))
,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__23493__auto__,method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__));
})(); return (
new cljs.core.Var(function(){return cljs.core.match.groupable_QMARK_;},new cljs.core.Symbol("cljs.core.match","groupable?","cljs.core.match/groupable?",(1761570521),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"groupable?","groupable?",(-1303171665),null),"cljs/core/match.cljc",(21),(1),(279),(279),cljs.core.List.EMPTY,"Determine if two patterns may be grouped together for simultaneous\n   testing.",(cljs.core.truth_(cljs.core.match.groupable_QMARK_)?cljs.core.match.groupable_QMARK_.cljs$lang$test:null)])));})()
;
}
cljs.core._add_method.call(null,cljs.core.match.groupable_QMARK_,new cljs.core.Keyword(null,"default","default",(-1987822328)),(function (a,b){
return cljs.core._EQ_.call(null,a,b);
}));
(function (){
cljs.core.match.leaf_bind_expr; return (
new cljs.core.Var(function(){return cljs.core.match.leaf_bind_expr;},new cljs.core.Symbol("cljs.core.match","leaf-bind-expr","cljs.core.match/leaf-bind-expr",(1165024029),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"leaf-bind-expr","leaf-bind-expr",(2126814891),null),"cljs/core/match.cljc",(24),(1),(295),true,(295),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.match.leaf_bind_expr)?cljs.core.match.leaf_bind_expr.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.match.named_wildcard_pattern_QMARK_; return (
new cljs.core.Var(function(){return cljs.core.match.named_wildcard_pattern_QMARK_;},new cljs.core.Symbol("cljs.core.match","named-wildcard-pattern?","cljs.core.match/named-wildcard-pattern?",(1477033104),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"named-wildcard-pattern?","named-wildcard-pattern?",(-2101478874),null),"cljs/core/match.cljc",(48),(1),(295),true,(295),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.match.named_wildcard_pattern_QMARK_)?cljs.core.match.named_wildcard_pattern_QMARK_.cljs$lang$test:null)])));})()
;

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeq}
 * @implements {cljs.core.match.Object}
 * @implements {cljs.core.INext}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.match.protocols.IVecMod}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
cljs.core.match.PatternRow = (function (ps,action,bindings){
this.ps = ps;
this.action = action;
this.bindings = bindings;
this.cljs$lang$protocol_mask$partition0$ = 10486747;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.match.PatternRow.prototype.equals = (function (other){
var self__ = this;
var _ = this;
return ((other instanceof cljs.core.match.PatternRow)) && (cljs.core._EQ_.call(null,self__.ps,new cljs.core.Keyword(null,"ps","ps",(292358046)).cljs$core$IFn$_invoke$arity$1(other))) && (cljs.core._EQ_.call(null,self__.action,new cljs.core.Keyword(null,"action","action",(-811238024)).cljs$core$IFn$_invoke$arity$1(other))) && (cljs.core._EQ_.call(null,self__.bindings,new cljs.core.Keyword(null,"bindings","bindings",(1271397192)).cljs$core$IFn$_invoke$arity$1(other)));
});

cljs.core.match.PatternRow.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
});

cljs.core.match.PatternRow.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var G__754 = (((k instanceof cljs.core.Keyword))?k.fqn:null);
switch (G__754) {
case "ps":
return self__.ps;

break;
case "action":
return self__.action;

break;
case "bindings":
return self__.bindings;

break;
default:
return not_found;

}
});

cljs.core.match.PatternRow.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,i){
var self__ = this;
var ___$1 = this;
return cljs.core.nth.call(null,self__.ps,i);
});

cljs.core.match.PatternRow.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,i,x){
var self__ = this;
var ___$1 = this;
return cljs.core.nth.call(null,self__.ps,i,x);
});

cljs.core.match.PatternRow.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var temp__19520__auto__ = cljs.core.next.call(null,self__.ps);
if(temp__19520__auto__){
var nps = temp__19520__auto__;
return (new cljs.core.match.PatternRow(nps,self__.action,self__.bindings));
} else {
return (new cljs.core.match.PatternRow(cljs.core.PersistentVector.EMPTY,self__.action,self__.bindings));
}
});

cljs.core.match.PatternRow.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.count.call(null,self__.ps);
});

cljs.core.match.PatternRow.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return this$__$1.equals(other);
});

cljs.core.match.PatternRow.prototype.cljs$core$match$protocols$IVecMod$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.match.PatternRow.prototype.cljs$core$match$protocols$IVecMod$drop_nth$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
return (new cljs.core.match.PatternRow(cljs.core.match.protocols.drop_nth.call(null,self__.ps,n),self__.action,self__.bindings));
});

cljs.core.match.PatternRow.prototype.cljs$core$match$protocols$IVecMod$prepend$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return (new cljs.core.match.PatternRow(cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),self__.ps),self__.action,self__.bindings));
});

cljs.core.match.PatternRow.prototype.cljs$core$match$protocols$IVecMod$swap$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
return (new cljs.core.match.PatternRow(cljs.core.match.protocols.swap.call(null,self__.ps,n),self__.action,self__.bindings));
});

cljs.core.match.PatternRow.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.first.call(null,self__.ps);
});

cljs.core.match.PatternRow.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,k,v){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.match.PatternRow(cljs.core.assoc.call(null,self__.ps,k,v),self__.action,self__.bindings));
});

cljs.core.match.PatternRow.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.seq.call(null,self__.ps);
});

cljs.core.match.PatternRow.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return (new cljs.core.match.PatternRow(cljs.core.conj.call(null,self__.ps,x),self__.action,self__.bindings));
});

cljs.core.match.PatternRow.prototype.call = (function (self__,n){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return cljs.core.nth.call(null,self__.ps,n);
});

cljs.core.match.PatternRow.prototype.apply = (function (self__,args753){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args753)));
});

cljs.core.match.PatternRow.prototype.cljs$core$IFn$_invoke$arity$1 = (function (n){
var self__ = this;
var _ = this;
return cljs.core.nth.call(null,self__.ps,n);
});

cljs.core.match.PatternRow.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ps","ps",(1932889573),null),new cljs.core.Symbol(null,"action","action",(829293503),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null)], null);
});

cljs.core.match.PatternRow.cljs$lang$type = true;

cljs.core.match.PatternRow.cljs$lang$ctorStr = "cljs.core.match/PatternRow";

cljs.core.match.PatternRow.cljs$lang$ctorPrWriter = (function (this__22602__auto__,writer__22603__auto__,opt__22604__auto__){
return cljs.core._write.call(null,writer__22603__auto__,"cljs.core.match/PatternRow");
});

(function (){
cljs.core.match.__GT_PatternRow = (function cljs$core$match$__GT_PatternRow(ps,action,bindings){
return (new cljs.core.match.PatternRow(ps,action,bindings));
}); return (
new cljs.core.Var(function(){return cljs.core.match.__GT_PatternRow;},new cljs.core.Symbol("cljs.core.match","->PatternRow","cljs.core.match/->PatternRow",(365925401),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [new cljs.core.Symbol("cljs.core","IIndexed","cljs.core/IIndexed",(-436490749),null),null,new cljs.core.Symbol("cljs.core","IEquiv","cljs.core/IEquiv",(-1245752602),null),null,new cljs.core.Symbol("cljs.core","IFn","cljs.core/IFn",(-920223129),null),null,new cljs.core.Symbol("cljs.core","ICollection","cljs.core/ICollection",(802638471),null),null,new cljs.core.Symbol("cljs.core","ICounted","cljs.core/ICounted",(-1299011378),null),null,new cljs.core.Symbol("cljs.core","ISeq","cljs.core/ISeq",(230133392),null),null,new cljs.core.Symbol("cljs.core.match","Object","cljs.core.match/Object",(1160957744),null),null,new cljs.core.Symbol("cljs.core","INext","cljs.core/INext",(-113000046),null),null,new cljs.core.Symbol("cljs.core","ISeqable","cljs.core/ISeqable",(137437203),null),null,new cljs.core.Symbol("cljs.core.match.protocols","IVecMod","cljs.core.match.protocols/IVecMod",(1684101973),null),null,new cljs.core.Symbol("cljs.core","IAssociative","cljs.core/IAssociative",(-1700920611),null),null,new cljs.core.Symbol("cljs.core","ILookup","cljs.core/ILookup",(-150575073),null),null], null), null),new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"->PatternRow","->PatternRow",(1244911339),null),"cljs/core/match.cljc",(20),(1),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(297),(297),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ps","ps",(1932889573),null),new cljs.core.Symbol(null,"action","action",(829293503),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null)], null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Symbol("cljs.core","IIndexed","cljs.core/IIndexed",(-436490749),null),null,new cljs.core.Symbol("cljs.core","IEquiv","cljs.core/IEquiv",(-1245752602),null),null,new cljs.core.Symbol("cljs.core","IFn","cljs.core/IFn",(-920223129),null),null,new cljs.core.Symbol("cljs.core","ICollection","cljs.core/ICollection",(802638471),null),null,new cljs.core.Symbol("cljs.core","ICounted","cljs.core/ICounted",(-1299011378),null),null,new cljs.core.Symbol("cljs.core","ISeq","cljs.core/ISeq",(230133392),null),null,new cljs.core.Symbol("cljs.core","INext","cljs.core/INext",(-113000046),null),null,new cljs.core.Symbol("cljs.core","ISeqable","cljs.core/ISeqable",(137437203),null),null,new cljs.core.Symbol("cljs.core","IAssociative","cljs.core/IAssociative",(-1700920611),null),null,new cljs.core.Symbol("cljs.core","ILookup","cljs.core/ILookup",(-150575073),null),null], null), null),null,(cljs.core.truth_(cljs.core.match.__GT_PatternRow)?cljs.core.match.__GT_PatternRow.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.match.pattern_row = (function cljs$core$match$pattern_row(var_args){
var args756 = [];
var len__23656__auto___759 = arguments.length;
var i__23657__auto___760 = (0);
while(true){
if((i__23657__auto___760 < len__23656__auto___759)){
args756.push((arguments[i__23657__auto___760]));

var G__761 = (i__23657__auto___760 + (1));
i__23657__auto___760 = G__761;
continue;
} else {
}
break;
}

var G__758 = args756.length;
switch (G__758) {
case (2):
return cljs.core.match.pattern_row.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.match.pattern_row.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args756.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.core.match.pattern_row;},new cljs.core.Symbol("cljs.core.match","pattern-row","cljs.core.match/pattern-row",(-331428904),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"pattern-row","pattern-row",(919210346),null),"cljs/core/match.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ps","ps",(1932889573),null),new cljs.core.Symbol(null,"action","action",(829293503),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ps","ps",(1932889573),null),new cljs.core.Symbol(null,"action","action",(829293503),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ps","ps",(1932889573),null),new cljs.core.Symbol(null,"action","action",(829293503),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ps","ps",(1932889573),null),new cljs.core.Symbol(null,"action","action",(829293503),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(372),(372),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ps","ps",(1932889573),null),new cljs.core.Symbol(null,"action","action",(829293503),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ps","ps",(1932889573),null),new cljs.core.Symbol(null,"action","action",(829293503),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null)], null)),null,(cljs.core.truth_(cljs.core.match.pattern_row)?cljs.core.match.pattern_row.cljs$lang$test:null)])));})()
;

cljs.core.match.pattern_row.cljs$core$IFn$_invoke$arity$2 = (function (ps,action){
return cljs.core.match.pattern_row.call(null,ps,action,cljs.core.PersistentVector.EMPTY);
});

cljs.core.match.pattern_row.cljs$core$IFn$_invoke$arity$3 = (function (ps,action,bindings){
var ps__$1 = ((cljs.core.vector_QMARK_.call(null,ps))?ps:cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,ps));
return (new cljs.core.match.PatternRow(ps__$1,action,bindings));
});

cljs.core.match.pattern_row.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return cljs.core.match.pattern_row;},new cljs.core.Symbol("cljs.core.match","pattern-row","cljs.core.match/pattern-row",(-331428904),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"pattern-row","pattern-row",(919210346),null),"cljs/core/match.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ps","ps",(1932889573),null),new cljs.core.Symbol(null,"action","action",(829293503),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ps","ps",(1932889573),null),new cljs.core.Symbol(null,"action","action",(829293503),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ps","ps",(1932889573),null),new cljs.core.Symbol(null,"action","action",(829293503),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ps","ps",(1932889573),null),new cljs.core.Symbol(null,"action","action",(829293503),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(372),(372),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ps","ps",(1932889573),null),new cljs.core.Symbol(null,"action","action",(829293503),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ps","ps",(1932889573),null),new cljs.core.Symbol(null,"action","action",(829293503),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null)], null)),null,(cljs.core.truth_(cljs.core.match.pattern_row)?cljs.core.match.pattern_row.cljs$lang$test:null)]));
(function (){
cljs.core.match.update_pattern = (function cljs$core$match$update_pattern(prow,i,p){
return cljs.core.match.pattern_row.call(null,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"ps","ps",(292358046)).cljs$core$IFn$_invoke$arity$1(prow),i,p),new cljs.core.Keyword(null,"action","action",(-811238024)).cljs$core$IFn$_invoke$arity$1(prow),new cljs.core.Keyword(null,"bindings","bindings",(1271397192)).cljs$core$IFn$_invoke$arity$1(prow));
}); return (
new cljs.core.Var(function(){return cljs.core.match.update_pattern;},new cljs.core.Symbol("cljs.core.match","update-pattern","cljs.core.match/update-pattern",(931763374),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"update-pattern","update-pattern",(243091996),null),"cljs/core/match.cljc",(21),(1),(383),(383),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prow","prow",(-1579117230),null),new cljs.core.Symbol(null,"i","i",(253690212),null),new cljs.core.Symbol(null,"p","p",(1791580836),null)], null)),null,(cljs.core.truth_(cljs.core.match.update_pattern)?cljs.core.match.update_pattern.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.all_wildcards_QMARK_ = (function cljs$core$match$all_wildcards_QMARK_(prow){
return cljs.core.every_QMARK_.call(null,cljs.core.match.wildcard_pattern_QMARK_,new cljs.core.Keyword(null,"ps","ps",(292358046)).cljs$core$IFn$_invoke$arity$1(prow));
}); return (
new cljs.core.Var(function(){return cljs.core.match.all_wildcards_QMARK_;},new cljs.core.Symbol("cljs.core.match","all-wildcards?","cljs.core.match/all-wildcards?",(-1526115771),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"all-wildcards?","all-wildcards?",(-274394997),null),"cljs/core/match.cljc",(21),(1),(386),(386),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prow","prow",(-1579117230),null)], null)),null,(cljs.core.truth_(cljs.core.match.all_wildcards_QMARK_)?cljs.core.match.all_wildcards_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.drop_nth_bind = (function cljs$core$match$drop_nth_bind(prow,n,ocr){
var ps = new cljs.core.Keyword(null,"ps","ps",(292358046)).cljs$core$IFn$_invoke$arity$1(prow);
var p = ps.call(null,n);
var action = new cljs.core.Keyword(null,"action","action",(-811238024)).cljs$core$IFn$_invoke$arity$1(prow);
var bind_expr = cljs.core.match.leaf_bind_expr.call(null,ocr);
var as = new cljs.core.Keyword(null,"as","as",(1148689641)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p));
var bindings = (function (){var or__20817__auto__ = new cljs.core.Keyword(null,"bindings","bindings",(1271397192)).cljs$core$IFn$_invoke$arity$1(prow);
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var bindings__$1 = (cljs.core.truth_(as)?cljs.core.conj.call(null,bindings,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [as,bind_expr], null)):bindings);
var bindings__$2 = (cljs.core.truth_(cljs.core.match.named_wildcard_pattern_QMARK_.call(null,p))?cljs.core.conj.call(null,bindings__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sym","sym",(-1444860305)).cljs$core$IFn$_invoke$arity$1(p),bind_expr], null)):bindings__$1);
return cljs.core.match.pattern_row.call(null,cljs.core.match.protocols.drop_nth.call(null,ps,n),action,bindings__$2);
}); return (
new cljs.core.Var(function(){return cljs.core.match.drop_nth_bind;},new cljs.core.Symbol("cljs.core.match","drop-nth-bind","cljs.core.match/drop-nth-bind",(-1829178369),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"drop-nth-bind","drop-nth-bind",(1259124233),null),"cljs/core/match.cljc",(20),(1),(389),(389),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prow","prow",(-1579117230),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"ocr","ocr",(622507032),null)], null)),null,(cljs.core.truth_(cljs.core.match.drop_nth_bind)?cljs.core.match.drop_nth_bind.cljs$lang$test:null)])));})()
;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.match.protocols.INodeCompile}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
cljs.core.match.LeafNode = (function (value,bindings,__meta,__extmap,__hash){
this.value = value;
this.bindings = bindings;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.match.LeafNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22669__auto__,k__22670__auto__){
var self__ = this;
var this__22669__auto____$1 = this;
return cljs.core._lookup.call(null,this__22669__auto____$1,k__22670__auto__,null);
});

cljs.core.match.LeafNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22671__auto__,k764,else__22672__auto__){
var self__ = this;
var this__22671__auto____$1 = this;
var G__766 = (((k764 instanceof cljs.core.Keyword))?k764.fqn:null);
switch (G__766) {
case "value":
return self__.value;

break;
case "bindings":
return self__.bindings;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k764,else__22672__auto__);

}
});

cljs.core.match.LeafNode.prototype.cljs$core$match$protocols$INodeCompile$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.match.LeafNode.prototype.cljs$core$match$protocols$INodeCompile$n_to_clj$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!(cljs.core.empty_QMARK_.call(null,self__.bindings))){
var bindings__$1 = cljs.core.remove.call(null,((function (this$__$1){
return (function (p__767){
var vec__768 = p__767;
var sym = cljs.core.nth.call(null,vec__768,(0),null);
var _ = cljs.core.nth.call(null,vec__768,(1),null);
return cljs.core._EQ_.call(null,sym,new cljs.core.Symbol(null,"_","_",(-1201019570),null));
});})(this$__$1))
,self__.bindings);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,bindings__$1))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = self__.value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
} else {
return self__.value;
}
});

cljs.core.match.LeafNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22689__auto__,writer__22690__auto__,opts__22691__auto__){
var self__ = this;
var this__22689__auto____$1 = this;
var pr_pair__22692__auto__ = ((function (this__22689__auto____$1){
return (function (keyval__22693__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22690__auto__,cljs.core.pr_writer,""," ","",opts__22691__auto__,keyval__22693__auto__);
});})(this__22689__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22690__auto__,pr_pair__22692__auto__,"#cljs.core.match.LeafNode{",", ","}",opts__22691__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",(305978217)),self__.value],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",(1271397192)),self__.bindings],null))], null),self__.__extmap));
});

cljs.core.match.LeafNode.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.match.LeafNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__763){
var self__ = this;
var G__763__$1 = this;
return (new cljs.core.RecordIter((0),G__763__$1,(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",(305978217)),new cljs.core.Keyword(null,"bindings","bindings",(1271397192))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.core.match.LeafNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22667__auto__){
var self__ = this;
var this__22667__auto____$1 = this;
return self__.__meta;
});

cljs.core.match.LeafNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22663__auto__){
var self__ = this;
var this__22663__auto____$1 = this;
return (new cljs.core.match.LeafNode(self__.value,self__.bindings,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.match.LeafNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22673__auto__){
var self__ = this;
var this__22673__auto____$1 = this;
return ((2) + cljs.core.count.call(null,self__.__extmap));
});

cljs.core.match.LeafNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22664__auto__){
var self__ = this;
var this__22664__auto____$1 = this;
var h__21845__auto__ = self__.__hash;
if(!((h__21845__auto__ == null))){
return h__21845__auto__;
} else {
var h__21845__auto____$1 = cljs.core.hash_imap.call(null,this__22664__auto____$1);
self__.__hash = h__21845__auto____$1;

return h__21845__auto____$1;
}
});

cljs.core.match.LeafNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22665__auto__,other__22666__auto__){
var self__ = this;
var this__22665__auto____$1 = this;
if(cljs.core.truth_((function (){var and__20770__auto__ = other__22666__auto__;
if(cljs.core.truth_(and__20770__auto__)){
var and__20770__auto____$1 = (this__22665__auto____$1.constructor === other__22666__auto__.constructor);
if(and__20770__auto____$1){
return cljs.core.equiv_map.call(null,this__22665__auto____$1,other__22666__auto__);
} else {
return and__20770__auto____$1;
}
} else {
return and__20770__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.core.match.LeafNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22679__auto__,k__22680__auto__){
var self__ = this;
var this__22679__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",(305978217)),null,new cljs.core.Keyword(null,"bindings","bindings",(1271397192)),null], null), null),k__22680__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22679__auto____$1),self__.__meta),k__22680__auto__);
} else {
return (new cljs.core.match.LeafNode(self__.value,self__.bindings,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22680__auto__)),null));
}
});

cljs.core.match.LeafNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22677__auto__,k__22678__auto__,G__763){
var self__ = this;
var this__22677__auto____$1 = this;
var pred__771 = cljs.core.keyword_identical_QMARK_;
var expr__772 = k__22678__auto__;
if(cljs.core.truth_(pred__771.call(null,new cljs.core.Keyword(null,"value","value",(305978217)),expr__772))){
return (new cljs.core.match.LeafNode(G__763,self__.bindings,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__771.call(null,new cljs.core.Keyword(null,"bindings","bindings",(1271397192)),expr__772))){
return (new cljs.core.match.LeafNode(self__.value,G__763,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.match.LeafNode(self__.value,self__.bindings,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22678__auto__,G__763),null));
}
}
});

cljs.core.match.LeafNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22683__auto__){
var self__ = this;
var this__22683__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",(305978217)),self__.value],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",(1271397192)),self__.bindings],null))], null),self__.__extmap));
});

cljs.core.match.LeafNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22668__auto__,G__763){
var self__ = this;
var this__22668__auto____$1 = this;
return (new cljs.core.match.LeafNode(self__.value,self__.bindings,G__763,self__.__extmap,self__.__hash));
});

cljs.core.match.LeafNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22674__auto__,entry__22675__auto__){
var self__ = this;
var this__22674__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22675__auto__)){
return cljs.core._assoc.call(null,this__22674__auto____$1,cljs.core._nth.call(null,entry__22675__auto__,(0)),cljs.core._nth.call(null,entry__22675__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22674__auto____$1,entry__22675__auto__);
}
});

cljs.core.match.LeafNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",(1946509744),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null)], null);
});

cljs.core.match.LeafNode.cljs$lang$type = true;

cljs.core.match.LeafNode.cljs$lang$ctorPrSeq = (function (this__23044__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.match/LeafNode");
});

cljs.core.match.LeafNode.cljs$lang$ctorPrWriter = (function (this__23044__auto__,writer__23045__auto__){
return cljs.core._write.call(null,writer__23045__auto__,"cljs.core.match/LeafNode");
});

(function (){
cljs.core.match.__GT_LeafNode = (function cljs$core$match$__GT_LeafNode(value,bindings){
return (new cljs.core.match.LeafNode(value,bindings,null,null,null));
}); return (
new cljs.core.Var(function(){return cljs.core.match.__GT_LeafNode;},new cljs.core.Symbol("cljs.core.match","->LeafNode","cljs.core.match/->LeafNode",(1846239813),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"->LeafNode","->LeafNode",(671031443),null),"cljs/core/match.cljc",(20),(1),true,new cljs.core.Keyword(null,"positional","positional",(-203580463)),(410),(410),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",(1946509744),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null)], null)),null,(cljs.core.truth_(cljs.core.match.__GT_LeafNode)?cljs.core.match.__GT_LeafNode.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.match.map__GT_LeafNode = (function cljs$core$match$map__GT_LeafNode(G__765){
return (new cljs.core.match.LeafNode(new cljs.core.Keyword(null,"value","value",(305978217)).cljs$core$IFn$_invoke$arity$1(G__765),new cljs.core.Keyword(null,"bindings","bindings",(1271397192)).cljs$core$IFn$_invoke$arity$1(G__765),null,cljs.core.dissoc.call(null,G__765,new cljs.core.Keyword(null,"value","value",(305978217)),new cljs.core.Keyword(null,"bindings","bindings",(1271397192))),null));
}); return (
new cljs.core.Var(function(){return cljs.core.match.map__GT_LeafNode;},new cljs.core.Symbol("cljs.core.match","map->LeafNode","cljs.core.match/map->LeafNode",(237267817),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"map->LeafNode","map->LeafNode",(928622759),null),"cljs/core/match.cljc",(20),(1),true,new cljs.core.Keyword(null,"map","map",(1371690461)),(410),(410),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"G__765","G__765",(285830248),null)], null)),null,(cljs.core.truth_(cljs.core.match.map__GT_LeafNode)?cljs.core.match.map__GT_LeafNode.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.match.leaf_node = (function cljs$core$match$leaf_node(var_args){
var args775 = [];
var len__23656__auto___778 = arguments.length;
var i__23657__auto___779 = (0);
while(true){
if((i__23657__auto___779 < len__23656__auto___778)){
args775.push((arguments[i__23657__auto___779]));

var G__780 = (i__23657__auto___779 + (1));
i__23657__auto___779 = G__780;
continue;
} else {
}
break;
}

var G__777 = args775.length;
switch (G__777) {
case (1):
return cljs.core.match.leaf_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.core.match.leaf_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args775.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.core.match.leaf_node;},new cljs.core.Symbol("cljs.core.match","leaf-node","cljs.core.match/leaf-node",(1078545759),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"leaf-node","leaf-node",(-1697313047),null),"cljs/core/match.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",(1946509744),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",(1946509744),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",(1946509744),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",(1946509744),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(421),(421),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",(1946509744),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",(1946509744),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null)], null)),null,(cljs.core.truth_(cljs.core.match.leaf_node)?cljs.core.match.leaf_node.cljs$lang$test:null)])));})()
;

cljs.core.match.leaf_node.cljs$core$IFn$_invoke$arity$1 = (function (value){
return (new cljs.core.match.LeafNode(value,cljs.core.PersistentVector.EMPTY,null,null,null));
});

cljs.core.match.leaf_node.cljs$core$IFn$_invoke$arity$2 = (function (value,bindings){
return (new cljs.core.match.LeafNode(value,bindings,null,null,null));
});

cljs.core.match.leaf_node.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return cljs.core.match.leaf_node;},new cljs.core.Symbol("cljs.core.match","leaf-node","cljs.core.match/leaf-node",(1078545759),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"leaf-node","leaf-node",(-1697313047),null),"cljs/core/match.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",(1946509744),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",(1946509744),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",(1946509744),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",(1946509744),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(421),(421),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",(1946509744),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",(1946509744),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null)], null)),null,(cljs.core.truth_(cljs.core.match.leaf_node)?cljs.core.match.leaf_node.cljs$lang$test:null)]));
if(typeof cljs.core.match.leaf_bind_expr !== 'undefined'){
} else {
(function (){
cljs.core.match.leaf_bind_expr = (function (){var method_table__23489__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23490__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23491__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23492__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23493__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core.match","leaf-bind-expr"),((function (method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__,hierarchy__23493__auto__){
return (function (ocr){
return new cljs.core.Keyword(null,"occurrence-type","occurrence-type",(-1111165873)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,ocr));
});})(method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__,hierarchy__23493__auto__))
,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__23493__auto__,method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__));
})(); return (
new cljs.core.Var(function(){return cljs.core.match.leaf_bind_expr;},new cljs.core.Symbol("cljs.core.match","leaf-bind-expr","cljs.core.match/leaf-bind-expr",(1165024029),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"leaf-bind-expr","leaf-bind-expr",(2126814891),null),"cljs/core/match.cljc",(25),(1),(425),(425),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.match.leaf_bind_expr)?cljs.core.match.leaf_bind_expr.cljs$lang$test:null)])));})()
;
}
cljs.core._add_method.call(null,cljs.core.match.leaf_bind_expr,new cljs.core.Keyword(null,"seq","seq",(-1817803783)),(function (ocr){
return new cljs.core.Keyword(null,"bind-expr","bind-expr",(41520549)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,ocr));
}));
cljs.core._add_method.call(null,cljs.core.match.leaf_bind_expr,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296)),(function (ocr){
return new cljs.core.Keyword(null,"bind-expr","bind-expr",(41520549)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,ocr));
}));
cljs.core._add_method.call(null,cljs.core.match.leaf_bind_expr,new cljs.core.Keyword(null,"map","map",(1371690461)),(function (ocr){
var m = cljs.core.meta.call(null,ocr);
return cljs.core.match.val_at_expr.call(null,new cljs.core.Keyword(null,"map-sym","map-sym",(1467543192)).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"key","key",(-1516042587)).cljs$core$IFn$_invoke$arity$1(m));
}));
cljs.core._add_method.call(null,cljs.core.match.leaf_bind_expr,new cljs.core.Keyword(null,"default","default",(-1987822328)),(function (ocr){
return ocr;
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.match.protocols.INodeCompile}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
cljs.core.match.FailNode = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.match.FailNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22669__auto__,k__22670__auto__){
var self__ = this;
var this__22669__auto____$1 = this;
return cljs.core._lookup.call(null,this__22669__auto____$1,k__22670__auto__,null);
});

cljs.core.match.FailNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22671__auto__,k783,else__22672__auto__){
var self__ = this;
var this__22671__auto____$1 = this;
var G__785 = k783;
switch (G__785) {
default:
return cljs.core.get.call(null,self__.__extmap,k783,else__22672__auto__);

}
});

cljs.core.match.FailNode.prototype.cljs$core$match$protocols$INodeCompile$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.match.FailNode.prototype.cljs$core$match$protocols$INodeCompile$n_to_clj$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.core.match._STAR_recur_present_STAR_)){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",(595905694),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",(750655924),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",(-1971828991),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No match found.")));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
} else {
return cljs.core.match.backtrack_expr.call(null);
}
});

cljs.core.match.FailNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22689__auto__,writer__22690__auto__,opts__22691__auto__){
var self__ = this;
var this__22689__auto____$1 = this;
var pr_pair__22692__auto__ = ((function (this__22689__auto____$1){
return (function (keyval__22693__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22690__auto__,cljs.core.pr_writer,""," ","",opts__22691__auto__,keyval__22693__auto__);
});})(this__22689__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22690__auto__,pr_pair__22692__auto__,"#cljs.core.match.FailNode{",", ","}",opts__22691__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

cljs.core.match.FailNode.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.match.FailNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__782){
var self__ = this;
var G__782__$1 = this;
return (new cljs.core.RecordIter((0),G__782__$1,(0),cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.core.match.FailNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22667__auto__){
var self__ = this;
var this__22667__auto____$1 = this;
return self__.__meta;
});

cljs.core.match.FailNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22663__auto__){
var self__ = this;
var this__22663__auto____$1 = this;
return (new cljs.core.match.FailNode(self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.match.FailNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22673__auto__){
var self__ = this;
var this__22673__auto____$1 = this;
return ((0) + cljs.core.count.call(null,self__.__extmap));
});

cljs.core.match.FailNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22664__auto__){
var self__ = this;
var this__22664__auto____$1 = this;
var h__21845__auto__ = self__.__hash;
if(!((h__21845__auto__ == null))){
return h__21845__auto__;
} else {
var h__21845__auto____$1 = cljs.core.hash_imap.call(null,this__22664__auto____$1);
self__.__hash = h__21845__auto____$1;

return h__21845__auto____$1;
}
});

cljs.core.match.FailNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22665__auto__,other__22666__auto__){
var self__ = this;
var this__22665__auto____$1 = this;
if(cljs.core.truth_((function (){var and__20770__auto__ = other__22666__auto__;
if(cljs.core.truth_(and__20770__auto__)){
var and__20770__auto____$1 = (this__22665__auto____$1.constructor === other__22666__auto__.constructor);
if(and__20770__auto____$1){
return cljs.core.equiv_map.call(null,this__22665__auto____$1,other__22666__auto__);
} else {
return and__20770__auto____$1;
}
} else {
return and__20770__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.core.match.FailNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22679__auto__,k__22680__auto__){
var self__ = this;
var this__22679__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__22680__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22679__auto____$1),self__.__meta),k__22680__auto__);
} else {
return (new cljs.core.match.FailNode(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22680__auto__)),null));
}
});

cljs.core.match.FailNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22677__auto__,k__22678__auto__,G__782){
var self__ = this;
var this__22677__auto____$1 = this;
var pred__786 = cljs.core.keyword_identical_QMARK_;
var expr__787 = k__22678__auto__;
return (new cljs.core.match.FailNode(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22678__auto__,G__782),null));
});

cljs.core.match.FailNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22683__auto__){
var self__ = this;
var this__22683__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

cljs.core.match.FailNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22668__auto__,G__782){
var self__ = this;
var this__22668__auto____$1 = this;
return (new cljs.core.match.FailNode(G__782,self__.__extmap,self__.__hash));
});

cljs.core.match.FailNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22674__auto__,entry__22675__auto__){
var self__ = this;
var this__22674__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22675__auto__)){
return cljs.core._assoc.call(null,this__22674__auto____$1,cljs.core._nth.call(null,entry__22675__auto__,(0)),cljs.core._nth.call(null,entry__22675__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22674__auto____$1,entry__22675__auto__);
}
});

cljs.core.match.FailNode.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.match.FailNode.cljs$lang$type = true;

cljs.core.match.FailNode.cljs$lang$ctorPrSeq = (function (this__23044__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.match/FailNode");
});

cljs.core.match.FailNode.cljs$lang$ctorPrWriter = (function (this__23044__auto__,writer__23045__auto__){
return cljs.core._write.call(null,writer__23045__auto__,"cljs.core.match/FailNode");
});

(function (){
cljs.core.match.__GT_FailNode = (function cljs$core$match$__GT_FailNode(){
return (new cljs.core.match.FailNode(null,null,null));
}); return (
new cljs.core.Var(function(){return cljs.core.match.__GT_FailNode;},new cljs.core.Symbol("cljs.core.match","->FailNode","cljs.core.match/->FailNode",(1513378891),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"->FailNode","->FailNode",(-1803490663),null),"cljs/core/match.cljc",(20),(1),true,new cljs.core.Keyword(null,"positional","positional",(-203580463)),(443),(443),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(cljs.core.match.__GT_FailNode)?cljs.core.match.__GT_FailNode.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.match.map__GT_FailNode = (function cljs$core$match$map__GT_FailNode(G__784){
return (new cljs.core.match.FailNode(null,cljs.core.dissoc.call(null,G__784),null));
}); return (
new cljs.core.Var(function(){return cljs.core.match.map__GT_FailNode;},new cljs.core.Symbol("cljs.core.match","map->FailNode","cljs.core.match/map->FailNode",(1474896533),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"map->FailNode","map->FailNode",(-1857724089),null),"cljs/core/match.cljc",(20),(1),true,new cljs.core.Keyword(null,"map","map",(1371690461)),(443),(443),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"G__784","G__784",(-1722204476),null)], null)),null,(cljs.core.truth_(cljs.core.match.map__GT_FailNode)?cljs.core.match.map__GT_FailNode.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.match.fail_node = (function cljs$core$match$fail_node(){
return (new cljs.core.match.FailNode(null,null,null));
}); return (
new cljs.core.Var(function(){return cljs.core.match.fail_node;},new cljs.core.Symbol("cljs.core.match","fail-node","cljs.core.match/fail-node",(1656222896),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"fail-node","fail-node",(672870854),null),"cljs/core/match.cljc",(16),(1),(454),(454),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(cljs.core.match.fail_node)?cljs.core.match.fail_node.cljs$lang$test:null)])));})()
;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.match.protocols.INodeCompile}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
cljs.core.match.BindNode = (function (bindings,node,__meta,__extmap,__hash){
this.bindings = bindings;
this.node = node;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.match.BindNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22669__auto__,k__22670__auto__){
var self__ = this;
var this__22669__auto____$1 = this;
return cljs.core._lookup.call(null,this__22669__auto____$1,k__22670__auto__,null);
});

cljs.core.match.BindNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22671__auto__,k791,else__22672__auto__){
var self__ = this;
var this__22671__auto____$1 = this;
var G__793 = (((k791 instanceof cljs.core.Keyword))?k791.fqn:null);
switch (G__793) {
case "bindings":
return self__.bindings;

break;
case "node":
return self__.node;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k791,else__22672__auto__);

}
});

cljs.core.match.BindNode.prototype.cljs$core$match$protocols$INodeCompile$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.match.BindNode.prototype.cljs$core$match$protocols$INodeCompile$n_to_clj$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,self__.bindings)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.match.protocols.n_to_clj.call(null,self__.node);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
});

cljs.core.match.BindNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22689__auto__,writer__22690__auto__,opts__22691__auto__){
var self__ = this;
var this__22689__auto____$1 = this;
var pr_pair__22692__auto__ = ((function (this__22689__auto____$1){
return (function (keyval__22693__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22690__auto__,cljs.core.pr_writer,""," ","",opts__22691__auto__,keyval__22693__auto__);
});})(this__22689__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22690__auto__,pr_pair__22692__auto__,"#cljs.core.match.BindNode{",", ","}",opts__22691__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",(1271397192)),self__.bindings],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node","node",(581201198)),self__.node],null))], null),self__.__extmap));
});

cljs.core.match.BindNode.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.match.BindNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__790){
var self__ = this;
var G__790__$1 = this;
return (new cljs.core.RecordIter((0),G__790__$1,(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",(1271397192)),new cljs.core.Keyword(null,"node","node",(581201198))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.core.match.BindNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22667__auto__){
var self__ = this;
var this__22667__auto____$1 = this;
return self__.__meta;
});

cljs.core.match.BindNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22663__auto__){
var self__ = this;
var this__22663__auto____$1 = this;
return (new cljs.core.match.BindNode(self__.bindings,self__.node,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.match.BindNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22673__auto__){
var self__ = this;
var this__22673__auto____$1 = this;
return ((2) + cljs.core.count.call(null,self__.__extmap));
});

cljs.core.match.BindNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22664__auto__){
var self__ = this;
var this__22664__auto____$1 = this;
var h__21845__auto__ = self__.__hash;
if(!((h__21845__auto__ == null))){
return h__21845__auto__;
} else {
var h__21845__auto____$1 = cljs.core.hash_imap.call(null,this__22664__auto____$1);
self__.__hash = h__21845__auto____$1;

return h__21845__auto____$1;
}
});

cljs.core.match.BindNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22665__auto__,other__22666__auto__){
var self__ = this;
var this__22665__auto____$1 = this;
if(cljs.core.truth_((function (){var and__20770__auto__ = other__22666__auto__;
if(cljs.core.truth_(and__20770__auto__)){
var and__20770__auto____$1 = (this__22665__auto____$1.constructor === other__22666__auto__.constructor);
if(and__20770__auto____$1){
return cljs.core.equiv_map.call(null,this__22665__auto____$1,other__22666__auto__);
} else {
return and__20770__auto____$1;
}
} else {
return and__20770__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.core.match.BindNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22679__auto__,k__22680__auto__){
var self__ = this;
var this__22679__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bindings","bindings",(1271397192)),null,new cljs.core.Keyword(null,"node","node",(581201198)),null], null), null),k__22680__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22679__auto____$1),self__.__meta),k__22680__auto__);
} else {
return (new cljs.core.match.BindNode(self__.bindings,self__.node,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22680__auto__)),null));
}
});

cljs.core.match.BindNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22677__auto__,k__22678__auto__,G__790){
var self__ = this;
var this__22677__auto____$1 = this;
var pred__794 = cljs.core.keyword_identical_QMARK_;
var expr__795 = k__22678__auto__;
if(cljs.core.truth_(pred__794.call(null,new cljs.core.Keyword(null,"bindings","bindings",(1271397192)),expr__795))){
return (new cljs.core.match.BindNode(G__790,self__.node,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__794.call(null,new cljs.core.Keyword(null,"node","node",(581201198)),expr__795))){
return (new cljs.core.match.BindNode(self__.bindings,G__790,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.match.BindNode(self__.bindings,self__.node,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22678__auto__,G__790),null));
}
}
});

cljs.core.match.BindNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22683__auto__){
var self__ = this;
var this__22683__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",(1271397192)),self__.bindings],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node","node",(581201198)),self__.node],null))], null),self__.__extmap));
});

cljs.core.match.BindNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22668__auto__,G__790){
var self__ = this;
var this__22668__auto____$1 = this;
return (new cljs.core.match.BindNode(self__.bindings,self__.node,G__790,self__.__extmap,self__.__hash));
});

cljs.core.match.BindNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22674__auto__,entry__22675__auto__){
var self__ = this;
var this__22674__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22675__auto__)){
return cljs.core._assoc.call(null,this__22674__auto____$1,cljs.core._nth.call(null,entry__22675__auto__,(0)),cljs.core._nth.call(null,entry__22675__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22674__auto____$1,entry__22675__auto__);
}
});

cljs.core.match.BindNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null),new cljs.core.Symbol(null,"node","node",(-2073234571),null)], null);
});

cljs.core.match.BindNode.cljs$lang$type = true;

cljs.core.match.BindNode.cljs$lang$ctorPrSeq = (function (this__23044__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.match/BindNode");
});

cljs.core.match.BindNode.cljs$lang$ctorPrWriter = (function (this__23044__auto__,writer__23045__auto__){
return cljs.core._write.call(null,writer__23045__auto__,"cljs.core.match/BindNode");
});

(function (){
cljs.core.match.__GT_BindNode = (function cljs$core$match$__GT_BindNode(bindings,node){
return (new cljs.core.match.BindNode(bindings,node,null,null,null));
}); return (
new cljs.core.Var(function(){return cljs.core.match.__GT_BindNode;},new cljs.core.Symbol("cljs.core.match","->BindNode","cljs.core.match/->BindNode",(667620043),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"->BindNode","->BindNode",(-328749283),null),"cljs/core/match.cljc",(20),(1),true,new cljs.core.Keyword(null,"positional","positional",(-203580463)),(460),(460),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null),new cljs.core.Symbol(null,"node","node",(-2073234571),null)], null)),null,(cljs.core.truth_(cljs.core.match.__GT_BindNode)?cljs.core.match.__GT_BindNode.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.match.map__GT_BindNode = (function cljs$core$match$map__GT_BindNode(G__792){
return (new cljs.core.match.BindNode(new cljs.core.Keyword(null,"bindings","bindings",(1271397192)).cljs$core$IFn$_invoke$arity$1(G__792),new cljs.core.Keyword(null,"node","node",(581201198)).cljs$core$IFn$_invoke$arity$1(G__792),null,cljs.core.dissoc.call(null,G__792,new cljs.core.Keyword(null,"bindings","bindings",(1271397192)),new cljs.core.Keyword(null,"node","node",(581201198))),null));
}); return (
new cljs.core.Var(function(){return cljs.core.match.map__GT_BindNode;},new cljs.core.Symbol("cljs.core.match","map->BindNode","cljs.core.match/map->BindNode",(1861527395),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"map->BindNode","map->BindNode",(-1806114767),null),"cljs/core/match.cljc",(20),(1),true,new cljs.core.Keyword(null,"map","map",(1371690461)),(460),(460),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"G__792","G__792",(1836168784),null)], null)),null,(cljs.core.truth_(cljs.core.match.map__GT_BindNode)?cljs.core.match.map__GT_BindNode.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.match.bind_node = (function cljs$core$match$bind_node(bindings,node){
return (new cljs.core.match.BindNode(bindings,node,null,null,null));
}); return (
new cljs.core.Var(function(){return cljs.core.match.bind_node;},new cljs.core.Symbol("cljs.core.match","bind-node","cljs.core.match/bind-node",(1899695646),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"bind-node","bind-node",(1044859212),null),"cljs/core/match.cljc",(16),(1),(466),(466),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null),new cljs.core.Symbol(null,"node","node",(-2073234571),null)], null)),null,(cljs.core.truth_(cljs.core.match.bind_node)?cljs.core.match.bind_node.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.to_source; return (
new cljs.core.Var(function(){return cljs.core.match.to_source;},new cljs.core.Symbol("cljs.core.match","to-source","cljs.core.match/to-source",(-1487572746),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"to-source","to-source",(-106840648),null),"cljs/core/match.cljc",(19),(1),(472),true,(472),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.match.to_source)?cljs.core.match.to_source.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.dag_clause_to_clj = (function cljs$core$match$dag_clause_to_clj(occurrence,pattern,action){
var test = ((((!((pattern == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === pattern.cljs$core$match$protocols$IPatternCompile$)))?true:(((!pattern.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.match.protocols.IPatternCompile,pattern):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.match.protocols.IPatternCompile,pattern)))?cljs.core.match.protocols.to_source_STAR_.call(null,pattern,occurrence):cljs.core.match.to_source.call(null,pattern,occurrence));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [test,cljs.core.match.protocols.n_to_clj.call(null,action)], null);
}); return (
new cljs.core.Var(function(){return cljs.core.match.dag_clause_to_clj;},new cljs.core.Symbol("cljs.core.match","dag-clause-to-clj","cljs.core.match/dag-clause-to-clj",(1753756081),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"dag-clause-to-clj","dag-clause-to-clj",(907345775),null),"cljs/core/match.cljc",(24),(1),(474),(474),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"occurrence","occurrence",(-90277627),null),new cljs.core.Symbol(null,"pattern","pattern",(1882666950),null),new cljs.core.Symbol(null,"action","action",(829293503),null)], null)),null,(cljs.core.truth_(cljs.core.match.dag_clause_to_clj)?cljs.core.match.dag_clause_to_clj.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.catch_error = (function cljs$core$match$catch_error(var_args){
var args__23658__auto__ = [];
var len__23656__auto___801 = arguments.length;
var i__23657__auto___802 = (0);
while(true){
if((i__23657__auto___802 < len__23656__auto___801)){
args__23658__auto__.push((arguments[i__23657__auto___802]));

var G__803 = (i__23657__auto___802 + (1));
i__23657__auto___802 = G__803;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((0) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((0)),(0),null)):null);
return cljs.core.match.catch_error.cljs$core$IFn$_invoke$arity$variadic(argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return cljs.core.match.catch_error;},new cljs.core.Symbol("cljs.core.match","catch-error","cljs.core.match/catch-error",(-902147361),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"catch-error","catch-error",(9313665),null),"cljs/core/match.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(480),(480),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),null,(cljs.core.truth_(cljs.core.match.catch_error)?cljs.core.match.catch_error.cljs$lang$test:null)])));})()
;

cljs.core.match.catch_error.cljs$core$IFn$_invoke$arity$variadic = (function (body){
var err_sym = new cljs.core.Symbol("js","Error","js/Error",(-1692659266),null);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"catch","catch",(-1616370245),null)),(function (){var x__23399__auto__ = err_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"e__22__auto__","e__22__auto__",(460521825),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","identical?","cljs.core/identical?",(608476750),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"e__22__auto__","e__22__auto__",(460521825),null)),(function (){var x__23399__auto__ = cljs.core.match.backtrack_sym.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),body));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",(595905694),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"e__22__auto__","e__22__auto__",(460521825),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
});

cljs.core.match.catch_error.cljs$lang$maxFixedArity = (0);

cljs.core.match.catch_error.cljs$lang$applyTo = (function (seq800){
return cljs.core.match.catch_error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq800));
});

new cljs.core.Var(function(){return cljs.core.match.catch_error;},new cljs.core.Symbol("cljs.core.match","catch-error","cljs.core.match/catch-error",(-902147361),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"catch-error","catch-error",(9313665),null),"cljs/core/match.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(480),(480),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),null,(cljs.core.truth_(cljs.core.match.catch_error)?cljs.core.match.catch_error.cljs$lang$test:null)]));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.match.protocols.INodeCompile}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
cljs.core.match.SwitchNode = (function (occurrence,cases,default$,__meta,__extmap,__hash){
this.occurrence = occurrence;
this.cases = cases;
this.default$ = default$;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.match.SwitchNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22669__auto__,k__22670__auto__){
var self__ = this;
var this__22669__auto____$1 = this;
return cljs.core._lookup.call(null,this__22669__auto____$1,k__22670__auto__,null);
});

cljs.core.match.SwitchNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22671__auto__,k805,else__22672__auto__){
var self__ = this;
var this__22671__auto____$1 = this;
var G__807 = (((k805 instanceof cljs.core.Keyword))?k805.fqn:null);
switch (G__807) {
case "occurrence":
return self__.occurrence;

break;
case "cases":
return self__.cases;

break;
case "default":
return self__.default$;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k805,else__22672__auto__);

}
});

cljs.core.match.SwitchNode.prototype.cljs$core$match$protocols$INodeCompile$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.match.SwitchNode.prototype.cljs$core$match$protocols$INodeCompile$n_to_clj$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var clauses = cljs.core.doall.call(null,cljs.core.mapcat.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core.match.dag_clause_to_clj,self__.occurrence),self__.cases));
var bind_expr = new cljs.core.Keyword(null,"bind-expr","bind-expr",(41520549)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,self__.occurrence));
var cond_expr = (cljs.core.truth_(cljs.core.match._STAR_recur_present_STAR_)?cljs.core.doall.call(null,cljs.core.concat.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",(2005388338),null)),clauses)),cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"else","else",(-1508377146))),(function (){var x__23399__auto__ = cljs.core.match.protocols.n_to_clj.call(null,self__.default$);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())))):cljs.core.doall.call(null,cljs.core.concat.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",(2005388338),null)),clauses)),cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"else","else",(-1508377146))),(function (){var x__23399__auto__ = cljs.core.match.backtrack_expr.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())))));
if(cljs.core.truth_(cljs.core.match._STAR_recur_present_STAR_)){
if(cljs.core.truth_(bind_expr)){
return cljs.core.doall.call(null,cljs.core.concat.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = self__.occurrence;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = bind_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())),(function (){var x__23399__auto__ = cond_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
} else {
return cond_expr;
}
} else {
if(cljs.core.truth_(bind_expr)){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",(-1273693247),null)),(function (){var x__23399__auto__ = cljs.core.doall.call(null,cljs.core.concat.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = self__.occurrence;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = bind_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())),(function (){var x__23399__auto__ = cond_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.match.catch_error.call(null,cljs.core.match.protocols.n_to_clj.call(null,self__.default$));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
} else {
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",(-1273693247),null)),(function (){var x__23399__auto__ = cond_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.match.catch_error.call(null,cljs.core.match.protocols.n_to_clj.call(null,self__.default$));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
}
}
});

cljs.core.match.SwitchNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22689__auto__,writer__22690__auto__,opts__22691__auto__){
var self__ = this;
var this__22689__auto____$1 = this;
var pr_pair__22692__auto__ = ((function (this__22689__auto____$1){
return (function (keyval__22693__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22690__auto__,cljs.core.pr_writer,""," ","",opts__22691__auto__,keyval__22693__auto__);
});})(this__22689__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22690__auto__,pr_pair__22692__auto__,"#cljs.core.match.SwitchNode{",", ","}",opts__22691__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"occurrence","occurrence",(-1730809154)),self__.occurrence],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cases","cases",(253862775)),self__.cases],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"default","default",(-1987822328)),self__.default$],null))], null),self__.__extmap));
});

cljs.core.match.SwitchNode.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.match.SwitchNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__804){
var self__ = this;
var G__804__$1 = this;
return (new cljs.core.RecordIter((0),G__804__$1,(3),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"occurrence","occurrence",(-1730809154)),new cljs.core.Keyword(null,"cases","cases",(253862775)),new cljs.core.Keyword(null,"default","default",(-1987822328))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.core.match.SwitchNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22667__auto__){
var self__ = this;
var this__22667__auto____$1 = this;
return self__.__meta;
});

cljs.core.match.SwitchNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22663__auto__){
var self__ = this;
var this__22663__auto____$1 = this;
return (new cljs.core.match.SwitchNode(self__.occurrence,self__.cases,self__.default$,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.match.SwitchNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22673__auto__){
var self__ = this;
var this__22673__auto____$1 = this;
return ((3) + cljs.core.count.call(null,self__.__extmap));
});

cljs.core.match.SwitchNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22664__auto__){
var self__ = this;
var this__22664__auto____$1 = this;
var h__21845__auto__ = self__.__hash;
if(!((h__21845__auto__ == null))){
return h__21845__auto__;
} else {
var h__21845__auto____$1 = cljs.core.hash_imap.call(null,this__22664__auto____$1);
self__.__hash = h__21845__auto____$1;

return h__21845__auto____$1;
}
});

cljs.core.match.SwitchNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22665__auto__,other__22666__auto__){
var self__ = this;
var this__22665__auto____$1 = this;
if(cljs.core.truth_((function (){var and__20770__auto__ = other__22666__auto__;
if(cljs.core.truth_(and__20770__auto__)){
var and__20770__auto____$1 = (this__22665__auto____$1.constructor === other__22666__auto__.constructor);
if(and__20770__auto____$1){
return cljs.core.equiv_map.call(null,this__22665__auto____$1,other__22666__auto__);
} else {
return and__20770__auto____$1;
}
} else {
return and__20770__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.core.match.SwitchNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22679__auto__,k__22680__auto__){
var self__ = this;
var this__22679__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"occurrence","occurrence",(-1730809154)),null,new cljs.core.Keyword(null,"cases","cases",(253862775)),null,new cljs.core.Keyword(null,"default","default",(-1987822328)),null], null), null),k__22680__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22679__auto____$1),self__.__meta),k__22680__auto__);
} else {
return (new cljs.core.match.SwitchNode(self__.occurrence,self__.cases,self__.default$,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22680__auto__)),null));
}
});

cljs.core.match.SwitchNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22677__auto__,k__22678__auto__,G__804){
var self__ = this;
var this__22677__auto____$1 = this;
var pred__808 = cljs.core.keyword_identical_QMARK_;
var expr__809 = k__22678__auto__;
if(cljs.core.truth_(pred__808.call(null,new cljs.core.Keyword(null,"occurrence","occurrence",(-1730809154)),expr__809))){
return (new cljs.core.match.SwitchNode(G__804,self__.cases,self__.default$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__808.call(null,new cljs.core.Keyword(null,"cases","cases",(253862775)),expr__809))){
return (new cljs.core.match.SwitchNode(self__.occurrence,G__804,self__.default$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__808.call(null,new cljs.core.Keyword(null,"default","default",(-1987822328)),expr__809))){
return (new cljs.core.match.SwitchNode(self__.occurrence,self__.cases,G__804,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.match.SwitchNode(self__.occurrence,self__.cases,self__.default$,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22678__auto__,G__804),null));
}
}
}
});

cljs.core.match.SwitchNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22683__auto__){
var self__ = this;
var this__22683__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"occurrence","occurrence",(-1730809154)),self__.occurrence],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cases","cases",(253862775)),self__.cases],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"default","default",(-1987822328)),self__.default$],null))], null),self__.__extmap));
});

cljs.core.match.SwitchNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22668__auto__,G__804){
var self__ = this;
var this__22668__auto____$1 = this;
return (new cljs.core.match.SwitchNode(self__.occurrence,self__.cases,self__.default$,G__804,self__.__extmap,self__.__hash));
});

cljs.core.match.SwitchNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22674__auto__,entry__22675__auto__){
var self__ = this;
var this__22674__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22675__auto__)){
return cljs.core._assoc.call(null,this__22674__auto____$1,cljs.core._nth.call(null,entry__22675__auto__,(0)),cljs.core._nth.call(null,entry__22675__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22674__auto____$1,entry__22675__auto__);
}
});

cljs.core.match.SwitchNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"occurrence","occurrence",(-90277627),null),new cljs.core.Symbol(null,"cases","cases",(1894394302),null),new cljs.core.Symbol(null,"default","default",(-347290801),null)], null);
});

cljs.core.match.SwitchNode.cljs$lang$type = true;

cljs.core.match.SwitchNode.cljs$lang$ctorPrSeq = (function (this__23044__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.match/SwitchNode");
});

cljs.core.match.SwitchNode.cljs$lang$ctorPrWriter = (function (this__23044__auto__,writer__23045__auto__){
return cljs.core._write.call(null,writer__23045__auto__,"cljs.core.match/SwitchNode");
});

(function (){
cljs.core.match.__GT_SwitchNode = (function cljs$core$match$__GT_SwitchNode(occurrence,cases,default$){
return (new cljs.core.match.SwitchNode(occurrence,cases,default$,null,null,null));
}); return (
new cljs.core.Var(function(){return cljs.core.match.__GT_SwitchNode;},new cljs.core.Symbol("cljs.core.match","->SwitchNode","cljs.core.match/->SwitchNode",(-2080967013),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"->SwitchNode","->SwitchNode",(-96292503),null),"cljs/core/match.cljc",(22),(1),true,new cljs.core.Keyword(null,"positional","positional",(-203580463)),(488),(488),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"occurrence","occurrence",(-90277627),null),new cljs.core.Symbol(null,"cases","cases",(1894394302),null),new cljs.core.Symbol(null,"default","default",(-347290801),null)], null)),null,(cljs.core.truth_(cljs.core.match.__GT_SwitchNode)?cljs.core.match.__GT_SwitchNode.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.match.map__GT_SwitchNode = (function cljs$core$match$map__GT_SwitchNode(G__806){
return (new cljs.core.match.SwitchNode(new cljs.core.Keyword(null,"occurrence","occurrence",(-1730809154)).cljs$core$IFn$_invoke$arity$1(G__806),new cljs.core.Keyword(null,"cases","cases",(253862775)).cljs$core$IFn$_invoke$arity$1(G__806),new cljs.core.Keyword(null,"default","default",(-1987822328)).cljs$core$IFn$_invoke$arity$1(G__806),null,cljs.core.dissoc.call(null,G__806,new cljs.core.Keyword(null,"occurrence","occurrence",(-1730809154)),new cljs.core.Keyword(null,"cases","cases",(253862775)),new cljs.core.Keyword(null,"default","default",(-1987822328))),null));
}); return (
new cljs.core.Var(function(){return cljs.core.match.map__GT_SwitchNode;},new cljs.core.Symbol("cljs.core.match","map->SwitchNode","cljs.core.match/map->SwitchNode",(-1039966613),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"map->SwitchNode","map->SwitchNode",(-2068406983),null),"cljs/core/match.cljc",(22),(1),true,new cljs.core.Keyword(null,"map","map",(1371690461)),(488),(488),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"G__806","G__806",(1697507556),null)], null)),null,(cljs.core.truth_(cljs.core.match.map__GT_SwitchNode)?cljs.core.match.map__GT_SwitchNode.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.match.switch_node = (function cljs$core$match$switch_node(occurrence,cases,default$){
if(cljs.core.sequential_QMARK_.call(null,cases)){
} else {
throw (new Error("Assert failed: (sequential? cases)"));
}

return (new cljs.core.match.SwitchNode(occurrence,cases,default$,null,null,null));
}); return (
new cljs.core.Var(function(){return cljs.core.match.switch_node;},new cljs.core.Symbol("cljs.core.match","switch-node","cljs.core.match/switch-node",(-2055130555),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"switch-node","switch-node",(-856330093),null),"cljs/core/match.cljc",(18),(1),(524),(524),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"occurrence","occurrence",(-90277627),null),new cljs.core.Symbol(null,"cases","cases",(1894394302),null),new cljs.core.Symbol(null,"default","default",(-347290801),null)], null)),null,(cljs.core.truth_(cljs.core.match.switch_node)?cljs.core.match.switch_node.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.first_column_QMARK_ = (function cljs$core$match$first_column_QMARK_(i){
return (i === (0));
}); return (
new cljs.core.Var(function(){return cljs.core.match.first_column_QMARK_;},new cljs.core.Symbol("cljs.core.match","first-column?","cljs.core.match/first-column?",(-1103559351),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"first-column?","first-column?",(-2016589925),null),"cljs/core/match.cljc",(20),(1),(532),(532),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",(253690212),null)], null)),null,(cljs.core.truth_(cljs.core.match.first_column_QMARK_)?cljs.core.match.first_column_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.empty_row_QMARK_ = (function cljs$core$match$empty_row_QMARK_(row){
var ps = new cljs.core.Keyword(null,"ps","ps",(292358046)).cljs$core$IFn$_invoke$arity$1(row);
return (!((ps == null))) && (cljs.core.empty_QMARK_.call(null,ps));
}); return (
new cljs.core.Var(function(){return cljs.core.match.empty_row_QMARK_;},new cljs.core.Symbol("cljs.core.match","empty-row?","cljs.core.match/empty-row?",(2132407557),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"empty-row?","empty-row?",(-1313535305),null),"cljs/core/match.cljc",(17),(1),(534),(534),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"row","row",(1070392006),null)], null)),null,(cljs.core.truth_(cljs.core.match.empty_row_QMARK_)?cljs.core.match.empty_row_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.score_column = (function cljs$core$match$score_column(i,col){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.reduce.call(null,cljs.core._PLUS_,(0),col)], null);
}); return (
new cljs.core.Var(function(){return cljs.core.match.score_column;},new cljs.core.Symbol("cljs.core.match","score-column","cljs.core.match/score-column",(-632066230),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"score-column","score-column",(-1812157032),null),"cljs/core/match.cljc",(19),(1),(539),(539),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",(253690212),null),new cljs.core.Symbol(null,"col","col",(-318831557),null)], null)),null,(cljs.core.truth_(cljs.core.match.score_column)?cljs.core.match.score_column.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.width = (function cljs$core$match$width(p__812){
var map__815 = p__812;
var map__815__$1 = ((((!((map__815 == null)))?((((map__815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__815.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__815):map__815);
var rows = cljs.core.get.call(null,map__815__$1,new cljs.core.Keyword(null,"rows","rows",(850049680)));
if(!(cljs.core.empty_QMARK_.call(null,rows))){
return cljs.core.count.call(null,rows.call(null,(0)));
} else {
return (0);
}
}); return (
new cljs.core.Var(function(){return cljs.core.match.width;},new cljs.core.Symbol("cljs.core.match","width","cljs.core.match/width",(-2079805376),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"width","width",(1256460050),null),"cljs/core/match.cljc",(12),(1),(542),(542),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"rows","rows",(-1804386089),null),new cljs.core.Keyword(null,"rows","rows",(850049680))], null)], null)),null,(cljs.core.truth_(cljs.core.match.width)?cljs.core.match.width.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.height = (function cljs$core$match$height(p__817){
var map__820 = p__817;
var map__820__$1 = ((((!((map__820 == null)))?((((map__820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__820.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__820):map__820);
var rows = cljs.core.get.call(null,map__820__$1,new cljs.core.Keyword(null,"rows","rows",(850049680)));
return cljs.core.count.call(null,rows);
}); return (
new cljs.core.Var(function(){return cljs.core.match.height;},new cljs.core.Symbol("cljs.core.match","height","cljs.core.match/height",(-662945385),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"height","height",(-1629257147),null),"cljs/core/match.cljc",(13),(1),(547),(547),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"rows","rows",(-1804386089),null),new cljs.core.Keyword(null,"rows","rows",(850049680))], null)], null)),null,(cljs.core.truth_(cljs.core.match.height)?cljs.core.match.height.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.dim = (function cljs$core$match$dim(pm){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.match.width.call(null,pm),cljs.core.match.height.call(null,pm)], null);
}); return (
new cljs.core.Var(function(){return cljs.core.match.dim;},new cljs.core.Symbol("cljs.core.match","dim","cljs.core.match/dim",(499707409),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"dim","dim",(1143286991),null),"cljs/core/match.cljc",(10),(1),(550),(550),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pm","pm",(-840698341),null)], null)),null,(cljs.core.truth_(cljs.core.match.dim)?cljs.core.match.dim.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.empty_matrix_QMARK_ = (function cljs$core$match$empty_matrix_QMARK_(pm){
return cljs.core._EQ_.call(null,cljs.core.match.dim.call(null,pm),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
}); return (
new cljs.core.Var(function(){return cljs.core.match.empty_matrix_QMARK_;},new cljs.core.Symbol("cljs.core.match","empty-matrix?","cljs.core.match/empty-matrix?",(792891963),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"empty-matrix?","empty-matrix?",(1993792757),null),"cljs/core/match.cljc",(20),(1),(553),(553),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pm","pm",(-840698341),null)], null)),null,(cljs.core.truth_(cljs.core.match.empty_matrix_QMARK_)?cljs.core.match.empty_matrix_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.column = (function cljs$core$match$column(p__822,i){
var map__825 = p__822;
var map__825__$1 = ((((!((map__825 == null)))?((((map__825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__825.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__825):map__825);
var rows = cljs.core.get.call(null,map__825__$1,new cljs.core.Keyword(null,"rows","rows",(850049680)));
return cljs.core.vec.call(null,cljs.core.map.call(null,((function (map__825,map__825__$1,rows){
return (function (p1__23_SHARP_){
return cljs.core.nth.call(null,p1__23_SHARP_,i);
});})(map__825,map__825__$1,rows))
,rows));
}); return (
new cljs.core.Var(function(){return cljs.core.match.column;},new cljs.core.Symbol("cljs.core.match","column","cljs.core.match/column",(-2092179420),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"column","column",(-576213674),null),"cljs/core/match.cljc",(13),(1),(556),(556),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"rows","rows",(-1804386089),null),new cljs.core.Keyword(null,"rows","rows",(850049680))], null),new cljs.core.Symbol(null,"i","i",(253690212),null)], null)),null,(cljs.core.truth_(cljs.core.match.column)?cljs.core.match.column.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.row = (function cljs$core$match$row(p__827,j){
var map__830 = p__827;
var map__830__$1 = ((((!((map__830 == null)))?((((map__830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__830.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__830):map__830);
var rows = cljs.core.get.call(null,map__830__$1,new cljs.core.Keyword(null,"rows","rows",(850049680)));
return cljs.core.nth.call(null,rows,j);
}); return (
new cljs.core.Var(function(){return cljs.core.match.row;},new cljs.core.Symbol("cljs.core.match","row","cljs.core.match/row",(-127983184),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"row","row",(1070392006),null),"cljs/core/match.cljc",(10),(1),(559),(559),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"rows","rows",(-1804386089),null),new cljs.core.Keyword(null,"rows","rows",(850049680))], null),new cljs.core.Symbol(null,"j","j",(242556762),null)], null)),null,(cljs.core.truth_(cljs.core.match.row)?cljs.core.match.row.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.rows = (function cljs$core$match$rows(p__832){
var map__835 = p__832;
var map__835__$1 = ((((!((map__835 == null)))?((((map__835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__835.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__835):map__835);
var rows = cljs.core.get.call(null,map__835__$1,new cljs.core.Keyword(null,"rows","rows",(850049680)));
return rows;
}); return (
new cljs.core.Var(function(){return cljs.core.match.rows;},new cljs.core.Symbol("cljs.core.match","rows","cljs.core.match/rows",(-757038171),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null),"cljs/core/match.cljc",(11),(1),(562),(562),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"rows","rows",(-1804386089),null),new cljs.core.Keyword(null,"rows","rows",(850049680))], null)], null)),null,(cljs.core.truth_(cljs.core.match.rows)?cljs.core.match.rows.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.pattern_at = (function cljs$core$match$pattern_at(p__837,i,j){
var map__840 = p__837;
var map__840__$1 = ((((!((map__840 == null)))?((((map__840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__840.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__840):map__840);
var rows = cljs.core.get.call(null,map__840__$1,new cljs.core.Keyword(null,"rows","rows",(850049680)));
return rows.call(null,j).call(null,i);
}); return (
new cljs.core.Var(function(){return cljs.core.match.pattern_at;},new cljs.core.Symbol("cljs.core.match","pattern-at","cljs.core.match/pattern-at",(2096889978),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"pattern-at","pattern-at",(839402952),null),"cljs/core/match.cljc",(17),(1),(564),(564),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"rows","rows",(-1804386089),null),new cljs.core.Keyword(null,"rows","rows",(850049680))], null),new cljs.core.Symbol(null,"i","i",(253690212),null),new cljs.core.Symbol(null,"j","j",(242556762),null)], null)),null,(cljs.core.truth_(cljs.core.match.pattern_at)?cljs.core.match.pattern_at.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.action_for_row = (function cljs$core$match$action_for_row(p__842,j){
var map__845 = p__842;
var map__845__$1 = ((((!((map__845 == null)))?((((map__845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__845.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__845):map__845);
var rows = cljs.core.get.call(null,map__845__$1,new cljs.core.Keyword(null,"rows","rows",(850049680)));
return new cljs.core.Keyword(null,"action","action",(-811238024)).cljs$core$IFn$_invoke$arity$1(rows.call(null,j));
}); return (
new cljs.core.Var(function(){return cljs.core.match.action_for_row;},new cljs.core.Symbol("cljs.core.match","action-for-row","cljs.core.match/action-for-row",(-386053643),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"action-for-row","action-for-row",(778172227),null),"cljs/core/match.cljc",(21),(1),(567),(567),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"rows","rows",(-1804386089),null),new cljs.core.Keyword(null,"rows","rows",(850049680))], null),new cljs.core.Symbol(null,"j","j",(242556762),null)], null)),null,(cljs.core.truth_(cljs.core.match.action_for_row)?cljs.core.match.action_for_row.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.occurrences = (function cljs$core$match$occurrences(pm){
return new cljs.core.Keyword(null,"ocrs","ocrs",(-1836216413)).cljs$core$IFn$_invoke$arity$1(pm);
}); return (
new cljs.core.Var(function(){return cljs.core.match.occurrences;},new cljs.core.Symbol("cljs.core.match","occurrences","cljs.core.match/occurrences",(-1427503419),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"occurrences","occurrences",(1935556883),null),"cljs/core/match.cljc",(18),(1),(570),(570),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pm","pm",(-840698341),null)], null)),null,(cljs.core.truth_(cljs.core.match.occurrences)?cljs.core.match.occurrences.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.row_bindings = (function cljs$core$match$row_bindings(f,ocrs){
return cljs.core.concat.call(null,new cljs.core.Keyword(null,"bindings","bindings",(1271397192)).cljs$core$IFn$_invoke$arity$1(f),cljs.core.map.call(null,(function (p__855){
var vec__856 = p__855;
var p = cljs.core.nth.call(null,vec__856,(0),null);
var ocr = cljs.core.nth.call(null,vec__856,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sym","sym",(-1444860305)).cljs$core$IFn$_invoke$arity$1(p),cljs.core.match.leaf_bind_expr.call(null,ocr)], null);
}),cljs.core.filter.call(null,(function (p__859){
var vec__860 = p__859;
var p = cljs.core.nth.call(null,vec__860,(0),null);
var ocr = cljs.core.nth.call(null,vec__860,(1),null);
return cljs.core.match.named_wildcard_pattern_QMARK_.call(null,p);
}),cljs.core.map.call(null,cljs.core.vector,new cljs.core.Keyword(null,"ps","ps",(292358046)).cljs$core$IFn$_invoke$arity$1(f),ocrs))));
}); return (
new cljs.core.Var(function(){return cljs.core.match.row_bindings;},new cljs.core.Symbol("cljs.core.match","row-bindings","cljs.core.match/row-bindings",(1625219513),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"row-bindings","row-bindings",(659105547),null),"cljs/core/match.cljc",(19),(1),(573),(573),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"ocrs","ocrs",(-195684886),null)], null)),null,(cljs.core.truth_(cljs.core.match.row_bindings)?cljs.core.match.row_bindings.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.existential_pattern_QMARK_ = (function cljs$core$match$existential_pattern_QMARK_(x){
if(!((x == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$match$protocols$IExistentialPattern$))){
return true;
} else {
return false;
}
} else {
return false;
}
}); return (
new cljs.core.Var(function(){return cljs.core.match.existential_pattern_QMARK_;},new cljs.core.Symbol("cljs.core.match","existential-pattern?","cljs.core.match/existential-pattern?",(-1151130362),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"existential-pattern?","existential-pattern?",(-40933708),null),"cljs/core/match.cljc",(27),(1),(579),(579),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(cljs.core.match.existential_pattern_QMARK_)?cljs.core.match.existential_pattern_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.wildcard_or_existential_QMARK_ = (function cljs$core$match$wildcard_or_existential_QMARK_(x){
var or__20817__auto__ = cljs.core.match.wildcard_pattern_QMARK_.call(null,x);
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return cljs.core.match.existential_pattern_QMARK_.call(null,x);
}
}); return (
new cljs.core.Var(function(){return cljs.core.match.wildcard_or_existential_QMARK_;},new cljs.core.Symbol("cljs.core.match","wildcard-or-existential?","cljs.core.match/wildcard-or-existential?",(-821771500),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"wildcard-or-existential?","wildcard-or-existential?",(99651290),null),"cljs/core/match.cljc",(31),(1),(582),(582),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(cljs.core.match.wildcard_or_existential_QMARK_)?cljs.core.match.wildcard_or_existential_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.constructors_above_QMARK_ = (function cljs$core$match$constructors_above_QMARK_(pm,i,j){
return cljs.core.every_QMARK_.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.match.wildcard_or_existential_QMARK_),cljs.core.take.call(null,j,cljs.core.match.column.call(null,pm,i)));
}); return (
new cljs.core.Var(function(){return cljs.core.match.constructors_above_QMARK_;},new cljs.core.Symbol("cljs.core.match","constructors-above?","cljs.core.match/constructors-above?",(-1534991042),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"constructors-above?","constructors-above?",(-1645389752),null),"cljs/core/match.cljc",(26),(1),(586),(586),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pm","pm",(-840698341),null),new cljs.core.Symbol(null,"i","i",(253690212),null),new cljs.core.Symbol(null,"j","j",(242556762),null)], null)),null,(cljs.core.truth_(cljs.core.match.constructors_above_QMARK_)?cljs.core.match.constructors_above_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.pattern_score = (function cljs$core$match$pattern_score(pm,i,j){
var p = cljs.core.match.pattern_at.call(null,pm,i,j);
if(cljs.core.truth_((function (){var or__20817__auto__ = cljs.core.match.wildcard_pattern_QMARK_.call(null,p);
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return cljs.core.not.call(null,cljs.core.match.constructors_above_QMARK_.call(null,pm,i,j));
}
})())){
return (0);
} else {
if(cljs.core.truth_(cljs.core.match.existential_pattern_QMARK_.call(null,p))){
return (1);
} else {
return (2);

}
}
}); return (
new cljs.core.Var(function(){return cljs.core.match.pattern_score;},new cljs.core.Symbol("cljs.core.match","pattern-score","cljs.core.match/pattern-score",(1145873066),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"pattern-score","pattern-score",(-2100238852),null),"cljs/core/match.cljc",(20),(1),(596),(596),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pm","pm",(-840698341),null),new cljs.core.Symbol(null,"i","i",(253690212),null),new cljs.core.Symbol(null,"j","j",(242556762),null)], null)),null,(cljs.core.truth_(cljs.core.match.pattern_score)?cljs.core.match.pattern_score.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.useful_matrix = (function cljs$core$match$useful_matrix(pm){
return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,cljs.core.match.width.call(null,pm),(function (){var iter__23197__auto__ = (function cljs$core$match$useful_matrix_$_iter__871(s__872){
return (new cljs.core.LazySeq(null,(function (){
var s__872__$1 = s__872;
while(true){
var temp__19834__auto__ = cljs.core.seq.call(null,s__872__$1);
if(temp__19834__auto__){
var xs__19764__auto__ = temp__19834__auto__;
var j = cljs.core.first.call(null,xs__19764__auto__);
var iterys__23193__auto__ = ((function (s__872__$1,j,xs__19764__auto__,temp__19834__auto__){
return (function cljs$core$match$useful_matrix_$_iter__871_$_iter__873(s__874){
return (new cljs.core.LazySeq(null,((function (s__872__$1,j,xs__19764__auto__,temp__19834__auto__){
return (function (){
var s__874__$1 = s__874;
while(true){
var temp__19834__auto____$1 = cljs.core.seq.call(null,s__874__$1);
if(temp__19834__auto____$1){
var s__874__$2 = temp__19834__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__874__$2)){
var c__23195__auto__ = cljs.core.chunk_first.call(null,s__874__$2);
var size__23196__auto__ = cljs.core.count.call(null,c__23195__auto__);
var b__876 = cljs.core.chunk_buffer.call(null,size__23196__auto__);
if((function (){var i__875 = (0);
while(true){
if((i__875 < size__23196__auto__)){
var i = cljs.core._nth.call(null,c__23195__auto__,i__875);
cljs.core.chunk_append.call(null,b__876,cljs.core.match.pattern_score.call(null,pm,i,j));

var G__877 = (i__875 + (1));
i__875 = G__877;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__876),cljs$core$match$useful_matrix_$_iter__871_$_iter__873.call(null,cljs.core.chunk_rest.call(null,s__874__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__876),null);
}
} else {
var i = cljs.core.first.call(null,s__874__$2);
return cljs.core.cons.call(null,cljs.core.match.pattern_score.call(null,pm,i,j),cljs$core$match$useful_matrix_$_iter__871_$_iter__873.call(null,cljs.core.rest.call(null,s__874__$2)));
}
} else {
return null;
}
break;
}
});})(s__872__$1,j,xs__19764__auto__,temp__19834__auto__))
,null,null));
});})(s__872__$1,j,xs__19764__auto__,temp__19834__auto__))
;
var fs__23194__auto__ = cljs.core.seq.call(null,iterys__23193__auto__.call(null,cljs.core.range.call(null,cljs.core.match.width.call(null,pm))));
if(fs__23194__auto__){
return cljs.core.concat.call(null,fs__23194__auto__,cljs$core$match$useful_matrix_$_iter__871.call(null,cljs.core.rest.call(null,s__872__$1)));
} else {
var G__878 = cljs.core.rest.call(null,s__872__$1);
s__872__$1 = G__878;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__23197__auto__.call(null,cljs.core.range.call(null,cljs.core.match.height.call(null,pm)));
})())));
}); return (
new cljs.core.Var(function(){return cljs.core.match.useful_matrix;},new cljs.core.Symbol("cljs.core.match","useful-matrix","cljs.core.match/useful-matrix",(-569989934),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"useful-matrix","useful-matrix",(-1801754012),null),"cljs/core/match.cljc",(20),(1),(609),(609),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pm","pm",(-840698341),null)], null)),null,(cljs.core.truth_(cljs.core.match.useful_matrix)?cljs.core.match.useful_matrix.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.necessary_column = (function cljs$core$match$necessary_column(pm){
return cljs.core.first.call(null,cljs.core.reduce.call(null,(function (p__887,p__888){
var vec__889 = p__887;
var col = cljs.core.nth.call(null,vec__889,(0),null);
var score = cljs.core.nth.call(null,vec__889,(1),null);
var curr = vec__889;
var vec__892 = p__888;
var ocol = cljs.core.nth.call(null,vec__892,(0),null);
var oscore = cljs.core.nth.call(null,vec__892,(1),null);
var cand = vec__892;
if((oscore > score)){
return cand;
} else {
return curr;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.map_indexed.call(null,cljs.core.match.score_column,cljs.core.apply.call(null,cljs.core.map,cljs.core.vector,cljs.core.match.useful_matrix.call(null,pm)))));
}); return (
new cljs.core.Var(function(){return cljs.core.match.necessary_column;},new cljs.core.Symbol("cljs.core.match","necessary-column","cljs.core.match/necessary-column",(582821654),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"necessary-column","necessary-column",(-351673640),null),"cljs/core/match.cljc",(23),(1),(617),(617),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pm","pm",(-840698341),null)], null)),null,(cljs.core.truth_(cljs.core.match.necessary_column)?cljs.core.match.necessary_column.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.select = (function cljs$core$match$select(pm){
return cljs.core.match.protocols.swap.call(null,pm,cljs.core.match.necessary_column.call(null,pm));
}); return (
new cljs.core.Var(function(){return cljs.core.match.select;},new cljs.core.Symbol("cljs.core.match","select","cljs.core.match/select",(-278932144),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"select","select",(-1506602266),null),"cljs/core/match.cljc",(13),(1),(627),(627),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pm","pm",(-840698341),null)], null)),null,(cljs.core.truth_(cljs.core.match.select)?cljs.core.match.select.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.default_specialize_matrix; return (
new cljs.core.Var(function(){return cljs.core.match.default_specialize_matrix;},new cljs.core.Symbol("cljs.core.match","default-specialize-matrix","cljs.core.match/default-specialize-matrix",(1904899441),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"default-specialize-matrix","default-specialize-matrix",(943076911),null),"cljs/core/match.cljc",(35),(1),(630),true,(630),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.match.default_specialize_matrix)?cljs.core.match.default_specialize_matrix.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.specialize = (function cljs$core$match$specialize(var_args){
var args895 = [];
var len__23656__auto___899 = arguments.length;
var i__23657__auto___900 = (0);
while(true){
if((i__23657__auto___900 < len__23656__auto___899)){
args895.push((arguments[i__23657__auto___900]));

var G__901 = (i__23657__auto___900 + (1));
i__23657__auto___900 = G__901;
continue;
} else {
}
break;
}

var G__897 = args895.length;
switch (G__897) {
case (1):
return cljs.core.match.specialize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.core.match.specialize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args895.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.core.match.specialize;},new cljs.core.Symbol("cljs.core.match","specialize","cljs.core.match/specialize",(-607572877),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"specialize","specialize",(-1838813563),null),"cljs/core/match.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"matrix","matrix",(-1851298569),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"matrix","matrix",(-1851298569),null),new cljs.core.Symbol(null,"p","p",(1791580836),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"matrix","matrix",(-1851298569),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"matrix","matrix",(-1851298569),null),new cljs.core.Symbol(null,"p","p",(1791580836),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(632),(632),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"matrix","matrix",(-1851298569),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"matrix","matrix",(-1851298569),null),new cljs.core.Symbol(null,"p","p",(1791580836),null)], null)),null,(cljs.core.truth_(cljs.core.match.specialize)?cljs.core.match.specialize.cljs$lang$test:null)])));})()
;

cljs.core.match.specialize.cljs$core$IFn$_invoke$arity$1 = (function (matrix){
return cljs.core.match.specialize.call(null,matrix,cljs.core.ffirst.call(null,cljs.core.match.rows.call(null,matrix)));
});

cljs.core.match.specialize.cljs$core$IFn$_invoke$arity$2 = (function (matrix,p){
if(((!((p == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === p.cljs$core$match$protocols$ISpecializeMatrix$)))?true:(((!p.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.match.protocols.ISpecializeMatrix,p):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.match.protocols.ISpecializeMatrix,p))){
return cljs.core.match.protocols.specialize_matrix.call(null,p,matrix);
} else {
return cljs.core.match.default_specialize_matrix.call(null,p,matrix);
}
});

cljs.core.match.specialize.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return cljs.core.match.specialize;},new cljs.core.Symbol("cljs.core.match","specialize","cljs.core.match/specialize",(-607572877),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"specialize","specialize",(-1838813563),null),"cljs/core/match.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"matrix","matrix",(-1851298569),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"matrix","matrix",(-1851298569),null),new cljs.core.Symbol(null,"p","p",(1791580836),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"matrix","matrix",(-1851298569),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"matrix","matrix",(-1851298569),null),new cljs.core.Symbol(null,"p","p",(1791580836),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(632),(632),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"matrix","matrix",(-1851298569),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"matrix","matrix",(-1851298569),null),new cljs.core.Symbol(null,"p","p",(1791580836),null)], null)),null,(cljs.core.truth_(cljs.core.match.specialize)?cljs.core.match.specialize.cljs$lang$test:null)]));
(function (){
cljs.core.match.pseudo_pattern_QMARK_ = (function cljs$core$match$pseudo_pattern_QMARK_(x){
if(!((x == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$match$protocols$IPseudoPattern$))){
return true;
} else {
return false;
}
} else {
return false;
}
}); return (
new cljs.core.Var(function(){return cljs.core.match.pseudo_pattern_QMARK_;},new cljs.core.Symbol("cljs.core.match","pseudo-pattern?","cljs.core.match/pseudo-pattern?",(-446236785),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"pseudo-pattern?","pseudo-pattern?",(-1563215235),null),"cljs/core/match.cljc",(22),(1),(640),(640),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(cljs.core.match.pseudo_pattern_QMARK_)?cljs.core.match.pseudo_pattern_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.pseudo_patterns = (function cljs$core$match$pseudo_patterns(matrix,i){
return cljs.core.filter.call(null,cljs.core.match.pseudo_pattern_QMARK_,cljs.core.match.column.call(null,matrix,i));
}); return (
new cljs.core.Var(function(){return cljs.core.match.pseudo_patterns;},new cljs.core.Symbol("cljs.core.match","pseudo-patterns","cljs.core.match/pseudo-patterns",(477214665),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"pseudo-patterns","pseudo-patterns",(-712701433),null),"cljs/core/match.cljc",(22),(1),(643),(643),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"matrix","matrix",(-1851298569),null),new cljs.core.Symbol(null,"i","i",(253690212),null)], null)),null,(cljs.core.truth_(cljs.core.match.pseudo_patterns)?cljs.core.match.pseudo_patterns.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.column_splitter = (function cljs$core$match$column_splitter(col){
var f = cljs.core.first.call(null,col);
var vec__908 = cljs.core.split_with.call(null,((function (f){
return (function (p1__24_SHARP_){
return cljs.core.match.groupable_QMARK_.call(null,f,p1__24_SHARP_);
});})(f))
,cljs.core.rest.call(null,col));
var top = cljs.core.nth.call(null,vec__908,(0),null);
var bottom = cljs.core.nth.call(null,vec__908,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cons.call(null,f,top),bottom], null);
}); return (
new cljs.core.Var(function(){return cljs.core.match.column_splitter;},new cljs.core.Symbol("cljs.core.match","column-splitter","cljs.core.match/column-splitter",(-792959622),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"column-splitter","column-splitter",(-1960304436),null),"cljs/core/match.cljc",(22),(1),(646),(646),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"col","col",(-318831557),null)], null)),null,(cljs.core.truth_(cljs.core.match.column_splitter)?cljs.core.match.column_splitter.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.pattern_matrix; return (
new cljs.core.Var(function(){return cljs.core.match.pattern_matrix;},new cljs.core.Symbol("cljs.core.match","pattern-matrix","cljs.core.match/pattern-matrix",(1246915346),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"pattern-matrix","pattern-matrix",(-1935235420),null),"cljs/core/match.cljc",(24),(1),(651),true,(651),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.match.pattern_matrix)?cljs.core.match.pattern_matrix.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.match.compile; return (
new cljs.core.Var(function(){return cljs.core.match.compile;},new cljs.core.Symbol("cljs.core.match","compile","cljs.core.match/compile",(-811797430),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"compile","compile",(-2046249340),null),"cljs/core/match.cljc",(32),(1),(651),true,(651),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.match.compile)?cljs.core.match.compile.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.return_split = (function cljs$core$match$return_split(S,D){
if(cljs.core.truth_(cljs.core.match._STAR_recur_present_STAR_)){
if(cljs.core.truth_((function (){var and__20770__auto__ = cljs.core.match.empty_matrix_QMARK_.call(null,D);
if(cljs.core.truth_(and__20770__auto__)){
return cljs.core.seq.call(null,cljs.core.match._STAR_backtrack_stack_STAR_);
} else {
return and__20770__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [S,cljs.core.peek.call(null,cljs.core.match._STAR_backtrack_stack_STAR_),cljs.core.match._STAR_backtrack_stack_STAR_], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [S,D,cljs.core.conj.call(null,cljs.core.match._STAR_backtrack_stack_STAR_,D)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [S,D], null);
}
}); return (
new cljs.core.Var(function(){return cljs.core.match.return_split;},new cljs.core.Symbol("cljs.core.match","return-split","cljs.core.match/return-split",(646760441),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"return-split","return-split",(1545079115),null),"cljs/core/match.cljc",(19),(1),(653),(653),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"S","S",(-1387142461),null),new cljs.core.Symbol(null,"D","D",(1632515634),null)], null)),null,(cljs.core.truth_(cljs.core.match.return_split)?cljs.core.match.return_split.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.matrix_splitter = (function cljs$core$match$matrix_splitter(matrix){
var rows = cljs.core.match.rows.call(null,matrix);
var n = cljs.core.count.call(null,cljs.core.first.call(null,cljs.core.match.column_splitter.call(null,cljs.core.map.call(null,cljs.core.first,rows))));
var ocrs = cljs.core.match.occurrences.call(null,matrix);
var S = cljs.core.match.pattern_matrix.call(null,cljs.core.take.call(null,n,rows),ocrs);
var D = cljs.core.match.pattern_matrix.call(null,cljs.core.drop.call(null,n,rows),ocrs);
return cljs.core.match.return_split.call(null,S,D);
}); return (
new cljs.core.Var(function(){return cljs.core.match.matrix_splitter;},new cljs.core.Symbol("cljs.core.match","matrix-splitter","cljs.core.match/matrix-splitter",(-1137428995),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"matrix-splitter","matrix-splitter",(1939402915),null),"cljs/core/match.cljc",(22),(1),(660),(660),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"matrix","matrix",(-1851298569),null)], null)),null,(cljs.core.truth_(cljs.core.match.matrix_splitter)?cljs.core.match.matrix_splitter.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.group_rows = (function cljs$core$match$group_rows(cs,rows){
return cljs.core.reduce.call(null,(function (res,row){
var vec__914 = cljs.core.peek.call(null,res);
var c = cljs.core.nth.call(null,vec__914,(0),null);
var rows__$1 = cljs.core.nth.call(null,vec__914,(1),null);
var c_SINGLEQUOTE_ = cljs.core.first.call(null,row);
if(cljs.core.truth_(cljs.core.match.groupable_QMARK_.call(null,c,c_SINGLEQUOTE_))){
return cljs.core.conj.call(null,cljs.core.pop.call(null,res),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.conj.call(null,rows__$1,row)], null));
} else {
return cljs.core.conj.call(null,res,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [row], null)], null));
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,cs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,rows)], null)], null)], null),cljs.core.rest.call(null,rows));
}); return (
new cljs.core.Var(function(){return cljs.core.match.group_rows;},new cljs.core.Symbol("cljs.core.match","group-rows","cljs.core.match/group-rows",(556688403),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"group-rows","group-rows",(-363616563),null),"cljs/core/match.cljc",(17),(1),(668),(668),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cs","cs",(-117024463),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)], null)),null,(cljs.core.truth_(cljs.core.match.group_rows)?cljs.core.match.group_rows.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.literal_pattern_QMARK_; return (
new cljs.core.Var(function(){return cljs.core.match.literal_pattern_QMARK_;},new cljs.core.Symbol("cljs.core.match","literal-pattern?","cljs.core.match/literal-pattern?",(239294010),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"literal-pattern?","literal-pattern?",(-989910796),null),"cljs/core/match.cljc",(26),(1),(678),true,(678),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.match.literal_pattern_QMARK_)?cljs.core.match.literal_pattern_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.non_local_literal_pattern_QMARK_ = (function cljs$core$match$non_local_literal_pattern_QMARK_(p){
var and__20770__auto__ = cljs.core.match.literal_pattern_QMARK_.call(null,p);
if(cljs.core.truth_(and__20770__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"local","local",(-1497766724)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"l","l",(1395893423)).cljs$core$IFn$_invoke$arity$1(p))));
} else {
return and__20770__auto__;
}
}); return (
new cljs.core.Var(function(){return cljs.core.match.non_local_literal_pattern_QMARK_;},new cljs.core.Symbol("cljs.core.match","non-local-literal-pattern?","cljs.core.match/non-local-literal-pattern?",(-1011069135),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"non-local-literal-pattern?","non-local-literal-pattern?",(940802799),null),"cljs/core/match.cljc",(33),(1),(680),(680),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null)], null)),null,(cljs.core.truth_(cljs.core.match.non_local_literal_pattern_QMARK_)?cljs.core.match.non_local_literal_pattern_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.literal_case_matrix_splitter = (function cljs$core$match$literal_case_matrix_splitter(matrix){
var ocrs = cljs.core.match.occurrences.call(null,matrix);
var rows = cljs.core.match.rows.call(null,matrix);
var lrows = (function (){var rows__$1 = cljs.core.seq.call(null,rows);
var res = cljs.core.PersistentVector.EMPTY;
var lits = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(rows__$1){
var vec__924 = cljs.core.first.call(null,rows__$1);
var p = cljs.core.nth.call(null,vec__924,(0),null);
var row = vec__924;
if(cljs.core.truth_((function (){var and__20770__auto__ = cljs.core.match.non_local_literal_pattern_QMARK_.call(null,p);
if(cljs.core.truth_(and__20770__auto__)){
return !(cljs.core.contains_QMARK_.call(null,lits,new cljs.core.Keyword(null,"l","l",(1395893423)).cljs$core$IFn$_invoke$arity$1(p)));
} else {
return and__20770__auto__;
}
})())){
var G__931 = cljs.core.next.call(null,rows__$1);
var G__932 = cljs.core.conj.call(null,res,row);
var G__933 = (cljs.core.truth_(cljs.core.match.non_local_literal_pattern_QMARK_.call(null,p))?cljs.core.conj.call(null,lits,new cljs.core.Keyword(null,"l","l",(1395893423)).cljs$core$IFn$_invoke$arity$1(p)):lits);
rows__$1 = G__931;
res = G__932;
lits = G__933;
continue;
} else {
return res;
}
} else {
return res;
}
break;
}
})();
var S = cljs.core.vec.call(null,cljs.core.map.call(null,((function (ocrs,rows,lrows){
return (function (p__927){
var vec__928 = p__927;
var c = cljs.core.nth.call(null,vec__928,(0),null);
var rows__$1 = cljs.core.nth.call(null,vec__928,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.match.pattern_matrix.call(null,rows__$1,ocrs)], null);
});})(ocrs,rows,lrows))
,cljs.core.match.group_rows.call(null,cljs.core.map.call(null,cljs.core.first,lrows),lrows)));
var D = cljs.core.match.pattern_matrix.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,lrows),rows),ocrs);
return cljs.core.match.return_split.call(null,S,D);
}); return (
new cljs.core.Var(function(){return cljs.core.match.literal_case_matrix_splitter;},new cljs.core.Symbol("cljs.core.match","literal-case-matrix-splitter","cljs.core.match/literal-case-matrix-splitter",(1314859976),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"literal-case-matrix-splitter","literal-case-matrix-splitter",(80439450),null),"cljs/core/match.cljc",(35),(1),(684),(684),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"matrix","matrix",(-1851298569),null)], null)),null,(cljs.core.truth_(cljs.core.match.literal_case_matrix_splitter)?cljs.core.match.literal_case_matrix_splitter.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.default_case = (function cljs$core$match$default_case(matrix){
if(cljs.core.not.call(null,cljs.core.match.empty_matrix_QMARK_.call(null,matrix))){
return cljs.core.match.compile.call(null,matrix);
} else {
return cljs.core.match.fail_node.call(null);
}
}); return (
new cljs.core.Var(function(){return cljs.core.match.default_case;},new cljs.core.Symbol("cljs.core.match","default-case","cljs.core.match/default-case",(-217647663),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"default-case","default-case",(982600547),null),"cljs/core/match.cljc",(19),(1),(708),(708),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"matrix","matrix",(-1851298569),null)], null)),null,(cljs.core.truth_(cljs.core.match.default_case)?cljs.core.match.default_case.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.cases = (function cljs$core$match$cases(matrix){
if(cljs.core.vector_QMARK_.call(null,matrix)){
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p__938){
var vec__939 = p__938;
var c = cljs.core.nth.call(null,vec__939,(0),null);
var m = cljs.core.nth.call(null,vec__939,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.match.compile.call(null,cljs.core.match.specialize.call(null,m,c))], null);
}),matrix));
} else {
var rows = cljs.core.match.rows.call(null,matrix);
var c = cljs.core.ffirst.call(null,rows);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.match.compile.call(null,cljs.core.match.specialize.call(null,matrix,c))], null)], null);
}
}); return (
new cljs.core.Var(function(){return cljs.core.match.cases;},new cljs.core.Symbol("cljs.core.match","cases","cljs.core.match/cases",(-1099012404),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"cases","cases",(1894394302),null),"cljs/core/match.cljc",(12),(1),(713),(713),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"matrix","matrix",(-1851298569),null)], null)),null,(cljs.core.truth_(cljs.core.match.cases)?cljs.core.match.cases.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.expression_QMARK_ = (function cljs$core$match$expression_QMARK_(ocr){
return cljs.core.contains_QMARK_.call(null,cljs.core.meta.call(null,ocr),new cljs.core.Keyword(null,"ocr-expr","ocr-expr",(-897749617)));
}); return (
new cljs.core.Var(function(){return cljs.core.match.expression_QMARK_;},new cljs.core.Symbol("cljs.core.match","expression?","cljs.core.match/expression?",(1231812502),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"expression?","expression?",(1914680416),null),"cljs/core/match.cljc",(18),(1),(725),(725),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ocr","ocr",(622507032),null)], null)),null,(cljs.core.truth_(cljs.core.match.expression_QMARK_)?cljs.core.match.expression_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.bind_variables = (function cljs$core$match$bind_variables(ocrs){
return cljs.core.mapcat.call(null,(function (ocr){
var bind_expr = cljs.core.get.call(null,cljs.core.meta.call(null,ocr),new cljs.core.Keyword(null,"ocr-expr","ocr-expr",(-897749617)),new cljs.core.Keyword("cljs.core.match","not-found","cljs.core.match/not-found",(85049222)));
if(cljs.core.not_EQ_.call(null,bind_expr,new cljs.core.Keyword("cljs.core.match","not-found","cljs.core.match/not-found",(85049222)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ocr,bind_expr], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ocr,ocr], null);
}
}),ocrs);
}); return (
new cljs.core.Var(function(){return cljs.core.match.bind_variables;},new cljs.core.Symbol("cljs.core.match","bind-variables","cljs.core.match/bind-variables",(1032790381),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"bind-variables","bind-variables",(-147626785),null),"cljs/core/match.cljc",(21),(1),(728),(728),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ocrs","ocrs",(-195684886),null)], null)),null,(cljs.core.truth_(cljs.core.match.bind_variables)?cljs.core.match.bind_variables.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.root_bind_node = (function cljs$core$match$root_bind_node(matrix){
var ocrs = cljs.core.match.occurrences.call(null,matrix);
var node = cljs.core.match.compile.call(null,matrix);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.match.expression_QMARK_,ocrs))){
return cljs.core.match.bind_node.call(null,cljs.core.match.bind_variables.call(null,ocrs),node);
} else {
return node;
}
}); return (
new cljs.core.Var(function(){return cljs.core.match.root_bind_node;},new cljs.core.Symbol("cljs.core.match","root-bind-node","cljs.core.match/root-bind-node",(-757341859),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"root-bind-node","root-bind-node",(-1658575125),null),"cljs/core/match.cljc",(21),(1),(737),(737),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"matrix","matrix",(-1851298569),null)], null)),null,(cljs.core.truth_(cljs.core.match.root_bind_node)?cljs.core.match.root_bind_node.cljs$lang$test:null)])));})()
;
/**
 * Case 1: If there are no pattern rows to match, then matching always fails
 */
(function (){
cljs.core.match.empty_rows_case = (function cljs$core$match$empty_rows_case(){
return cljs.core.match.fail_node.call(null);
}); return (
new cljs.core.Var(function(){return cljs.core.match.empty_rows_case;},new cljs.core.Symbol("cljs.core.match","empty-rows-case","cljs.core.match/empty-rows-case",(-1300579031),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"empty-rows-case","empty-rows-case",(2079290107),null),"cljs/core/match.cljc",(22),(1),(751),(751),cljs.core.list(cljs.core.PersistentVector.EMPTY),"Case 1: If there are no pattern rows to match, then matching always fails",(cljs.core.truth_(cljs.core.match.empty_rows_case)?cljs.core.match.empty_rows_case.cljs$lang$test:null)])));})()
;
/**
 * Case 2: If the first row is empty then matching always succeeds 
 *   and yields the first action.
 */
(function (){
cljs.core.match.first_row_empty_case = (function cljs$core$match$first_row_empty_case(rows,ocr){
var f = cljs.core.first.call(null,rows);
var a = new cljs.core.Keyword(null,"action","action",(-811238024)).cljs$core$IFn$_invoke$arity$1(f);
var bs = new cljs.core.Keyword(null,"bindings","bindings",(1271397192)).cljs$core$IFn$_invoke$arity$1(f);
return cljs.core.match.leaf_node.call(null,a,bs);
}); return (
new cljs.core.Var(function(){return cljs.core.match.first_row_empty_case;},new cljs.core.Symbol("cljs.core.match","first-row-empty-case","cljs.core.match/first-row-empty-case",(677521310),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"first-row-empty-case","first-row-empty-case",(-486679860),null),"cljs/core/match.cljc",(27),(1),(756),(756),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rows","rows",(-1804386089),null),new cljs.core.Symbol(null,"ocr","ocr",(622507032),null)], null)),"Case 2: If the first row is empty then matching always succeeds \n  and yields the first action.",(cljs.core.truth_(cljs.core.match.first_row_empty_case)?cljs.core.match.first_row_empty_case.cljs$lang$test:null)])));})()
;
/**
 * Case 2: If the first row is constituted by wildcards then matching
 *   matching always succeeds and yields the first action.
 */
(function (){
cljs.core.match.first_row_wildcards_case = (function cljs$core$match$first_row_wildcards_case(rows,ocrs){
var f = cljs.core.first.call(null,rows);
var a = new cljs.core.Keyword(null,"action","action",(-811238024)).cljs$core$IFn$_invoke$arity$1(f);
var bs = cljs.core.match.row_bindings.call(null,f,ocrs);
return cljs.core.match.leaf_node.call(null,a,bs);
}); return (
new cljs.core.Var(function(){return cljs.core.match.first_row_wildcards_case;},new cljs.core.Symbol("cljs.core.match","first-row-wildcards-case","cljs.core.match/first-row-wildcards-case",(573953218),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"first-row-wildcards-case","first-row-wildcards-case",(-392620272),null),"cljs/core/match.cljc",(31),(1),(766),(766),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rows","rows",(-1804386089),null),new cljs.core.Symbol(null,"ocrs","ocrs",(-195684886),null)], null)),"Case 2: If the first row is constituted by wildcards then matching\n  matching always succeeds and yields the first action.",(cljs.core.truth_(cljs.core.match.first_row_wildcards_case)?cljs.core.match.first_row_wildcards_case.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.expand_matrix = (function cljs$core$match$expand_matrix(matrix,col){
var matrix__$1 = matrix;
while(true){
var p = cljs.core.first.call(null,cljs.core.match.column.call(null,matrix__$1,col));
if(cljs.core.truth_(cljs.core.match.pseudo_pattern_QMARK_.call(null,p))){
var G__942 = cljs.core.match.specialize.call(null,matrix__$1,p);
matrix__$1 = G__942;
continue;
} else {
return matrix__$1;
}
break;
}
}); return (
new cljs.core.Var(function(){return cljs.core.match.expand_matrix;},new cljs.core.Symbol("cljs.core.match","expand-matrix","cljs.core.match/expand-matrix",(-2143715389),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"expand-matrix","expand-matrix",(2074949777),null),"cljs/core/match.cljc",(20),(1),(782),(782),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"matrix","matrix",(-1851298569),null),new cljs.core.Symbol(null,"col","col",(-318831557),null)], null)),null,(cljs.core.truth_(cljs.core.match.expand_matrix)?cljs.core.match.expand_matrix.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.split_matrix = (function cljs$core$match$split_matrix(matrix){
return cljs.core.match.matrix_splitter.call(null,matrix);
}); return (
new cljs.core.Var(function(){return cljs.core.match.split_matrix;},new cljs.core.Symbol("cljs.core.match","split-matrix","cljs.core.match/split-matrix",(943584740),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"split-matrix","split-matrix",(1099544362),null),"cljs/core/match.cljc",(19),(1),(789),(789),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"matrix","matrix",(-1851298569),null)], null)),null,(cljs.core.truth_(cljs.core.match.split_matrix)?cljs.core.match.split_matrix.cljs$lang$test:null)])));})()
;
/**
 * Case 3a: The first column is chosen. Compute and return a
 *   switch/bind node with a default matrix case
 */
(function (){
cljs.core.match.first_column_chosen_case = (function cljs$core$match$first_column_chosen_case(matrix,col,ocrs){
var expanded = cljs.core.match.expand_matrix.call(null,matrix,col);
var ocrs__$1 = cljs.core.match.occurrences.call(null,expanded);
var vec__948 = cljs.core.match.split_matrix.call(null,expanded);
var S = cljs.core.nth.call(null,vec__948,(0),null);
var D = cljs.core.nth.call(null,vec__948,(1),null);
var split = vec__948;
if(cljs.core.not.call(null,cljs.core.match._STAR_recur_present_STAR_)){
return cljs.core.match.switch_node.call(null,ocrs__$1.call(null,col),cljs.core.match.cases.call(null,S),cljs.core.match.default_case.call(null,D));
} else {
var new_stack = cljs.core.last.call(null,split);
return cljs.core.match.switch_node.call(null,ocrs__$1.call(null,col),((!((cljs.core.match._STAR_backtrack_stack_STAR_ === new_stack)))?(function (){var _STAR_backtrack_stack_STAR_951 = cljs.core.match._STAR_backtrack_stack_STAR_;
cljs.core.match._STAR_backtrack_stack_STAR_ = new_stack;

try{return cljs.core.match.cases.call(null,S);
}finally {cljs.core.match._STAR_backtrack_stack_STAR_ = _STAR_backtrack_stack_STAR_951;
}})():cljs.core.match.cases.call(null,S)),(((cljs.core.seq.call(null,cljs.core.match._STAR_backtrack_stack_STAR_)) && ((cljs.core.peek.call(null,cljs.core.match._STAR_backtrack_stack_STAR_) === D)))?(function (){var _STAR_backtrack_stack_STAR_952 = cljs.core.match._STAR_backtrack_stack_STAR_;
cljs.core.match._STAR_backtrack_stack_STAR_ = cljs.core.pop.call(null,cljs.core.match._STAR_backtrack_stack_STAR_);

try{return cljs.core.match.default_case.call(null,D);
}finally {cljs.core.match._STAR_backtrack_stack_STAR_ = _STAR_backtrack_stack_STAR_952;
}})():cljs.core.match.default_case.call(null,D)));
}
}); return (
new cljs.core.Var(function(){return cljs.core.match.first_column_chosen_case;},new cljs.core.Symbol("cljs.core.match","first-column-chosen-case","cljs.core.match/first-column-chosen-case",(-67171859),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"first-column-chosen-case","first-column-chosen-case",(545999379),null),"cljs/core/match.cljc",(31),(1),(798),(798),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"matrix","matrix",(-1851298569),null),new cljs.core.Symbol(null,"col","col",(-318831557),null),new cljs.core.Symbol(null,"ocrs","ocrs",(-195684886),null)], null)),"Case 3a: The first column is chosen. Compute and return a\n  switch/bind node with a default matrix case",(cljs.core.truth_(cljs.core.match.first_column_chosen_case)?cljs.core.match.first_column_chosen_case.cljs$lang$test:null)])));})()
;
/**
 * Case 3b: A column other than the first is chosen. Swap column 
 * col with the first column and compile the result
 */
(function (){
cljs.core.match.other_column_chosen_case = (function cljs$core$match$other_column_chosen_case(matrix,col){
return cljs.core.match.compile.call(null,cljs.core.match.protocols.swap.call(null,matrix,col));
}); return (
new cljs.core.Var(function(){return cljs.core.match.other_column_chosen_case;},new cljs.core.Symbol("cljs.core.match","other-column-chosen-case","cljs.core.match/other-column-chosen-case",(887033970),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"other-column-chosen-case","other-column-chosen-case",(2108911232),null),"cljs/core/match.cljc",(31),(1),(821),(821),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"matrix","matrix",(-1851298569),null),new cljs.core.Symbol(null,"col","col",(-318831557),null)], null)),"Case 3b: A column other than the first is chosen. Swap column \ncol with the first column and compile the result",(cljs.core.truth_(cljs.core.match.other_column_chosen_case)?cljs.core.match.other_column_chosen_case.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.choose_column = (function cljs$core$match$choose_column(matrix){
return cljs.core.match.necessary_column.call(null,matrix);
}); return (
new cljs.core.Var(function(){return cljs.core.match.choose_column;},new cljs.core.Symbol("cljs.core.match","choose-column","cljs.core.match/choose-column",(1677374497),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"choose-column","choose-column",(627536243),null),"cljs/core/match.cljc",(20),(1),(829),(829),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"matrix","matrix",(-1851298569),null)], null)),null,(cljs.core.truth_(cljs.core.match.choose_column)?cljs.core.match.choose_column.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.compile = (function cljs$core$match$compile(p__953){
var map__957 = p__953;
var map__957__$1 = ((((!((map__957 == null)))?((((map__957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__957.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__957):map__957);
var pm = map__957__$1;
var ocrs = cljs.core.get.call(null,map__957__$1,new cljs.core.Keyword(null,"ocrs","ocrs",(-1836216413)));
var rows = cljs.core.get.call(null,map__957__$1,new cljs.core.Keyword(null,"rows","rows",(850049680)));
if(cljs.core.truth_(cljs.core.match._STAR_root_STAR_)){
var _STAR_root_STAR_959 = cljs.core.match._STAR_root_STAR_;
cljs.core.match._STAR_root_STAR_ = false;

try{return cljs.core.match.root_bind_node.call(null,pm);
}finally {cljs.core.match._STAR_root_STAR_ = _STAR_root_STAR_959;
}} else {
if(cljs.core.empty_QMARK_.call(null,rows)){
return cljs.core.match.empty_rows_case.call(null);
} else {
if(cljs.core.truth_(cljs.core.match.empty_row_QMARK_.call(null,cljs.core.first.call(null,rows)))){
return cljs.core.match.first_row_empty_case.call(null,rows,cljs.core.first.call(null,ocrs));
} else {
if(cljs.core.truth_(cljs.core.match.all_wildcards_QMARK_.call(null,cljs.core.first.call(null,rows)))){
return cljs.core.match.first_row_wildcards_case.call(null,rows,ocrs);
} else {
var col = cljs.core.match.choose_column.call(null,pm);
if(cljs.core.truth_(cljs.core.match.first_column_QMARK_.call(null,col))){
return cljs.core.match.first_column_chosen_case.call(null,pm,col,ocrs);
} else {
return cljs.core.match.other_column_chosen_case.call(null,pm,col);
}

}
}
}
}
}); return (
new cljs.core.Var(function(){return cljs.core.match.compile;},new cljs.core.Symbol("cljs.core.match","compile","cljs.core.match/compile",(-811797430),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"compile","compile",(-2046249340),null),"cljs/core/match.cljc",(14),(1),(832),(832),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"pm","pm",(-840698341),null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rows","rows",(-1804386089),null),new cljs.core.Symbol(null,"ocrs","ocrs",(-195684886),null)], null)], null)], null)),null,(cljs.core.truth_(cljs.core.match.compile)?cljs.core.match.compile.cljs$lang$test:null)])));})()
;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.match.protocols.IVecMod}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.core.match.PatternMatrix = (function (rows,ocrs,__meta,__extmap,__hash){
this.rows = rows;
this.ocrs = ocrs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.match.PatternMatrix.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22669__auto__,k__22670__auto__){
var self__ = this;
var this__22669__auto____$1 = this;
return cljs.core._lookup.call(null,this__22669__auto____$1,k__22670__auto__,null);
});

cljs.core.match.PatternMatrix.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22671__auto__,k961,else__22672__auto__){
var self__ = this;
var this__22671__auto____$1 = this;
var G__963 = (((k961 instanceof cljs.core.Keyword))?k961.fqn:null);
switch (G__963) {
case "rows":
return self__.rows;

break;
case "ocrs":
return self__.ocrs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k961,else__22672__auto__);

}
});

cljs.core.match.PatternMatrix.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22689__auto__,writer__22690__auto__,opts__22691__auto__){
var self__ = this;
var this__22689__auto____$1 = this;
var pr_pair__22692__auto__ = ((function (this__22689__auto____$1){
return (function (keyval__22693__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22690__auto__,cljs.core.pr_writer,""," ","",opts__22691__auto__,keyval__22693__auto__);
});})(this__22689__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22690__auto__,pr_pair__22692__auto__,"#cljs.core.match.PatternMatrix{",", ","}",opts__22691__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rows","rows",(850049680)),self__.rows],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ocrs","ocrs",(-1836216413)),self__.ocrs],null))], null),self__.__extmap));
});

cljs.core.match.PatternMatrix.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.match.PatternMatrix.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__960){
var self__ = this;
var G__960__$1 = this;
return (new cljs.core.RecordIter((0),G__960__$1,(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",(850049680)),new cljs.core.Keyword(null,"ocrs","ocrs",(-1836216413))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.core.match.PatternMatrix.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22667__auto__){
var self__ = this;
var this__22667__auto____$1 = this;
return self__.__meta;
});

cljs.core.match.PatternMatrix.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22663__auto__){
var self__ = this;
var this__22663__auto____$1 = this;
return (new cljs.core.match.PatternMatrix(self__.rows,self__.ocrs,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.match.PatternMatrix.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22673__auto__){
var self__ = this;
var this__22673__auto____$1 = this;
return ((2) + cljs.core.count.call(null,self__.__extmap));
});

cljs.core.match.PatternMatrix.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22664__auto__){
var self__ = this;
var this__22664__auto____$1 = this;
var h__21845__auto__ = self__.__hash;
if(!((h__21845__auto__ == null))){
return h__21845__auto__;
} else {
var h__21845__auto____$1 = cljs.core.hash_imap.call(null,this__22664__auto____$1);
self__.__hash = h__21845__auto____$1;

return h__21845__auto____$1;
}
});

cljs.core.match.PatternMatrix.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22665__auto__,other__22666__auto__){
var self__ = this;
var this__22665__auto____$1 = this;
if(cljs.core.truth_((function (){var and__20770__auto__ = other__22666__auto__;
if(cljs.core.truth_(and__20770__auto__)){
var and__20770__auto____$1 = (this__22665__auto____$1.constructor === other__22666__auto__.constructor);
if(and__20770__auto____$1){
return cljs.core.equiv_map.call(null,this__22665__auto____$1,other__22666__auto__);
} else {
return and__20770__auto____$1;
}
} else {
return and__20770__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.core.match.PatternMatrix.prototype.cljs$core$match$protocols$IVecMod$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.match.PatternMatrix.prototype.cljs$core$match$protocols$IVecMod$drop_nth$arity$2 = (function (_,i){
var self__ = this;
var ___$1 = this;
var nrows = cljs.core.vec.call(null,cljs.core.map.call(null,((function (___$1){
return (function (p1__25_SHARP_){
return cljs.core.match.protocols.drop_nth.call(null,p1__25_SHARP_,i);
});})(___$1))
,self__.rows));
return (new cljs.core.match.PatternMatrix(nrows,self__.ocrs,null,null,null));
});

cljs.core.match.PatternMatrix.prototype.cljs$core$match$protocols$IVecMod$swap$arity$2 = (function (_,idx){
var self__ = this;
var ___$1 = this;
var nrows = cljs.core.vec.call(null,cljs.core.map.call(null,((function (___$1){
return (function (p1__26_SHARP_){
return cljs.core.match.protocols.swap.call(null,p1__26_SHARP_,idx);
});})(___$1))
,self__.rows));
return (new cljs.core.match.PatternMatrix(nrows,cljs.core.match.protocols.swap.call(null,self__.ocrs,idx),null,null,null));
});

cljs.core.match.PatternMatrix.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22679__auto__,k__22680__auto__){
var self__ = this;
var this__22679__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rows","rows",(850049680)),null,new cljs.core.Keyword(null,"ocrs","ocrs",(-1836216413)),null], null), null),k__22680__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22679__auto____$1),self__.__meta),k__22680__auto__);
} else {
return (new cljs.core.match.PatternMatrix(self__.rows,self__.ocrs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22680__auto__)),null));
}
});

cljs.core.match.PatternMatrix.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22677__auto__,k__22678__auto__,G__960){
var self__ = this;
var this__22677__auto____$1 = this;
var pred__964 = cljs.core.keyword_identical_QMARK_;
var expr__965 = k__22678__auto__;
if(cljs.core.truth_(pred__964.call(null,new cljs.core.Keyword(null,"rows","rows",(850049680)),expr__965))){
return (new cljs.core.match.PatternMatrix(G__960,self__.ocrs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__964.call(null,new cljs.core.Keyword(null,"ocrs","ocrs",(-1836216413)),expr__965))){
return (new cljs.core.match.PatternMatrix(self__.rows,G__960,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.match.PatternMatrix(self__.rows,self__.ocrs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22678__auto__,G__960),null));
}
}
});

cljs.core.match.PatternMatrix.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22683__auto__){
var self__ = this;
var this__22683__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rows","rows",(850049680)),self__.rows],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ocrs","ocrs",(-1836216413)),self__.ocrs],null))], null),self__.__extmap));
});

cljs.core.match.PatternMatrix.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22668__auto__,G__960){
var self__ = this;
var this__22668__auto____$1 = this;
return (new cljs.core.match.PatternMatrix(self__.rows,self__.ocrs,G__960,self__.__extmap,self__.__hash));
});

cljs.core.match.PatternMatrix.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22674__auto__,entry__22675__auto__){
var self__ = this;
var this__22674__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22675__auto__)){
return cljs.core._assoc.call(null,this__22674__auto____$1,cljs.core._nth.call(null,entry__22675__auto__,(0)),cljs.core._nth.call(null,entry__22675__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22674__auto____$1,entry__22675__auto__);
}
});

cljs.core.match.PatternMatrix.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rows","rows",(-1804386089),null),new cljs.core.Symbol(null,"ocrs","ocrs",(-195684886),null)], null);
});

cljs.core.match.PatternMatrix.cljs$lang$type = true;

cljs.core.match.PatternMatrix.cljs$lang$ctorPrSeq = (function (this__23044__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.match/PatternMatrix");
});

cljs.core.match.PatternMatrix.cljs$lang$ctorPrWriter = (function (this__23044__auto__,writer__23045__auto__){
return cljs.core._write.call(null,writer__23045__auto__,"cljs.core.match/PatternMatrix");
});

(function (){
cljs.core.match.__GT_PatternMatrix = (function cljs$core$match$__GT_PatternMatrix(rows,ocrs){
return (new cljs.core.match.PatternMatrix(rows,ocrs,null,null,null));
}); return (
new cljs.core.Var(function(){return cljs.core.match.__GT_PatternMatrix;},new cljs.core.Symbol("cljs.core.match","->PatternMatrix","cljs.core.match/->PatternMatrix",(50828657),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"->PatternMatrix","->PatternMatrix",(1215026055),null),"cljs/core/match.cljc",(25),(1),true,new cljs.core.Keyword(null,"positional","positional",(-203580463)),(853),(853),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rows","rows",(-1804386089),null),new cljs.core.Symbol(null,"ocrs","ocrs",(-195684886),null)], null)),null,(cljs.core.truth_(cljs.core.match.__GT_PatternMatrix)?cljs.core.match.__GT_PatternMatrix.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.match.map__GT_PatternMatrix = (function cljs$core$match$map__GT_PatternMatrix(G__962){
return (new cljs.core.match.PatternMatrix(new cljs.core.Keyword(null,"rows","rows",(850049680)).cljs$core$IFn$_invoke$arity$1(G__962),new cljs.core.Keyword(null,"ocrs","ocrs",(-1836216413)).cljs$core$IFn$_invoke$arity$1(G__962),null,cljs.core.dissoc.call(null,G__962,new cljs.core.Keyword(null,"rows","rows",(850049680)),new cljs.core.Keyword(null,"ocrs","ocrs",(-1836216413))),null));
}); return (
new cljs.core.Var(function(){return cljs.core.match.map__GT_PatternMatrix;},new cljs.core.Symbol("cljs.core.match","map->PatternMatrix","cljs.core.match/map->PatternMatrix",(344371112),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"map->PatternMatrix","map->PatternMatrix",(1564140286),null),"cljs/core/match.cljc",(25),(1),true,new cljs.core.Keyword(null,"map","map",(1371690461)),(853),(853),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"G__962","G__962",(414479348),null)], null)),null,(cljs.core.truth_(cljs.core.match.map__GT_PatternMatrix)?cljs.core.match.map__GT_PatternMatrix.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.match.pattern_matrix = (function cljs$core$match$pattern_matrix(rows,ocrs){
var rows__$1 = ((cljs.core.vector_QMARK_.call(null,rows))?rows:cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,rows));
var ocrs__$1 = ((cljs.core.vector_QMARK_.call(null,ocrs))?ocrs:cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,ocrs));
return (new cljs.core.match.PatternMatrix(rows__$1,ocrs__$1,null,null,null));
}); return (
new cljs.core.Var(function(){return cljs.core.match.pattern_matrix;},new cljs.core.Symbol("cljs.core.match","pattern-matrix","cljs.core.match/pattern-matrix",(1246915346),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"pattern-matrix","pattern-matrix",(-1935235420),null),"cljs/core/match.cljc",(21),(1),(864),(864),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rows","rows",(-1804386089),null),new cljs.core.Symbol(null,"ocrs","ocrs",(-195684886),null)], null)),null,(cljs.core.truth_(cljs.core.match.pattern_matrix)?cljs.core.match.pattern_matrix.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.default_specialize_matrix = (function cljs$core$match$default_specialize_matrix(p,matrix){
var rows = cljs.core.match.rows.call(null,matrix);
var ocrs = cljs.core.match.occurrences.call(null,matrix);
var focr = cljs.core.first.call(null,ocrs);
var nrows = cljs.core.vec.call(null,cljs.core.map.call(null,((function (rows,ocrs,focr){
return (function (p1__27_SHARP_){
return cljs.core.match.drop_nth_bind.call(null,p1__27_SHARP_,(0),focr);
});})(rows,ocrs,focr))
,rows));
var nocrs = cljs.core.match.protocols.drop_nth.call(null,ocrs,(0));
return cljs.core.match.pattern_matrix.call(null,nrows,nocrs);
}); return (
new cljs.core.Var(function(){return cljs.core.match.default_specialize_matrix;},new cljs.core.Symbol("cljs.core.match","default-specialize-matrix","cljs.core.match/default-specialize-matrix",(1904899441),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"default-specialize-matrix","default-specialize-matrix",(943076911),null),"cljs/core/match.cljc",(32),(1),(874),(874),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"matrix","matrix",(-1851298569),null)], null)),null,(cljs.core.truth_(cljs.core.match.default_specialize_matrix)?cljs.core.match.default_specialize_matrix.cljs$lang$test:null)])));})()
;

/**
* @constructor
 * @implements {cljs.core.match.Object}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.match.protocols.IPatternCompile}
 * @implements {cljs.core.ILookup}
*/
cljs.core.match.WildcardPattern = (function (sym,named,_meta){
this.sym = sym;
this.named = named;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.match.WildcardPattern.prototype.equals = (function (other){
var self__ = this;
var _ = this;
var and__20770__auto__ = (other instanceof cljs.core.match.WildcardPattern);
if(and__20770__auto__){
if(cljs.core.truth_(self__.named)){
return cljs.core._EQ_.call(null,self__.sym,new cljs.core.Keyword(null,"sym","sym",(-1444860305)).cljs$core$IFn$_invoke$arity$1(other));
} else {
return cljs.core.not.call(null,new cljs.core.Keyword(null,"named","named",(-422393479)).cljs$core$IFn$_invoke$arity$1(other));
}
} else {
return and__20770__auto__;
}
});

cljs.core.match.WildcardPattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new cljs.core.match.WildcardPattern(self__.sym,self__.named,new_meta));
});

cljs.core.match.WildcardPattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
});

cljs.core.match.WildcardPattern.prototype.cljs$core$match$protocols$IPatternCompile$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.match.WildcardPattern.prototype.cljs$core$match$protocols$IPatternCompile$to_source_STAR_$arity$2 = (function (this$,ocr){
var self__ = this;
var this$__$1 = this;
return true;
});

cljs.core.match.WildcardPattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
});

cljs.core.match.WildcardPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var G__968 = (((k instanceof cljs.core.Keyword))?k.fqn:null);
switch (G__968) {
case "sym":
return self__.sym;

break;
case "named":
return self__.named;

break;
default:
return not_found;

}
});

cljs.core.match.WildcardPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sym","sym",(195671222),null),new cljs.core.Symbol(null,"named","named",(1218138048),null),new cljs.core.Symbol(null,"_meta","_meta",(-1716892533),null)], null);
});

cljs.core.match.WildcardPattern.cljs$lang$type = true;

cljs.core.match.WildcardPattern.cljs$lang$ctorStr = "cljs.core.match/WildcardPattern";

cljs.core.match.WildcardPattern.cljs$lang$ctorPrWriter = (function (this__22602__auto__,writer__22603__auto__,opt__22604__auto__){
return cljs.core._write.call(null,writer__22603__auto__,"cljs.core.match/WildcardPattern");
});

(function (){
cljs.core.match.__GT_WildcardPattern = (function cljs$core$match$__GT_WildcardPattern(sym,named,_meta){
return (new cljs.core.match.WildcardPattern(sym,named,_meta));
}); return (
new cljs.core.Var(function(){return cljs.core.match.__GT_WildcardPattern;},new cljs.core.Symbol("cljs.core.match","->WildcardPattern","cljs.core.match/->WildcardPattern",(683458036),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol("cljs.core.match","Object","cljs.core.match/Object",(1160957744),null),null,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null,new cljs.core.Symbol("cljs.core.match.protocols","IPatternCompile","cljs.core.match.protocols/IPatternCompile",(1601136321),null),null,new cljs.core.Symbol("cljs.core","ILookup","cljs.core/ILookup",(-150575073),null),null], null), null),new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"->WildcardPattern","->WildcardPattern",(-301957466),null),"cljs/core/match.cljc",(25),(1),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(895),(895),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sym","sym",(195671222),null),new cljs.core.Symbol(null,"named","named",(1218138048),null),new cljs.core.Symbol(null,"_meta","_meta",(-1716892533),null)], null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null,new cljs.core.Symbol("cljs.core","ILookup","cljs.core/ILookup",(-150575073),null),null], null), null),null,(cljs.core.truth_(cljs.core.match.__GT_WildcardPattern)?cljs.core.match.__GT_WildcardPattern.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.match.wildcard_pattern = (function cljs$core$match$wildcard_pattern(var_args){
var args970 = [];
var len__23656__auto___973 = arguments.length;
var i__23657__auto___974 = (0);
while(true){
if((i__23657__auto___974 < len__23656__auto___973)){
args970.push((arguments[i__23657__auto___974]));

var G__975 = (i__23657__auto___974 + (1));
i__23657__auto___974 = G__975;
continue;
} else {
}
break;
}

var G__972 = args970.length;
switch (G__972) {
case (0):
return cljs.core.match.wildcard_pattern.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return cljs.core.match.wildcard_pattern.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args970.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.core.match.wildcard_pattern;},new cljs.core.Symbol("cljs.core.match","wildcard-pattern","cljs.core.match/wildcard-pattern",(-214930683),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"wildcard-pattern","wildcard-pattern",(983345335),null),"cljs/core/match.cljc",(23),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sym","sym",(195671222),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sym","sym",(195671222),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(923),(923),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sym","sym",(195671222),null)], null)),null,(cljs.core.truth_(cljs.core.match.wildcard_pattern)?cljs.core.match.wildcard_pattern.cljs$lang$test:null)])));})()
;

cljs.core.match.wildcard_pattern.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.match.wildcard_pattern.call(null,new cljs.core.Symbol(null,"_","_",(-1201019570),null));
});

cljs.core.match.wildcard_pattern.cljs$core$IFn$_invoke$arity$1 = (function (sym){
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? sym)"));
}

if(cljs.core._EQ_.call(null,sym,new cljs.core.Symbol(null,"_","_",(-1201019570),null))){
return (new cljs.core.match.WildcardPattern(cljs.core.gensym.call(null),false,null));
} else {
return (new cljs.core.match.WildcardPattern(sym,true,null));
}
});

cljs.core.match.wildcard_pattern.cljs$lang$maxFixedArity = (1);

new cljs.core.Var(function(){return cljs.core.match.wildcard_pattern;},new cljs.core.Symbol("cljs.core.match","wildcard-pattern","cljs.core.match/wildcard-pattern",(-214930683),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"wildcard-pattern","wildcard-pattern",(983345335),null),"cljs/core/match.cljc",(23),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sym","sym",(195671222),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sym","sym",(195671222),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(923),(923),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sym","sym",(195671222),null)], null)),null,(cljs.core.truth_(cljs.core.match.wildcard_pattern)?cljs.core.match.wildcard_pattern.cljs$lang$test:null)]));
(function (){
cljs.core.match.wildcard_pattern_QMARK_ = (function cljs$core$match$wildcard_pattern_QMARK_(x){
return (x instanceof cljs.core.match.WildcardPattern);
}); return (
new cljs.core.Var(function(){return cljs.core.match.wildcard_pattern_QMARK_;},new cljs.core.Symbol("cljs.core.match","wildcard-pattern?","cljs.core.match/wildcard-pattern?",(259834235),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"wildcard-pattern?","wildcard-pattern?",(-930609975),null),"cljs/core/match.cljc",(24),(1),(931),(931),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(cljs.core.match.wildcard_pattern_QMARK_)?cljs.core.match.wildcard_pattern_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.named_wildcard_pattern_QMARK_ = (function cljs$core$match$named_wildcard_pattern_QMARK_(x){
var and__20770__auto__ = (x instanceof cljs.core.match.WildcardPattern);
if(and__20770__auto__){
return new cljs.core.Keyword(null,"named","named",(-422393479)).cljs$core$IFn$_invoke$arity$1(x);
} else {
return and__20770__auto__;
}
}); return (
new cljs.core.Var(function(){return cljs.core.match.named_wildcard_pattern_QMARK_;},new cljs.core.Symbol("cljs.core.match","named-wildcard-pattern?","cljs.core.match/named-wildcard-pattern?",(1477033104),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"named-wildcard-pattern?","named-wildcard-pattern?",(-2101478874),null),"cljs/core/match.cljc",(30),(1),(937),(937),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(cljs.core.match.named_wildcard_pattern_QMARK_)?cljs.core.match.named_wildcard_pattern_QMARK_.cljs$lang$test:null)])));})()
;

/**
* @constructor
 * @implements {cljs.core.match.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.match.protocols.IPatternCompile}
*/
cljs.core.match.LiteralPattern = (function (l,_meta){
this.l = l;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.match.LiteralPattern.prototype.toString = (function (){
var self__ = this;
var _ = this;
if((self__.l == null)){
return "nil";
} else {
return cljs.core.pr_str.call(null,self__.l);
}
});

cljs.core.match.LiteralPattern.prototype.equals = (function (other){
var self__ = this;
var _ = this;
return ((other instanceof cljs.core.match.LiteralPattern)) && (cljs.core._EQ_.call(null,self__.l,new cljs.core.Keyword(null,"l","l",(1395893423)).cljs$core$IFn$_invoke$arity$1(other)));
});

cljs.core.match.LiteralPattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
});

cljs.core.match.LiteralPattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new cljs.core.match.LiteralPattern(self__.l,new_meta));
});

cljs.core.match.LiteralPattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
});

cljs.core.match.LiteralPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var G__977 = (((k instanceof cljs.core.Keyword))?k.fqn:null);
switch (G__977) {
case "l":
return self__.l;

break;
case "cljs.core.match/tag":
return new cljs.core.Keyword("cljs.core.match","literal","cljs.core.match/literal",(-1699299641));

break;
default:
return not_found;

}
});

cljs.core.match.LiteralPattern.prototype.cljs$core$match$protocols$IPatternCompile$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.match.LiteralPattern.prototype.cljs$core$match$protocols$IPatternCompile$to_source_STAR_$arity$2 = (function (this$,ocr){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,self__.l,cljs.core.List.EMPTY)){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",(1866613644),null)),(function (){var x__23399__auto__ = ocr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
} else {
if(((self__.l instanceof cljs.core.Symbol)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"local","local",(-1497766724)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,self__.l))))){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",(-1891498332),null)),(function (){var x__23399__auto__ = ocr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23399__auto__ = self__.l;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
} else {
if((typeof self__.l === 'number') || (typeof self__.l === 'string') || (self__.l === true) || (self__.l === false) || ((self__.l == null))){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","identical?","cljs.core/identical?",(608476750),null)),(function (){var x__23399__auto__ = ocr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = self__.l;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
} else {
if((self__.l instanceof cljs.core.Keyword)){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","keyword-identical?","cljs.core/keyword-identical?",(1598491177),null)),(function (){var x__23399__auto__ = ocr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = self__.l;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
} else {
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",(-1891498332),null)),(function (){var x__23399__auto__ = ocr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = self__.l;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));

}
}
}
}
});

cljs.core.match.LiteralPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"l","l",(-1258542346),null),new cljs.core.Symbol(null,"_meta","_meta",(-1716892533),null)], null);
});

cljs.core.match.LiteralPattern.cljs$lang$type = true;

cljs.core.match.LiteralPattern.cljs$lang$ctorStr = "cljs.core.match/LiteralPattern";

cljs.core.match.LiteralPattern.cljs$lang$ctorPrWriter = (function (this__22602__auto__,writer__22603__auto__,opt__22604__auto__){
return cljs.core._write.call(null,writer__22603__auto__,"cljs.core.match/LiteralPattern");
});

(function (){
cljs.core.match.__GT_LiteralPattern = (function cljs$core$match$__GT_LiteralPattern(l,_meta){
return (new cljs.core.match.LiteralPattern(l,_meta));
}); return (
new cljs.core.Var(function(){return cljs.core.match.__GT_LiteralPattern;},new cljs.core.Symbol("cljs.core.match","->LiteralPattern","cljs.core.match/->LiteralPattern",(-1938546797),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol("cljs.core.match","Object","cljs.core.match/Object",(1160957744),null),null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","ILookup","cljs.core/ILookup",(-150575073),null),null,new cljs.core.Symbol("cljs.core.match.protocols","IPatternCompile","cljs.core.match.protocols/IPatternCompile",(1601136321),null),null], null), null),new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"->LiteralPattern","->LiteralPattern",(-956277471),null),"cljs/core/match.cljc",(24),(1),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(951),(951),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"l","l",(-1258542346),null),new cljs.core.Symbol(null,"_meta","_meta",(-1716892533),null)], null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","ILookup","cljs.core/ILookup",(-150575073),null),null], null), null),null,(cljs.core.truth_(cljs.core.match.__GT_LiteralPattern)?cljs.core.match.__GT_LiteralPattern.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.match.literal_pattern = (function cljs$core$match$literal_pattern(l){
return (new cljs.core.match.LiteralPattern(l,cljs.core.meta.call(null,l)));
}); return (
new cljs.core.Var(function(){return cljs.core.match.literal_pattern;},new cljs.core.Symbol("cljs.core.match","literal-pattern","cljs.core.match/literal-pattern",(-1343162845),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"literal-pattern","literal-pattern",(1363610461),null),"cljs/core/match.cljc",(22),(1),(996),(996),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"l","l",(-1258542346),null)], null)),null,(cljs.core.truth_(cljs.core.match.literal_pattern)?cljs.core.match.literal_pattern.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.literal_pattern_QMARK_ = (function cljs$core$match$literal_pattern_QMARK_(x){
return (x instanceof cljs.core.match.LiteralPattern);
}); return (
new cljs.core.Var(function(){return cljs.core.match.literal_pattern_QMARK_;},new cljs.core.Symbol("cljs.core.match","literal-pattern?","cljs.core.match/literal-pattern?",(239294010),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"literal-pattern?","literal-pattern?",(-989910796),null),"cljs/core/match.cljc",(23),(1),(999),(999),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(cljs.core.match.literal_pattern_QMARK_)?cljs.core.match.literal_pattern_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.seq_pattern_QMARK_; return (
new cljs.core.Var(function(){return cljs.core.match.seq_pattern_QMARK_;},new cljs.core.Symbol("cljs.core.match","seq-pattern?","cljs.core.match/seq-pattern?",(-2141397580),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"seq-pattern?","seq-pattern?",(-893378714),null),"cljs/core/match.cljc",(22),(1),(1012),true,(1012),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.match.seq_pattern_QMARK_)?cljs.core.match.seq_pattern_QMARK_.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.match.rest_pattern_QMARK_; return (
new cljs.core.Var(function(){return cljs.core.match.rest_pattern_QMARK_;},new cljs.core.Symbol("cljs.core.match","rest-pattern?","cljs.core.match/rest-pattern?",(-1818629071),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"rest-pattern?","rest-pattern?",(-1461378749),null),"cljs/core/match.cljc",(36),(1),(1012),true,(1012),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.match.rest_pattern_QMARK_)?cljs.core.match.rest_pattern_QMARK_.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.match.seq_pattern; return (
new cljs.core.Var(function(){return cljs.core.match.seq_pattern;},new cljs.core.Symbol("cljs.core.match","seq-pattern","cljs.core.match/seq-pattern",(-1165590643),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"seq-pattern","seq-pattern",(1667939635),null),"cljs/core/match.cljc",(48),(1),(1012),true,(1012),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.match.seq_pattern)?cljs.core.match.seq_pattern.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.specialize_seq_pattern_rest_row = (function cljs$core$match$specialize_seq_pattern_rest_row(focr,row){
var p = cljs.core.first.call(null,row);
var p__$1 = (cljs.core.truth_(cljs.core.match.seq_pattern_QMARK_.call(null,p))?new cljs.core.Keyword(null,"p","p",(151049309)).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"s","s",(1705939918)).cljs$core$IFn$_invoke$arity$1(p))):cljs.core.match.wildcard_pattern.call(null));
return cljs.core.match.protocols.prepend.call(null,cljs.core.match.drop_nth_bind.call(null,row,(0),focr),p__$1);
}); return (
new cljs.core.Var(function(){return cljs.core.match.specialize_seq_pattern_rest_row;},new cljs.core.Symbol("cljs.core.match","specialize-seq-pattern-rest-row","cljs.core.match/specialize-seq-pattern-rest-row",(-697879177),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"specialize-seq-pattern-rest-row","specialize-seq-pattern-rest-row",(-1711544127),null),"cljs/core/match.cljc",(38),(1),(1014),(1014),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"focr","focr",(819970127),null),new cljs.core.Symbol(null,"row","row",(1070392006),null)], null)),null,(cljs.core.truth_(cljs.core.match.specialize_seq_pattern_rest_row)?cljs.core.match.specialize_seq_pattern_rest_row.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.specialize_seq_pattern_rest_matrix = (function cljs$core$match$specialize_seq_pattern_rest_matrix(rows,focr){
return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.match.specialize_seq_pattern_rest_row,focr),rows));
}); return (
new cljs.core.Var(function(){return cljs.core.match.specialize_seq_pattern_rest_matrix;},new cljs.core.Symbol("cljs.core.match","specialize-seq-pattern-rest-matrix","cljs.core.match/specialize-seq-pattern-rest-matrix",(112558548),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"specialize-seq-pattern-rest-matrix","specialize-seq-pattern-rest-matrix",(-821541242),null),"cljs/core/match.cljc",(41),(1),(1021),(1021),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rows","rows",(-1804386089),null),new cljs.core.Symbol(null,"focr","focr",(819970127),null)], null)),null,(cljs.core.truth_(cljs.core.match.specialize_seq_pattern_rest_matrix)?cljs.core.match.specialize_seq_pattern_rest_matrix.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.seq_pattern_matrix_rest_ocrs = (function cljs$core$match$seq_pattern_matrix_rest_ocrs(ocrs,focr){
return ocrs;
}); return (
new cljs.core.Var(function(){return cljs.core.match.seq_pattern_matrix_rest_ocrs;},new cljs.core.Symbol("cljs.core.match","seq-pattern-matrix-rest-ocrs","cljs.core.match/seq-pattern-matrix-rest-ocrs",(1988421893),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"seq-pattern-matrix-rest-ocrs","seq-pattern-matrix-rest-ocrs",(-1334792521),null),"cljs/core/match.cljc",(35),(1),(1026),(1026),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ocrs","ocrs",(-195684886),null),new cljs.core.Symbol(null,"focr","focr",(819970127),null)], null)),null,(cljs.core.truth_(cljs.core.match.seq_pattern_matrix_rest_ocrs)?cljs.core.match.seq_pattern_matrix_rest_ocrs.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.specialize_seq_pattern_row = (function cljs$core$match$specialize_seq_pattern_row(focr,row){
var p = cljs.core.first.call(null,row);
var vec__985 = (cljs.core.truth_(cljs.core.match.seq_pattern_QMARK_.call(null,p))?(function (){var vec__988 = new cljs.core.Keyword(null,"s","s",(1705939918)).cljs$core$IFn$_invoke$arity$1(p);
var seq__989 = cljs.core.seq.call(null,vec__988);
var first__990 = cljs.core.first.call(null,seq__989);
var seq__989__$1 = cljs.core.next.call(null,seq__989);
var h = first__990;
var t = seq__989__$1;
var t__$1 = ((cljs.core.empty_QMARK_.call(null,t))?cljs.core.match.literal_pattern.call(null,cljs.core.List.EMPTY):(cljs.core.truth_(cljs.core.match.rest_pattern_QMARK_.call(null,cljs.core.first.call(null,t)))?new cljs.core.Keyword(null,"p","p",(151049309)).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,t)):cljs.core.match.seq_pattern.call(null,t)
));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,t__$1], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.match.wildcard_pattern.call(null),cljs.core.match.wildcard_pattern.call(null)], null));
var h = cljs.core.nth.call(null,vec__985,(0),null);
var t = cljs.core.nth.call(null,vec__985,(1),null);
return cljs.core.reduce.call(null,cljs.core.match.protocols.prepend,cljs.core.match.drop_nth_bind.call(null,row,(0),focr),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,h], null));
}); return (
new cljs.core.Var(function(){return cljs.core.match.specialize_seq_pattern_row;},new cljs.core.Symbol("cljs.core.match","specialize-seq-pattern-row","cljs.core.match/specialize-seq-pattern-row",(999570445),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"specialize-seq-pattern-row","specialize-seq-pattern-row",(1902180787),null),"cljs/core/match.cljc",(33),(1),(1028),(1028),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"focr","focr",(819970127),null),new cljs.core.Symbol(null,"row","row",(1070392006),null)], null)),null,(cljs.core.truth_(cljs.core.match.specialize_seq_pattern_row)?cljs.core.match.specialize_seq_pattern_row.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.specialize_seq_pattern_matrix = (function cljs$core$match$specialize_seq_pattern_matrix(rows,focr){
return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.match.specialize_seq_pattern_row,focr),rows));
}); return (
new cljs.core.Var(function(){return cljs.core.match.specialize_seq_pattern_matrix;},new cljs.core.Symbol("cljs.core.match","specialize-seq-pattern-matrix","cljs.core.match/specialize-seq-pattern-matrix",(494917316),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"specialize-seq-pattern-matrix","specialize-seq-pattern-matrix",(1451954294),null),"cljs/core/match.cljc",(36),(1),(1040),(1040),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rows","rows",(-1804386089),null),new cljs.core.Symbol(null,"focr","focr",(819970127),null)], null)),null,(cljs.core.truth_(cljs.core.match.specialize_seq_pattern_matrix)?cljs.core.match.specialize_seq_pattern_matrix.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.seq_pattern_matrix_ocrs = (function cljs$core$match$seq_pattern_matrix_ocrs(ocrs,focr){
var seq_sym = (function (){var or__20817__auto__ = new cljs.core.Keyword(null,"seq-sym","seq-sym",(-525219406)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,focr));
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return focr;
}
})();
var sym_meta = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"occurrence-type","occurrence-type",(-1111165873)),new cljs.core.Keyword(null,"seq","seq",(-1817803783)),new cljs.core.Keyword(null,"seq-sym","seq-sym",(-525219406)),focr], null);
var hsym = cljs.core.gensym.call(null,[cljs.core.str(cljs.core.name.call(null,seq_sym)),cljs.core.str("_head__")].join(''));
var hsym__$1 = cljs.core.with_meta.call(null,hsym,cljs.core.assoc.call(null,sym_meta,new cljs.core.Keyword(null,"bind-expr","bind-expr",(41520549)),cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",(-752535972),null)),(function (){var x__23399__auto__ = focr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()))));
var tsym = cljs.core.gensym.call(null,[cljs.core.str(cljs.core.name.call(null,seq_sym)),cljs.core.str("_tail__")].join(''));
var tsym__$1 = cljs.core.with_meta.call(null,tsym,cljs.core.assoc.call(null,sym_meta,new cljs.core.Keyword(null,"bind-expr","bind-expr",(41520549)),cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",(-285075455),null)),(function (){var x__23399__auto__ = focr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()))));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hsym__$1,tsym__$1], null),cljs.core.match.protocols.drop_nth.call(null,ocrs,(0)));
}); return (
new cljs.core.Var(function(){return cljs.core.match.seq_pattern_matrix_ocrs;},new cljs.core.Symbol("cljs.core.match","seq-pattern-matrix-ocrs","cljs.core.match/seq-pattern-matrix-ocrs",(1601971409),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"seq-pattern-matrix-ocrs","seq-pattern-matrix-ocrs",(75555431),null),"cljs/core/match.cljc",(30),(1),(1045),(1045),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ocrs","ocrs",(-195684886),null),new cljs.core.Symbol(null,"focr","focr",(819970127),null)], null)),null,(cljs.core.truth_(cljs.core.match.seq_pattern_matrix_ocrs)?cljs.core.match.seq_pattern_matrix_ocrs.cljs$lang$test:null)])));})()
;

/**
* @constructor
 * @implements {cljs.core.match.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.match.protocols.IPatternCompile}
 * @implements {cljs.core.match.protocols.ISpecializeMatrix}
*/
cljs.core.match.SeqPattern = (function (s,_meta){
this.s = s;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.match.SeqPattern.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str(self__.s)].join('');
});

cljs.core.match.SeqPattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
});

cljs.core.match.SeqPattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new cljs.core.match.SeqPattern(self__.s,new_meta));
});

cljs.core.match.SeqPattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
});

cljs.core.match.SeqPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var G__991 = (((k instanceof cljs.core.Keyword))?k.fqn:null);
switch (G__991) {
case "s":
return self__.s;

break;
case "cljs.core.match/tag":
return new cljs.core.Keyword("cljs.core.match","seq","cljs.core.match/seq",(-634730153));

break;
default:
return not_found;

}
});

cljs.core.match.SeqPattern.prototype.cljs$core$match$protocols$IPatternCompile$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.match.SeqPattern.prototype.cljs$core$match$protocols$IPatternCompile$to_source_STAR_$arity$2 = (function (this$,ocr){
var self__ = this;
var this$__$1 = this;
if(((cljs.core.count.call(null,self__.s) >= (1))) && (cljs.core.not.call(null,cljs.core.match.rest_pattern_QMARK_.call(null,cljs.core.first.call(null,self__.s))))){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","or","cljs.core/or",(1201033885),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",(-1302056292),null)),(function (){var x__23399__auto__ = ocr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",(1777854658),null)),(function (){var x__23399__auto__ = ocr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",(-1649497689),null)),(function (){var x__23399__auto__ = ocr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
} else {
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","or","cljs.core/or",(1201033885),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",(-1302056292),null)),(function (){var x__23399__auto__ = ocr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",(1777854658),null)),(function (){var x__23399__auto__ = ocr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
}
});

cljs.core.match.SeqPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.match.SeqPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$specialize_matrix$arity$2 = (function (this$,matrix){
var self__ = this;
var this$__$1 = this;
var rows = cljs.core.match.rows.call(null,matrix);
var ocrs = cljs.core.match.occurrences.call(null,matrix);
var focr = cljs.core.first.call(null,ocrs);
if(cljs.core.not.call(null,cljs.core.match.rest_pattern_QMARK_.call(null,cljs.core.first.call(null,self__.s)))){
var nrows = cljs.core.match.specialize_seq_pattern_matrix.call(null,rows,focr);
var nocrs = cljs.core.match.seq_pattern_matrix_ocrs.call(null,ocrs,focr);
return cljs.core.match.pattern_matrix.call(null,nrows,nocrs);
} else {
var nrows = cljs.core.match.specialize_seq_pattern_rest_matrix.call(null,rows,focr);
var nocrs = cljs.core.match.seq_pattern_matrix_rest_ocrs.call(null,ocrs,focr);
return cljs.core.match.pattern_matrix.call(null,nrows,nocrs);
}
});

cljs.core.match.SeqPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null),new cljs.core.Symbol(null,"_meta","_meta",(-1716892533),null)], null);
});

cljs.core.match.SeqPattern.cljs$lang$type = true;

cljs.core.match.SeqPattern.cljs$lang$ctorStr = "cljs.core.match/SeqPattern";

cljs.core.match.SeqPattern.cljs$lang$ctorPrWriter = (function (this__22602__auto__,writer__22603__auto__,opt__22604__auto__){
return cljs.core._write.call(null,writer__22603__auto__,"cljs.core.match/SeqPattern");
});

(function (){
cljs.core.match.__GT_SeqPattern = (function cljs$core$match$__GT_SeqPattern(s,_meta){
return (new cljs.core.match.SeqPattern(s,_meta));
}); return (
new cljs.core.Var(function(){return cljs.core.match.__GT_SeqPattern;},new cljs.core.Symbol("cljs.core.match","->SeqPattern","cljs.core.match/->SeqPattern",(1130380379),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol("cljs.core.match","Object","cljs.core.match/Object",(1160957744),null),null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","ILookup","cljs.core/ILookup",(-150575073),null),null,new cljs.core.Symbol("cljs.core.match.protocols","IPatternCompile","cljs.core.match.protocols/IPatternCompile",(1601136321),null),null,new cljs.core.Symbol("cljs.core.match.protocols","ISpecializeMatrix","cljs.core.match.protocols/ISpecializeMatrix",(1271926164),null),null], null), null),new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"->SeqPattern","->SeqPattern",(450093869),null),"cljs/core/match.cljc",(20),(1),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(1057),(1057),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null),new cljs.core.Symbol(null,"_meta","_meta",(-1716892533),null)], null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","ILookup","cljs.core/ILookup",(-150575073),null),null], null), null),null,(cljs.core.truth_(cljs.core.match.__GT_SeqPattern)?cljs.core.match.__GT_SeqPattern.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.match.seq_pattern = (function cljs$core$match$seq_pattern(s){
if(cljs.core.sequential_QMARK_.call(null,s)){
} else {
throw (new Error("Assert failed: (sequential? s)"));
}

if(!(cljs.core.empty_QMARK_.call(null,s))){
} else {
throw (new Error("Assert failed: (not (empty? s))"));
}

return (new cljs.core.match.SeqPattern(s,null));
}); return (
new cljs.core.Var(function(){return cljs.core.match.seq_pattern;},new cljs.core.Symbol("cljs.core.match","seq-pattern","cljs.core.match/seq-pattern",(-1165590643),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"seq-pattern","seq-pattern",(1667939635),null),"cljs/core/match.cljc",(30),(1),(1097),(1097),new cljs.core.Symbol(null,"SeqPattern","SeqPattern",(1305530563),null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),null,(cljs.core.truth_(cljs.core.match.seq_pattern)?cljs.core.match.seq_pattern.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.seq_pattern_QMARK_ = (function cljs$core$match$seq_pattern_QMARK_(x){
return (x instanceof cljs.core.match.SeqPattern);
}); return (
new cljs.core.Var(function(){return cljs.core.match.seq_pattern_QMARK_;},new cljs.core.Symbol("cljs.core.match","seq-pattern?","cljs.core.match/seq-pattern?",(-2141397580),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"seq-pattern?","seq-pattern?",(-893378714),null),"cljs/core/match.cljc",(19),(1),(1102),(1102),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(cljs.core.match.seq_pattern_QMARK_)?cljs.core.match.seq_pattern_QMARK_.cljs$lang$test:null)])));})()
;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
cljs.core.match.RestPattern = (function (p,__meta,__extmap,__hash){
this.p = p;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.match.RestPattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22669__auto__,k__22670__auto__){
var self__ = this;
var this__22669__auto____$1 = this;
return cljs.core._lookup.call(null,this__22669__auto____$1,k__22670__auto__,null);
});

cljs.core.match.RestPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22671__auto__,k994,else__22672__auto__){
var self__ = this;
var this__22671__auto____$1 = this;
var G__996 = (((k994 instanceof cljs.core.Keyword))?k994.fqn:null);
switch (G__996) {
case "p":
return self__.p;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k994,else__22672__auto__);

}
});

cljs.core.match.RestPattern.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22689__auto__,writer__22690__auto__,opts__22691__auto__){
var self__ = this;
var this__22689__auto____$1 = this;
var pr_pair__22692__auto__ = ((function (this__22689__auto____$1){
return (function (keyval__22693__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22690__auto__,cljs.core.pr_writer,""," ","",opts__22691__auto__,keyval__22693__auto__);
});})(this__22689__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22690__auto__,pr_pair__22692__auto__,"#cljs.core.match.RestPattern{",", ","}",opts__22691__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",(151049309)),self__.p],null))], null),self__.__extmap));
});

cljs.core.match.RestPattern.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.match.RestPattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__993){
var self__ = this;
var G__993__$1 = this;
return (new cljs.core.RecordIter((0),G__993__$1,(1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",(151049309))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.core.match.RestPattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22667__auto__){
var self__ = this;
var this__22667__auto____$1 = this;
return self__.__meta;
});

cljs.core.match.RestPattern.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22663__auto__){
var self__ = this;
var this__22663__auto____$1 = this;
return (new cljs.core.match.RestPattern(self__.p,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.match.RestPattern.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22673__auto__){
var self__ = this;
var this__22673__auto____$1 = this;
return ((1) + cljs.core.count.call(null,self__.__extmap));
});

cljs.core.match.RestPattern.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22664__auto__){
var self__ = this;
var this__22664__auto____$1 = this;
var h__21845__auto__ = self__.__hash;
if(!((h__21845__auto__ == null))){
return h__21845__auto__;
} else {
var h__21845__auto____$1 = cljs.core.hash_imap.call(null,this__22664__auto____$1);
self__.__hash = h__21845__auto____$1;

return h__21845__auto____$1;
}
});

cljs.core.match.RestPattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22665__auto__,other__22666__auto__){
var self__ = this;
var this__22665__auto____$1 = this;
if(cljs.core.truth_((function (){var and__20770__auto__ = other__22666__auto__;
if(cljs.core.truth_(and__20770__auto__)){
var and__20770__auto____$1 = (this__22665__auto____$1.constructor === other__22666__auto__.constructor);
if(and__20770__auto____$1){
return cljs.core.equiv_map.call(null,this__22665__auto____$1,other__22666__auto__);
} else {
return and__20770__auto____$1;
}
} else {
return and__20770__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.core.match.RestPattern.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22679__auto__,k__22680__auto__){
var self__ = this;
var this__22679__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p","p",(151049309)),null], null), null),k__22680__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22679__auto____$1),self__.__meta),k__22680__auto__);
} else {
return (new cljs.core.match.RestPattern(self__.p,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22680__auto__)),null));
}
});

cljs.core.match.RestPattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22677__auto__,k__22678__auto__,G__993){
var self__ = this;
var this__22677__auto____$1 = this;
var pred__997 = cljs.core.keyword_identical_QMARK_;
var expr__998 = k__22678__auto__;
if(cljs.core.truth_(pred__997.call(null,new cljs.core.Keyword(null,"p","p",(151049309)),expr__998))){
return (new cljs.core.match.RestPattern(G__993,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.match.RestPattern(self__.p,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22678__auto__,G__993),null));
}
});

cljs.core.match.RestPattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22683__auto__){
var self__ = this;
var this__22683__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",(151049309)),self__.p],null))], null),self__.__extmap));
});

cljs.core.match.RestPattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22668__auto__,G__993){
var self__ = this;
var this__22668__auto____$1 = this;
return (new cljs.core.match.RestPattern(self__.p,G__993,self__.__extmap,self__.__hash));
});

cljs.core.match.RestPattern.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22674__auto__,entry__22675__auto__){
var self__ = this;
var this__22674__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22675__auto__)){
return cljs.core._assoc.call(null,this__22674__auto____$1,cljs.core._nth.call(null,entry__22675__auto__,(0)),cljs.core._nth.call(null,entry__22675__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22674__auto____$1,entry__22675__auto__);
}
});

cljs.core.match.RestPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null)], null);
});

cljs.core.match.RestPattern.cljs$lang$type = true;

cljs.core.match.RestPattern.cljs$lang$ctorPrSeq = (function (this__23044__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.match/RestPattern");
});

cljs.core.match.RestPattern.cljs$lang$ctorPrWriter = (function (this__23044__auto__,writer__23045__auto__){
return cljs.core._write.call(null,writer__23045__auto__,"cljs.core.match/RestPattern");
});

(function (){
cljs.core.match.__GT_RestPattern = (function cljs$core$match$__GT_RestPattern(p){
return (new cljs.core.match.RestPattern(p,null,null,null));
}); return (
new cljs.core.Var(function(){return cljs.core.match.__GT_RestPattern;},new cljs.core.Symbol("cljs.core.match","->RestPattern","cljs.core.match/->RestPattern",(-1039260547),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"->RestPattern","->RestPattern",(-2003641937),null),"cljs/core/match.cljc",(23),(1),true,new cljs.core.Keyword(null,"positional","positional",(-203580463)),(1116),(1116),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null)], null)),null,(cljs.core.truth_(cljs.core.match.__GT_RestPattern)?cljs.core.match.__GT_RestPattern.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.match.map__GT_RestPattern = (function cljs$core$match$map__GT_RestPattern(G__995){
return (new cljs.core.match.RestPattern(new cljs.core.Keyword(null,"p","p",(151049309)).cljs$core$IFn$_invoke$arity$1(G__995),null,cljs.core.dissoc.call(null,G__995,new cljs.core.Keyword(null,"p","p",(151049309))),null));
}); return (
new cljs.core.Var(function(){return cljs.core.match.map__GT_RestPattern;},new cljs.core.Symbol("cljs.core.match","map->RestPattern","cljs.core.match/map->RestPattern",(-399402742),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"map->RestPattern","map->RestPattern",(581262424),null),"cljs/core/match.cljc",(23),(1),true,new cljs.core.Keyword(null,"map","map",(1371690461)),(1116),(1116),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"G__995","G__995",(-1629981037),null)], null)),null,(cljs.core.truth_(cljs.core.match.map__GT_RestPattern)?cljs.core.match.map__GT_RestPattern.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.match.rest_pattern = (function cljs$core$match$rest_pattern(p){
return cljs.core.assoc.call(null,(new cljs.core.match.RestPattern(p,null,null,null)),new cljs.core.Keyword("cljs.core.match","tag","cljs.core.match/tag",(-39691477)),new cljs.core.Keyword("cljs.core.match","rest","cljs.core.match/rest",(-410436433)));
}); return (
new cljs.core.Var(function(){return cljs.core.match.rest_pattern;},new cljs.core.Symbol("cljs.core.match","rest-pattern","cljs.core.match/rest-pattern",(-843243103),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"rest-pattern","rest-pattern",(118580083),null),"cljs/core/match.cljc",(19),(1),(1118),(1118),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null)], null)),null,(cljs.core.truth_(cljs.core.match.rest_pattern)?cljs.core.match.rest_pattern.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.rest_pattern_QMARK_ = (function cljs$core$match$rest_pattern_QMARK_(x){
return (x instanceof cljs.core.match.RestPattern);
}); return (
new cljs.core.Var(function(){return cljs.core.match.rest_pattern_QMARK_;},new cljs.core.Symbol("cljs.core.match","rest-pattern?","cljs.core.match/rest-pattern?",(-1818629071),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"rest-pattern?","rest-pattern?",(-1461378749),null),"cljs/core/match.cljc",(20),(1),(1121),(1121),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(cljs.core.match.rest_pattern_QMARK_)?cljs.core.match.rest_pattern_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.specialize_map_key_pattern_matrix = (function cljs$core$match$specialize_map_key_pattern_matrix(rows){
var p = new cljs.core.Keyword(null,"p","p",(151049309)).cljs$core$IFn$_invoke$arity$1(cljs.core.ffirst.call(null,rows));
return cljs.core.vec.call(null,cljs.core.map.call(null,((function (p){
return (function (p1__29_SHARP_){
return cljs.core.match.protocols.prepend.call(null,p1__29_SHARP_,p);
});})(p))
,cljs.core.map.call(null,((function (p){
return (function (p1__28_SHARP_){
return cljs.core.match.protocols.drop_nth.call(null,p1__28_SHARP_,(0));
});})(p))
,rows)));
}); return (
new cljs.core.Var(function(){return cljs.core.match.specialize_map_key_pattern_matrix;},new cljs.core.Symbol("cljs.core.match","specialize-map-key-pattern-matrix","cljs.core.match/specialize-map-key-pattern-matrix",(3334499),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"specialize-map-key-pattern-matrix","specialize-map-key-pattern-matrix",(1319543709),null),"cljs/core/match.cljc",(40),(1),(1134),(1134),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)], null)),null,(cljs.core.truth_(cljs.core.match.specialize_map_key_pattern_matrix)?cljs.core.match.specialize_map_key_pattern_matrix.cljs$lang$test:null)])));})()
;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.match.protocols.IPatternCompile}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.match.protocols.IExistentialPattern}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.match.protocols.ISpecializeMatrix}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.core.match.MapKeyPattern = (function (p,__meta,__extmap,__hash){
this.p = p;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.match.MapKeyPattern.prototype.cljs$core$match$protocols$IPatternCompile$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.match.MapKeyPattern.prototype.cljs$core$match$protocols$IPatternCompile$to_source_STAR_$arity$2 = (function (this$,ocr){
var self__ = this;
var this$__$1 = this;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",(1017572457),null)),(function (){var x__23399__auto__ = ocr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.core.match","not-found","cljs.core.match/not-found",(85049222)))));
});

cljs.core.match.MapKeyPattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22669__auto__,k__22670__auto__){
var self__ = this;
var this__22669__auto____$1 = this;
return cljs.core._lookup.call(null,this__22669__auto____$1,k__22670__auto__,null);
});

cljs.core.match.MapKeyPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22671__auto__,k1002,else__22672__auto__){
var self__ = this;
var this__22671__auto____$1 = this;
var G__1004 = (((k1002 instanceof cljs.core.Keyword))?k1002.fqn:null);
switch (G__1004) {
case "p":
return self__.p;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k1002,else__22672__auto__);

}
});

cljs.core.match.MapKeyPattern.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22689__auto__,writer__22690__auto__,opts__22691__auto__){
var self__ = this;
var this__22689__auto____$1 = this;
var pr_pair__22692__auto__ = ((function (this__22689__auto____$1){
return (function (keyval__22693__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22690__auto__,cljs.core.pr_writer,""," ","",opts__22691__auto__,keyval__22693__auto__);
});})(this__22689__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22690__auto__,pr_pair__22692__auto__,"#cljs.core.match.MapKeyPattern{",", ","}",opts__22691__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",(151049309)),self__.p],null))], null),self__.__extmap));
});

cljs.core.match.MapKeyPattern.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.match.MapKeyPattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__1001){
var self__ = this;
var G__1001__$1 = this;
return (new cljs.core.RecordIter((0),G__1001__$1,(1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",(151049309))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.core.match.MapKeyPattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22667__auto__){
var self__ = this;
var this__22667__auto____$1 = this;
return self__.__meta;
});

cljs.core.match.MapKeyPattern.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22663__auto__){
var self__ = this;
var this__22663__auto____$1 = this;
return (new cljs.core.match.MapKeyPattern(self__.p,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.match.MapKeyPattern.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22673__auto__){
var self__ = this;
var this__22673__auto____$1 = this;
return ((1) + cljs.core.count.call(null,self__.__extmap));
});

cljs.core.match.MapKeyPattern.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22664__auto__){
var self__ = this;
var this__22664__auto____$1 = this;
var h__21845__auto__ = self__.__hash;
if(!((h__21845__auto__ == null))){
return h__21845__auto__;
} else {
var h__21845__auto____$1 = cljs.core.hash_imap.call(null,this__22664__auto____$1);
self__.__hash = h__21845__auto____$1;

return h__21845__auto____$1;
}
});

cljs.core.match.MapKeyPattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22665__auto__,other__22666__auto__){
var self__ = this;
var this__22665__auto____$1 = this;
if(cljs.core.truth_((function (){var and__20770__auto__ = other__22666__auto__;
if(cljs.core.truth_(and__20770__auto__)){
var and__20770__auto____$1 = (this__22665__auto____$1.constructor === other__22666__auto__.constructor);
if(and__20770__auto____$1){
return cljs.core.equiv_map.call(null,this__22665__auto____$1,other__22666__auto__);
} else {
return and__20770__auto____$1;
}
} else {
return and__20770__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.core.match.MapKeyPattern.prototype.cljs$core$match$protocols$IExistentialPattern$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.match.MapKeyPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.match.MapKeyPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$specialize_matrix$arity$2 = (function (this$,matrix){
var self__ = this;
var this$__$1 = this;
var rows = cljs.core.match.rows.call(null,matrix);
var ocrs = cljs.core.match.occurrences.call(null,matrix);
var nrows = cljs.core.match.specialize_map_key_pattern_matrix.call(null,rows);
return cljs.core.match.pattern_matrix.call(null,nrows,ocrs);
});

cljs.core.match.MapKeyPattern.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22679__auto__,k__22680__auto__){
var self__ = this;
var this__22679__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p","p",(151049309)),null], null), null),k__22680__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22679__auto____$1),self__.__meta),k__22680__auto__);
} else {
return (new cljs.core.match.MapKeyPattern(self__.p,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22680__auto__)),null));
}
});

cljs.core.match.MapKeyPattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22677__auto__,k__22678__auto__,G__1001){
var self__ = this;
var this__22677__auto____$1 = this;
var pred__1005 = cljs.core.keyword_identical_QMARK_;
var expr__1006 = k__22678__auto__;
if(cljs.core.truth_(pred__1005.call(null,new cljs.core.Keyword(null,"p","p",(151049309)),expr__1006))){
return (new cljs.core.match.MapKeyPattern(G__1001,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.match.MapKeyPattern(self__.p,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22678__auto__,G__1001),null));
}
});

cljs.core.match.MapKeyPattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22683__auto__){
var self__ = this;
var this__22683__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",(151049309)),self__.p],null))], null),self__.__extmap));
});

cljs.core.match.MapKeyPattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22668__auto__,G__1001){
var self__ = this;
var this__22668__auto____$1 = this;
return (new cljs.core.match.MapKeyPattern(self__.p,G__1001,self__.__extmap,self__.__hash));
});

cljs.core.match.MapKeyPattern.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22674__auto__,entry__22675__auto__){
var self__ = this;
var this__22674__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22675__auto__)){
return cljs.core._assoc.call(null,this__22674__auto____$1,cljs.core._nth.call(null,entry__22675__auto__,(0)),cljs.core._nth.call(null,entry__22675__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22674__auto____$1,entry__22675__auto__);
}
});

cljs.core.match.MapKeyPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null)], null);
});

cljs.core.match.MapKeyPattern.cljs$lang$type = true;

cljs.core.match.MapKeyPattern.cljs$lang$ctorPrSeq = (function (this__23044__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.match/MapKeyPattern");
});

cljs.core.match.MapKeyPattern.cljs$lang$ctorPrWriter = (function (this__23044__auto__,writer__23045__auto__){
return cljs.core._write.call(null,writer__23045__auto__,"cljs.core.match/MapKeyPattern");
});

(function (){
cljs.core.match.__GT_MapKeyPattern = (function cljs$core$match$__GT_MapKeyPattern(p){
return (new cljs.core.match.MapKeyPattern(p,null,null,null));
}); return (
new cljs.core.Var(function(){return cljs.core.match.__GT_MapKeyPattern;},new cljs.core.Symbol("cljs.core.match","->MapKeyPattern","cljs.core.match/->MapKeyPattern",(-1246707913),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"->MapKeyPattern","->MapKeyPattern",(1930183397),null),"cljs/core/match.cljc",(25),(1),true,new cljs.core.Keyword(null,"positional","positional",(-203580463)),(1141),(1141),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null)], null)),null,(cljs.core.truth_(cljs.core.match.__GT_MapKeyPattern)?cljs.core.match.__GT_MapKeyPattern.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.match.map__GT_MapKeyPattern = (function cljs$core$match$map__GT_MapKeyPattern(G__1003){
return (new cljs.core.match.MapKeyPattern(new cljs.core.Keyword(null,"p","p",(151049309)).cljs$core$IFn$_invoke$arity$1(G__1003),null,cljs.core.dissoc.call(null,G__1003,new cljs.core.Keyword(null,"p","p",(151049309))),null));
}); return (
new cljs.core.Var(function(){return cljs.core.match.map__GT_MapKeyPattern;},new cljs.core.Symbol("cljs.core.match","map->MapKeyPattern","cljs.core.match/map->MapKeyPattern",(-1221008422),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"map->MapKeyPattern","map->MapKeyPattern",(-304865108),null),"cljs/core/match.cljc",(25),(1),true,new cljs.core.Keyword(null,"map","map",(1371690461)),(1141),(1141),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"G__1003","G__1003",(1825651753),null)], null)),null,(cljs.core.truth_(cljs.core.match.map__GT_MapKeyPattern)?cljs.core.match.map__GT_MapKeyPattern.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.match.map_key_pattern = (function cljs$core$match$map_key_pattern(p){
return cljs.core.assoc.call(null,(new cljs.core.match.MapKeyPattern(p,null,null,null)),new cljs.core.Keyword("cljs.core.match","tag","cljs.core.match/tag",(-39691477)),new cljs.core.Keyword("cljs.core.match","map-key","cljs.core.match/map-key",(852254431)));
}); return (
new cljs.core.Var(function(){return cljs.core.match.map_key_pattern;},new cljs.core.Symbol("cljs.core.match","map-key-pattern","cljs.core.match/map-key-pattern",(-634203727),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"map-key-pattern","map-key-pattern",(-1819988285),null),"cljs/core/match.cljc",(22),(1),(1155),(1155),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null)], null)),null,(cljs.core.truth_(cljs.core.match.map_key_pattern)?cljs.core.match.map_key_pattern.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.map_key_pattern_QMARK_ = (function cljs$core$match$map_key_pattern_QMARK_(x){
return (x instanceof cljs.core.match.MapKeyPattern);
}); return (
new cljs.core.Var(function(){return cljs.core.match.map_key_pattern_QMARK_;},new cljs.core.Symbol("cljs.core.match","map-key-pattern?","cljs.core.match/map-key-pattern?",(78439618),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"map-key-pattern?","map-key-pattern?",(1026630544),null),"cljs/core/match.cljc",(23),(1),(1158),(1158),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(cljs.core.match.map_key_pattern_QMARK_)?cljs.core.match.map_key_pattern_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.map_pattern_QMARK_; return (
new cljs.core.Var(function(){return cljs.core.match.map_pattern_QMARK_;},new cljs.core.Symbol("cljs.core.match","map-pattern?","cljs.core.match/map-pattern?",(-288268842),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"map-pattern?","map-pattern?",(874682528),null),"cljs/core/match.cljc",(22),(1),(1165),true,(1165),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.match.map_pattern_QMARK_)?cljs.core.match.map_pattern_QMARK_.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.match.guard_pattern; return (
new cljs.core.Var(function(){return cljs.core.match.guard_pattern;},new cljs.core.Symbol("cljs.core.match","guard-pattern","cljs.core.match/guard-pattern",(-1992330486),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"guard-pattern","guard-pattern",(-1030539688),null),"cljs/core/match.cljc",(36),(1),(1165),true,(1165),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.match.guard_pattern)?cljs.core.match.guard_pattern.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.row_keys = (function cljs$core$match$row_keys(row,env){
var p = cljs.core.first.call(null,row);
var only = new cljs.core.Keyword(null,"only","only",(1907811652)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p));
if((cljs.core.not.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"only?","only?",(504823581)).cljs$core$IFn$_invoke$arity$1(env)))) && (cljs.core.seq.call(null,only))){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"only?","only?",(504823581)).cljs$core$IFn$_invoke$arity$1(env),true);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.set.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"m","m",(1632677161)).cljs$core$IFn$_invoke$arity$1(p))),cljs.core.set.call(null,only)], null);
}); return (
new cljs.core.Var(function(){return cljs.core.match.row_keys;},new cljs.core.Symbol("cljs.core.match","row-keys","cljs.core.match/row-keys",(-1522521113),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"row-keys","row-keys",(-491784919),null),"cljs/core/match.cljc",(15),(1),(1167),(1167),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"row","row",(1070392006),null),new cljs.core.Symbol(null,"env","env",(-175281708),null)], null)),null,(cljs.core.truth_(cljs.core.match.row_keys)?cljs.core.match.row_keys.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.get_all_keys = (function cljs$core$match$get_all_keys(rows,env){
return cljs.core.reduce.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY,cljs.core.reduce.call(null,cljs.core.concat,cljs.core.map.call(null,(function (p1__30_SHARP_){
return cljs.core.match.row_keys.call(null,p1__30_SHARP_,env);
}),cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.match.wildcard_pattern_QMARK_,cljs.core.first),rows))));
}); return (
new cljs.core.Var(function(){return cljs.core.match.get_all_keys;},new cljs.core.Symbol("cljs.core.match","get-all-keys","cljs.core.match/get-all-keys",(-458495838),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"get-all-keys","get-all-keys",(600286832),null),"cljs/core/match.cljc",(19),(1),(1176),(1176),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rows","rows",(-1804386089),null),new cljs.core.Symbol(null,"env","env",(-175281708),null)], null)),null,(cljs.core.truth_(cljs.core.match.get_all_keys)?cljs.core.match.get_all_keys.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.wrap_values = (function cljs$core$match$wrap_values(m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__1013){
var vec__1014 = p__1013;
var k = cljs.core.nth.call(null,vec__1014,(0),null);
var v = cljs.core.nth.call(null,vec__1014,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(cljs.core.match.wildcard_pattern_QMARK_.call(null,v))?cljs.core.match.map_key_pattern.call(null,v):v)], null);
}),m));
}); return (
new cljs.core.Var(function(){return cljs.core.match.wrap_values;},new cljs.core.Symbol("cljs.core.match","wrap-values","cljs.core.match/wrap-values",(1538461699),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"wrap-values","wrap-values",(287298261),null),"cljs/core/match.cljc",(18),(1),(1183),(1183),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null)),null,(cljs.core.truth_(cljs.core.match.wrap_values)?cljs.core.match.wrap_values.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.get_ocr_map = (function cljs$core$match$get_ocr_map(p,p__1017){
var map__1020 = p__1017;
var map__1020__$1 = ((((!((map__1020 == null)))?((((map__1020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1020.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1020):map__1020);
var all_keys = cljs.core.get.call(null,map__1020__$1,new cljs.core.Keyword(null,"all-keys","all-keys",(-1041756070)));
var only = cljs.core.get.call(null,map__1020__$1,new cljs.core.Keyword(null,"only","only",(1907811652)));
var wc_map = cljs.core.get.call(null,map__1020__$1,new cljs.core.Keyword(null,"wc-map","wc-map",(-57721646)));
if(cljs.core.truth_(cljs.core.match.map_pattern_QMARK_.call(null,p))){
return cljs.core.merge.call(null,(cljs.core.truth_(only)?cljs.core.zipmap.call(null,all_keys,cljs.core.repeat.call(null,cljs.core.match.literal_pattern.call(null,new cljs.core.Keyword("cljs.core.match","not-found","cljs.core.match/not-found",(85049222))))):null),wc_map,cljs.core.match.wrap_values.call(null,new cljs.core.Keyword(null,"m","m",(1632677161)).cljs$core$IFn$_invoke$arity$1(p)));
} else {
return wc_map;
}
}); return (
new cljs.core.Var(function(){return cljs.core.match.get_ocr_map;},new cljs.core.Symbol("cljs.core.match","get-ocr-map","cljs.core.match/get-ocr-map",(-539076159),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"get-ocr-map","get-ocr-map",(-1723754861),null),"cljs/core/match.cljc",(18),(1),(1190),(1190),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"only","only",(-746624117),null),new cljs.core.Symbol(null,"all-keys","all-keys",(598775457),null),new cljs.core.Symbol(null,"wc-map","wc-map",(1582809881),null)], null)], null)], null)),null,(cljs.core.truth_(cljs.core.match.get_ocr_map)?cljs.core.match.get_ocr_map.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.specialize_map_pattern_row = (function cljs$core$match$specialize_map_pattern_row(row,p__1022){
var map__1025 = p__1022;
var map__1025__$1 = ((((!((map__1025 == null)))?((((map__1025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1025.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1025):map__1025);
var env = map__1025__$1;
var all_keys = cljs.core.get.call(null,map__1025__$1,new cljs.core.Keyword(null,"all-keys","all-keys",(-1041756070)));
var only_QMARK_ = cljs.core.get.call(null,map__1025__$1,new cljs.core.Keyword(null,"only?","only?",(504823581)));
var focr = cljs.core.get.call(null,map__1025__$1,new cljs.core.Keyword(null,"focr","focr",(-820561400)));
var p = cljs.core.first.call(null,row);
var only = cljs.core.seq.call(null,new cljs.core.Keyword(null,"only","only",(1907811652)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p)));
var ocr_map = cljs.core.match.get_ocr_map.call(null,p,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"only","only",(1907811652)),only));
var ps = cljs.core.doall.call(null,cljs.core.map.call(null,ocr_map,all_keys));
var ps__$1 = (cljs.core.truth_(cljs.core.deref.call(null,only_QMARK_))?((only)?(function (){var a = cljs.core.with_meta.call(null,cljs.core.gensym.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"java.util.Map","java.util.Map",(981564201),null)], null));
return cljs.core.cons.call(null,cljs.core.match.guard_pattern.call(null,cljs.core.match.wildcard_pattern.call(null),cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",(-1891498332),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","set","cljs.core/set",(724680876),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","keys","cljs.core/keys",(-927561820),null)),(function (){var x__23399__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.concat.call(null,only)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()))], null))),ps);
})():cljs.core.cons.call(null,cljs.core.match.wildcard_pattern.call(null),ps)):ps);
return cljs.core.reduce.call(null,cljs.core.match.protocols.prepend,cljs.core.match.drop_nth_bind.call(null,row,(0),focr),cljs.core.reverse.call(null,ps__$1));
}); return (
new cljs.core.Var(function(){return cljs.core.match.specialize_map_pattern_row;},new cljs.core.Symbol("cljs.core.match","specialize-map-pattern-row","cljs.core.match/specialize-map-pattern-row",(-1089000174),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"specialize-map-pattern-row","specialize-map-pattern-row",(-192614452),null),"cljs/core/match.cljc",(33),(1),(1200),(1200),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"row","row",(1070392006),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"env","env",(-175281708),null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"all-keys","all-keys",(598775457),null),new cljs.core.Symbol(null,"only?","only?",(2145355108),null),new cljs.core.Symbol(null,"focr","focr",(819970127),null)], null)], null)], null)),null,(cljs.core.truth_(cljs.core.match.specialize_map_pattern_row)?cljs.core.match.specialize_map_pattern_row.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.specialize_map_pattern_matrix = (function cljs$core$match$specialize_map_pattern_matrix(rows,env){
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__31_SHARP_){
return cljs.core.match.specialize_map_pattern_row.call(null,p1__31_SHARP_,env);
}),rows));
}); return (
new cljs.core.Var(function(){return cljs.core.match.specialize_map_pattern_matrix;},new cljs.core.Symbol("cljs.core.match","specialize-map-pattern-matrix","cljs.core.match/specialize-map-pattern-matrix",(2072296324),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"specialize-map-pattern-matrix","specialize-map-pattern-matrix",(823719222),null),"cljs/core/match.cljc",(36),(1),(1220),(1220),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rows","rows",(-1804386089),null),new cljs.core.Symbol(null,"env","env",(-175281708),null)], null)),null,(cljs.core.truth_(cljs.core.match.specialize_map_pattern_matrix)?cljs.core.match.specialize_map_pattern_matrix.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.gen_map_pattern_ocr = (function cljs$core$match$gen_map_pattern_ocr(ocr,k){
return cljs.core.gensym.call(null,[cljs.core.str(cljs.core.name.call(null,ocr)),cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,k).replace(".","_DOT_")),cljs.core.str("__")].join(''));
}); return (
new cljs.core.Var(function(){return cljs.core.match.gen_map_pattern_ocr;},new cljs.core.Symbol("cljs.core.match","gen-map-pattern-ocr","cljs.core.match/gen-map-pattern-ocr",(1171217501),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"gen-map-pattern-ocr","gen-map-pattern-ocr",(-2095015445),null),"cljs/core/match.cljc",(26),(1),(1223),(1223),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ocr","ocr",(622507032),null),new cljs.core.Symbol(null,"k","k",(-505765866),null)], null)),null,(cljs.core.truth_(cljs.core.match.gen_map_pattern_ocr)?cljs.core.match.gen_map_pattern_ocr.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.map_pattern_matrix_ocr_sym = (function cljs$core$match$map_pattern_matrix_ocr_sym(k,env){
var focr = new cljs.core.Keyword(null,"focr","focr",(-820561400)).cljs$core$IFn$_invoke$arity$1(env);
var ocr = cljs.core.get_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ocrs-map","ocrs-map",(76084823)),k], null));
return cljs.core.with_meta.call(null,ocr,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bind-expr","bind-expr",(41520549)),cljs.core.match.val_at_expr.call(null,focr,k,new cljs.core.Keyword("cljs.core.match","not-found","cljs.core.match/not-found",(85049222))),new cljs.core.Keyword(null,"key","key",(-1516042587)),k,new cljs.core.Keyword(null,"occurrence-type","occurrence-type",(-1111165873)),new cljs.core.Keyword(null,"map","map",(1371690461)),new cljs.core.Keyword(null,"map-sym","map-sym",(1467543192)),focr], null));
}); return (
new cljs.core.Var(function(){return cljs.core.match.map_pattern_matrix_ocr_sym;},new cljs.core.Symbol("cljs.core.match","map-pattern-matrix-ocr-sym","cljs.core.match/map-pattern-matrix-ocr-sym",(243395947),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"map-pattern-matrix-ocr-sym","map-pattern-matrix-ocr-sym",(1949051069),null),"cljs/core/match.cljc",(33),(1),(1226),(1226),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",(-505765866),null),new cljs.core.Symbol(null,"env","env",(-175281708),null)], null)),null,(cljs.core.truth_(cljs.core.match.map_pattern_matrix_ocr_sym)?cljs.core.match.map_pattern_matrix_ocr_sym.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.map_pattern_matrix_ocrs = (function cljs$core$match$map_pattern_matrix_ocrs(ocrs,env){
var focr = new cljs.core.Keyword(null,"focr","focr",(-820561400)).cljs$core$IFn$_invoke$arity$1(env);
var mocrs = cljs.core.map.call(null,((function (focr){
return (function (p1__32_SHARP_){
return cljs.core.match.map_pattern_matrix_ocr_sym.call(null,p1__32_SHARP_,env);
});})(focr))
,new cljs.core.Keyword(null,"all-keys","all-keys",(-1041756070)).cljs$core$IFn$_invoke$arity$1(env));
var mocrs__$1 = cljs.core.vec.call(null,(cljs.core.truth_(cljs.core.deref.call(null,new cljs.core.Keyword(null,"only?","only?",(504823581)).cljs$core$IFn$_invoke$arity$1(env)))?cljs.core.cons.call(null,focr,mocrs):mocrs));
return cljs.core.into.call(null,mocrs__$1,cljs.core.match.protocols.drop_nth.call(null,ocrs,(0)));
}); return (
new cljs.core.Var(function(){return cljs.core.match.map_pattern_matrix_ocrs;},new cljs.core.Symbol("cljs.core.match","map-pattern-matrix-ocrs","cljs.core.match/map-pattern-matrix-ocrs",(-422100893),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"map-pattern-matrix-ocrs","map-pattern-matrix-ocrs",(-1454734539),null),"cljs/core/match.cljc",(30),(1),(1235),(1235),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ocrs","ocrs",(-195684886),null),new cljs.core.Symbol(null,"env","env",(-175281708),null)], null)),null,(cljs.core.truth_(cljs.core.match.map_pattern_matrix_ocrs)?cljs.core.match.map_pattern_matrix_ocrs.cljs$lang$test:null)])));})()
;

/**
* @constructor
 * @implements {cljs.core.match.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.match.protocols.IPatternCompile}
 * @implements {cljs.core.match.protocols.ISpecializeMatrix}
*/
cljs.core.match.MapPattern = (function (m,_meta){
this.m = m;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.match.MapPattern.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str(self__.m),cljs.core.str(" :only "),cljs.core.str((function (){var or__20817__auto__ = new cljs.core.Keyword(null,"only","only",(1907811652)).cljs$core$IFn$_invoke$arity$1(self__._meta);
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})())].join('');
});

cljs.core.match.MapPattern.prototype.equals = (function (other){
var self__ = this;
var _ = this;
return ((other instanceof cljs.core.match.MapPattern)) && (cljs.core._EQ_.call(null,self__.m,new cljs.core.Keyword(null,"m","m",(1632677161)).cljs$core$IFn$_invoke$arity$1(other)));
});

cljs.core.match.MapPattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
});

cljs.core.match.MapPattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new cljs.core.match.MapPattern(self__.m,new_meta));
});

cljs.core.match.MapPattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
});

cljs.core.match.MapPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var G__1027 = (((k instanceof cljs.core.Keyword))?k.fqn:null);
switch (G__1027) {
case "m":
return self__.m;

break;
case "cljs.core.match/tag":
return new cljs.core.Keyword("cljs.core.match","map","cljs.core.match/map",(-408120017));

break;
default:
return not_found;

}
});

cljs.core.match.MapPattern.prototype.cljs$core$match$protocols$IPatternCompile$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.match.MapPattern.prototype.cljs$core$match$protocols$IPatternCompile$to_source_STAR_$arity$2 = (function (this$,ocr){
var self__ = this;
var this$__$1 = this;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","satisfies?","cljs.core/satisfies?",(-1074798682),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ILookup","cljs.core/ILookup",(-150575073),null)),(function (){var x__23399__auto__ = ocr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
});

cljs.core.match.MapPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.match.MapPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$specialize_matrix$arity$2 = (function (this$,matrix){
var self__ = this;
var this$__$1 = this;
var rows = cljs.core.match.rows.call(null,matrix);
var ocrs = cljs.core.match.occurrences.call(null,matrix);
var focr = cljs.core.first.call(null,ocrs);
var env = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"focr","focr",(-820561400)),focr,new cljs.core.Keyword(null,"only?","only?",(504823581)),cljs.core.atom.call(null,false)], null);
var all_keys = cljs.core.match.get_all_keys.call(null,rows,env);
var env_SINGLEQUOTE_ = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"all-keys","all-keys",(-1041756070)),all_keys,new cljs.core.Keyword(null,"wc-map","wc-map",(-57721646)),cljs.core.zipmap.call(null,all_keys,cljs.core.repeatedly.call(null,cljs.core.match.wildcard_pattern)),new cljs.core.Keyword(null,"ocrs-map","ocrs-map",(76084823)),cljs.core.zipmap.call(null,all_keys,cljs.core.map.call(null,((function (rows,ocrs,focr,env,all_keys,this$__$1){
return (function (p1__33_SHARP_){
return cljs.core.match.gen_map_pattern_ocr.call(null,focr,p1__33_SHARP_);
});})(rows,ocrs,focr,env,all_keys,this$__$1))
,all_keys)));
var nrows = cljs.core.match.specialize_map_pattern_matrix.call(null,rows,env_SINGLEQUOTE_);
var nocrs = cljs.core.match.map_pattern_matrix_ocrs.call(null,ocrs,env_SINGLEQUOTE_);
return cljs.core.match.pattern_matrix.call(null,nrows,nocrs);
});

cljs.core.match.MapPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"_meta","_meta",(-1716892533),null)], null);
});

cljs.core.match.MapPattern.cljs$lang$type = true;

cljs.core.match.MapPattern.cljs$lang$ctorStr = "cljs.core.match/MapPattern";

cljs.core.match.MapPattern.cljs$lang$ctorPrWriter = (function (this__22602__auto__,writer__22603__auto__,opt__22604__auto__){
return cljs.core._write.call(null,writer__22603__auto__,"cljs.core.match/MapPattern");
});

(function (){
cljs.core.match.__GT_MapPattern = (function cljs$core$match$__GT_MapPattern(m,_meta){
return (new cljs.core.match.MapPattern(m,_meta));
}); return (
new cljs.core.Var(function(){return cljs.core.match.__GT_MapPattern;},new cljs.core.Symbol("cljs.core.match","->MapPattern","cljs.core.match/->MapPattern",(312940507),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol("cljs.core.match","Object","cljs.core.match/Object",(1160957744),null),null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","ILookup","cljs.core/ILookup",(-150575073),null),null,new cljs.core.Symbol("cljs.core.match.protocols","IPatternCompile","cljs.core.match.protocols/IPatternCompile",(1601136321),null),null,new cljs.core.Symbol("cljs.core.match.protocols","ISpecializeMatrix","cljs.core.match.protocols/ISpecializeMatrix",(1271926164),null),null], null), null),new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"->MapPattern","->MapPattern",(734775981),null),"cljs/core/match.cljc",(20),(1),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(1245),(1245),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"_meta","_meta",(-1716892533),null)], null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","ILookup","cljs.core/ILookup",(-150575073),null),null], null), null),null,(cljs.core.truth_(cljs.core.match.__GT_MapPattern)?cljs.core.match.__GT_MapPattern.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.match.map_pattern = (function cljs$core$match$map_pattern(var_args){
var args1029 = [];
var len__23656__auto___1032 = arguments.length;
var i__23657__auto___1033 = (0);
while(true){
if((i__23657__auto___1033 < len__23656__auto___1032)){
args1029.push((arguments[i__23657__auto___1033]));

var G__1034 = (i__23657__auto___1033 + (1));
i__23657__auto___1033 = G__1034;
continue;
} else {
}
break;
}

var G__1031 = args1029.length;
switch (G__1031) {
case (0):
return cljs.core.match.map_pattern.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return cljs.core.match.map_pattern.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1029.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.core.match.map_pattern;},new cljs.core.Symbol("cljs.core.match","map-pattern","cljs.core.match/map-pattern",(488300945),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"map-pattern","map-pattern",(-679042269),null),"cljs/core/match.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(1292),(1292),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null)),null,(cljs.core.truth_(cljs.core.match.map_pattern)?cljs.core.match.map_pattern.cljs$lang$test:null)])));})()
;

cljs.core.match.map_pattern.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new cljs.core.match.MapPattern(cljs.core.PersistentArrayMap.EMPTY,null));
});

cljs.core.match.map_pattern.cljs$core$IFn$_invoke$arity$1 = (function (m){
if(cljs.core.map_QMARK_.call(null,m)){
} else {
throw (new Error("Assert failed: (map? m)"));
}

return (new cljs.core.match.MapPattern(m,null));
});

cljs.core.match.map_pattern.cljs$lang$maxFixedArity = (1);

new cljs.core.Var(function(){return cljs.core.match.map_pattern;},new cljs.core.Symbol("cljs.core.match","map-pattern","cljs.core.match/map-pattern",(488300945),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"map-pattern","map-pattern",(-679042269),null),"cljs/core/match.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(1292),(1292),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null)),null,(cljs.core.truth_(cljs.core.match.map_pattern)?cljs.core.match.map_pattern.cljs$lang$test:null)]));
(function (){
cljs.core.match.map_pattern_QMARK_ = (function cljs$core$match$map_pattern_QMARK_(x){
return (x instanceof cljs.core.match.MapPattern);
}); return (
new cljs.core.Var(function(){return cljs.core.match.map_pattern_QMARK_;},new cljs.core.Symbol("cljs.core.match","map-pattern?","cljs.core.match/map-pattern?",(-288268842),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"map-pattern?","map-pattern?",(874682528),null),"cljs/core/match.cljc",(19),(1),(1297),(1297),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(cljs.core.match.map_pattern_QMARK_)?cljs.core.match.map_pattern_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.vector_pattern_QMARK_; return (
new cljs.core.Var(function(){return cljs.core.match.vector_pattern_QMARK_;},new cljs.core.Symbol("cljs.core.match","vector-pattern?","cljs.core.match/vector-pattern?",(-2038061165),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"vector-pattern?","vector-pattern?",(-918951347),null),"cljs/core/match.cljc",(25),(1),(1310),true,(1310),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.match.vector_pattern_QMARK_)?cljs.core.match.vector_pattern_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.calc_rest_QMARK__and_min_size = (function cljs$core$match$calc_rest_QMARK__and_min_size(rows,env){
return cljs.core.reduce.call(null,(function (p__1044,p__1045){
var vec__1046 = p__1044;
var rest_QMARK_ = cljs.core.nth.call(null,vec__1046,(0),null);
var min_size = cljs.core.nth.call(null,vec__1046,(1),null);
var vec__1049 = p__1045;
var seq__1050 = cljs.core.seq.call(null,vec__1049);
var first__1051 = cljs.core.first.call(null,seq__1050);
var seq__1050__$1 = cljs.core.next.call(null,seq__1050);
var p = first__1051;
var ps = seq__1050__$1;
if(cljs.core.truth_(cljs.core.match.vector_pattern_QMARK_.call(null,p))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__20817__auto__ = rest_QMARK_;
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return new cljs.core.Keyword(null,"rest?","rest?",(345335951)).cljs$core$IFn$_invoke$arity$1(p);
}
})(),(function (){var x__21649__auto__ = min_size;
var y__21650__auto__ = new cljs.core.Keyword(null,"size","size",(1098693007)).cljs$core$IFn$_invoke$arity$1(p);
return ((x__21649__auto__ < y__21650__auto__) ? x__21649__auto__ : y__21650__auto__);
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rest_QMARK_,min_size], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.Keyword(null,"size","size",(1098693007)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fp","fp",(-469175650)).cljs$core$IFn$_invoke$arity$1(env))], null),rows);
}); return (
new cljs.core.Var(function(){return cljs.core.match.calc_rest_QMARK__and_min_size;},new cljs.core.Symbol("cljs.core.match","calc-rest?-and-min-size","cljs.core.match/calc-rest?-and-min-size",(-1151807915),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"calc-rest?-and-min-size","calc-rest?-and-min-size",(1640762631),null),"cljs/core/match.cljc",(30),(1),(1312),(1312),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rows","rows",(-1804386089),null),new cljs.core.Symbol(null,"env","env",(-175281708),null)], null)),null,(cljs.core.truth_(cljs.core.match.calc_rest_QMARK__and_min_size)?cljs.core.match.calc_rest_QMARK__and_min_size.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.specialize_vector_pattern_row = (function cljs$core$match$specialize_vector_pattern_row(row,p__1052){
var map__1055 = p__1052;
var map__1055__$1 = ((((!((map__1055 == null)))?((((map__1055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1055.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1055):map__1055);
var focr = cljs.core.get.call(null,map__1055__$1,new cljs.core.Keyword(null,"focr","focr",(-820561400)));
var min_size = cljs.core.get.call(null,map__1055__$1,new cljs.core.Keyword(null,"min-size","min-size",(1058361905)));
var p = cljs.core.first.call(null,row);
var ps = (cljs.core.truth_(cljs.core.match.vector_pattern_QMARK_.call(null,p))?cljs.core.match.protocols.split.call(null,p,min_size):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.match.wildcard_pattern.call(null),cljs.core.match.wildcard_pattern.call(null)], null)
);
return cljs.core.reduce.call(null,cljs.core.match.protocols.prepend,cljs.core.match.drop_nth_bind.call(null,row,(0),focr),cljs.core.reverse.call(null,ps));
}); return (
new cljs.core.Var(function(){return cljs.core.match.specialize_vector_pattern_row;},new cljs.core.Symbol("cljs.core.match","specialize-vector-pattern-row","cljs.core.match/specialize-vector-pattern-row",(2129578560),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"specialize-vector-pattern-row","specialize-vector-pattern-row",(-1537667306),null),"cljs/core/match.cljc",(36),(1),(1321),(1321),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"row","row",(1070392006),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"focr","focr",(819970127),null),new cljs.core.Symbol(null,"min-size","min-size",(-1596073864),null)], null)], null)], null)),null,(cljs.core.truth_(cljs.core.match.specialize_vector_pattern_row)?cljs.core.match.specialize_vector_pattern_row.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.specialize_vector_pattern_row_non_rest = (function cljs$core$match$specialize_vector_pattern_row_non_rest(row,p__1057){
var map__1060 = p__1057;
var map__1060__$1 = ((((!((map__1060 == null)))?((((map__1060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1060.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1060):map__1060);
var focr = cljs.core.get.call(null,map__1060__$1,new cljs.core.Keyword(null,"focr","focr",(-820561400)));
var min_size = cljs.core.get.call(null,map__1060__$1,new cljs.core.Keyword(null,"min-size","min-size",(1058361905)));
var p = cljs.core.first.call(null,row);
var ps = (cljs.core.truth_(cljs.core.match.vector_pattern_QMARK_.call(null,p))?cljs.core.reverse.call(null,new cljs.core.Keyword(null,"v","v",(21465059)).cljs$core$IFn$_invoke$arity$1(p)):cljs.core.repeatedly.call(null,min_size,cljs.core.match.wildcard_pattern));
return cljs.core.reduce.call(null,cljs.core.match.protocols.prepend,cljs.core.match.drop_nth_bind.call(null,row,(0),focr),ps);
}); return (
new cljs.core.Var(function(){return cljs.core.match.specialize_vector_pattern_row_non_rest;},new cljs.core.Symbol("cljs.core.match","specialize-vector-pattern-row-non-rest","cljs.core.match/specialize-vector-pattern-row-non-rest",(1438983803),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"specialize-vector-pattern-row-non-rest","specialize-vector-pattern-row-non-rest",(460415433),null),"cljs/core/match.cljc",(45),(1),(1329),(1329),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"row","row",(1070392006),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"focr","focr",(819970127),null),new cljs.core.Symbol(null,"min-size","min-size",(-1596073864),null)], null)], null)], null)),null,(cljs.core.truth_(cljs.core.match.specialize_vector_pattern_row_non_rest)?cljs.core.match.specialize_vector_pattern_row_non_rest.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.specialize_vector_pattern_matrix = (function cljs$core$match$specialize_vector_pattern_matrix(rows,env){
if(cljs.core.truth_(new cljs.core.Keyword(null,"rest?","rest?",(345335951)).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__34_SHARP_){
return cljs.core.match.specialize_vector_pattern_row.call(null,p1__34_SHARP_,env);
}),rows));
} else {
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__35_SHARP_){
return cljs.core.match.specialize_vector_pattern_row_non_rest.call(null,p1__35_SHARP_,env);
}),rows));
}
}); return (
new cljs.core.Var(function(){return cljs.core.match.specialize_vector_pattern_matrix;},new cljs.core.Symbol("cljs.core.match","specialize-vector-pattern-matrix","cljs.core.match/specialize-vector-pattern-matrix",(-293662977),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"specialize-vector-pattern-matrix","specialize-vector-pattern-matrix",(902514733),null),"cljs/core/match.cljc",(39),(1),(1337),(1337),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rows","rows",(-1804386089),null),new cljs.core.Symbol(null,"env","env",(-175281708),null)], null)),null,(cljs.core.truth_(cljs.core.match.specialize_vector_pattern_matrix)?cljs.core.match.specialize_vector_pattern_matrix.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.vector_pattern_ocr_sym = (function cljs$core$match$vector_pattern_ocr_sym(p__1062,i){
var map__1065 = p__1062;
var map__1065__$1 = ((((!((map__1065 == null)))?((((map__1065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1065.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1065):map__1065);
var tag = cljs.core.get.call(null,map__1065__$1,new cljs.core.Keyword(null,"tag","tag",(-1290361223)));
var focr = cljs.core.get.call(null,map__1065__$1,new cljs.core.Keyword(null,"focr","focr",(-820561400)));
var pat = cljs.core.get.call(null,map__1065__$1,new cljs.core.Keyword(null,"pat","pat",(-1417570164)));
var ocr = cljs.core.gensym.call(null,[cljs.core.str(cljs.core.name.call(null,focr)),cljs.core.str("_"),cljs.core.str(i),cljs.core.str("__")].join(''));
return cljs.core.with_meta.call(null,ocr,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bind-expr","bind-expr",(41520549)),(function (){var temp__19520__auto__ = new cljs.core.Keyword(null,"offset","offset",(296498311)).cljs$core$IFn$_invoke$arity$1(pat);
if(cljs.core.truth_(temp__19520__auto__)){
var offset = temp__19520__auto__;
return cljs.core.match.nth_offset_inline.call(null,tag,cljs.core.match.with_tag.call(null,tag,focr),i,offset);
} else {
return cljs.core.match.nth_inline.call(null,tag,cljs.core.match.with_tag.call(null,tag,focr),i);
}
})(),new cljs.core.Keyword(null,"index","index",(-1531685915)),i,new cljs.core.Keyword(null,"occurrence-type","occurrence-type",(-1111165873)),tag,new cljs.core.Keyword(null,"vec-sym","vec-sym",(-1671818864)),focr], null));
}); return (
new cljs.core.Var(function(){return cljs.core.match.vector_pattern_ocr_sym;},new cljs.core.Symbol("cljs.core.match","vector-pattern-ocr-sym","cljs.core.match/vector-pattern-ocr-sym",(431121967),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"vector-pattern-ocr-sym","vector-pattern-ocr-sym",(589702045),null),"cljs/core/match.cljc",(29),(1),(1342),(1342),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pat","pat",(222961363),null),new cljs.core.Symbol(null,"focr","focr",(819970127),null),new cljs.core.Symbol(null,"tag","tag",(350170304),null)], null)], null),new cljs.core.Symbol(null,"i","i",(253690212),null)], null)),null,(cljs.core.truth_(cljs.core.match.vector_pattern_ocr_sym)?cljs.core.match.vector_pattern_ocr_sym.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.vector_pattern_matrix_ocrs = (function cljs$core$match$vector_pattern_matrix_ocrs(ocrs,p__1067){
var map__1070 = p__1067;
var map__1070__$1 = ((((!((map__1070 == null)))?((((map__1070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1070.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1070):map__1070);
var env = map__1070__$1;
var tag = cljs.core.get.call(null,map__1070__$1,new cljs.core.Keyword(null,"tag","tag",(-1290361223)));
var focr = cljs.core.get.call(null,map__1070__$1,new cljs.core.Keyword(null,"focr","focr",(-820561400)));
var rest_QMARK_ = cljs.core.get.call(null,map__1070__$1,new cljs.core.Keyword(null,"rest?","rest?",(345335951)));
var min_size = cljs.core.get.call(null,map__1070__$1,new cljs.core.Keyword(null,"min-size","min-size",(1058361905)));
if(cljs.core.truth_(rest_QMARK_)){
var ocr_meta = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"occurrence-type","occurrence-type",(-1111165873)),tag,new cljs.core.Keyword(null,"vec-sym","vec-sym",(-1671818864)),focr], null);
var vl_ocr = cljs.core.gensym.call(null,[cljs.core.str(cljs.core.name.call(null,focr)),cljs.core.str("_left__")].join(''));
var vl_ocr__$1 = cljs.core.with_meta.call(null,vl_ocr,cljs.core.assoc.call(null,ocr_meta,new cljs.core.Keyword(null,"bind-expr","bind-expr",(41520549)),cljs.core.match.subvec_inline.call(null,tag,cljs.core.match.with_tag.call(null,tag,focr),(0),min_size)));
var vr_ocr = cljs.core.gensym.call(null,[cljs.core.str(cljs.core.name.call(null,focr)),cljs.core.str("_right__")].join(''));
var vr_ocr__$1 = cljs.core.with_meta.call(null,vr_ocr,cljs.core.assoc.call(null,ocr_meta,new cljs.core.Keyword(null,"bind-expr","bind-expr",(41520549)),cljs.core.match.subvec_inline.call(null,tag,cljs.core.match.with_tag.call(null,tag,focr),min_size)));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vl_ocr__$1,vr_ocr__$1], null),cljs.core.match.protocols.drop_nth.call(null,ocrs,(0)));
} else {
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.match.vector_pattern_ocr_sym,env),cljs.core.range.call(null,min_size)),cljs.core.match.protocols.drop_nth.call(null,ocrs,(0)));
}
}); return (
new cljs.core.Var(function(){return cljs.core.match.vector_pattern_matrix_ocrs;},new cljs.core.Symbol("cljs.core.match","vector-pattern-matrix-ocrs","cljs.core.match/vector-pattern-matrix-ocrs",(-1284871800),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"vector-pattern-matrix-ocrs","vector-pattern-matrix-ocrs",(2111285982),null),"cljs/core/match.cljc",(33),(1),(1354),(1354),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ocrs","ocrs",(-195684886),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"env","env",(-175281708),null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"focr","focr",(819970127),null),new cljs.core.Symbol(null,"tag","tag",(350170304),null),new cljs.core.Symbol(null,"min-size","min-size",(-1596073864),null),new cljs.core.Symbol(null,"rest?","rest?",(1985867478),null)], null)], null)], null)),null,(cljs.core.truth_(cljs.core.match.vector_pattern_matrix_ocrs)?cljs.core.match.vector_pattern_matrix_ocrs.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.array_tag = (function cljs$core$match$array_tag(x){
return cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"longs","longs",(-1017696020),null),new cljs.core.Keyword("cljs.core.match","longs","cljs.core.match/longs",(-652539949)),new cljs.core.Symbol(null,"objects","objects",(-554722035),null),new cljs.core.Keyword("cljs.core.match","objects","cljs.core.match/objects",(-1548561908)),new cljs.core.Symbol(null,"doubles","doubles",(-1517872169),null),new cljs.core.Keyword("cljs.core.match","doubles","cljs.core.match/doubles",(-56405410)),new cljs.core.Symbol(null,"ints","ints",(-1761239845),null),new cljs.core.Keyword("cljs.core.match","ints","cljs.core.match/ints",(-406235954)),new cljs.core.Symbol(null,"shorts","shorts",(107738238),null),new cljs.core.Keyword("cljs.core.match","shorts","cljs.core.match/shorts",(-552653627)),new cljs.core.Symbol(null,"bytes","bytes",(-1478569089),null),new cljs.core.Keyword("cljs.core.match","array","cljs.core.match/array",(1503073376))], null),new cljs.core.Keyword(null,"tag","tag",(-1290361223)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,x)));
}); return (
new cljs.core.Var(function(){return cljs.core.match.array_tag;},new cljs.core.Symbol("cljs.core.match","array-tag","cljs.core.match/array-tag",(1748064024),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"array-tag","array-tag",(-1836248874),null),"cljs/core/match.cljc",(16),(1),(1372),(1372),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(cljs.core.match.array_tag)?cljs.core.match.array_tag.cljs$lang$test:null)])));})()
;

/**
* @constructor
 * @implements {cljs.core.match.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.match.protocols.IPatternCompile}
 * @implements {cljs.core.match.protocols.IContainsRestPattern}
 * @implements {cljs.core.match.protocols.IVectorPattern}
 * @implements {cljs.core.match.protocols.ISpecializeMatrix}
*/
cljs.core.match.VectorPattern = (function (v,t,size,offset,rest_QMARK_,_meta){
this.v = v;
this.t = t;
this.size = size;
this.offset = offset;
this.rest_QMARK_ = rest_QMARK_;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.match.VectorPattern.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str(self__.v),cljs.core.str(" "),cljs.core.str(self__.t)].join('');
});

cljs.core.match.VectorPattern.prototype.equals = (function (other){
var self__ = this;
var _ = this;
return ((other instanceof cljs.core.match.VectorPattern)) && (cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.v,self__.t,self__.size,self__.offset,self__.rest_QMARK_], null),cljs.core.map.call(null,((function (_){
return (function (p1__36_SHARP_){
return p1__36_SHARP_.call(null,other);
});})(_))
,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",(21465059)),new cljs.core.Keyword(null,"t","t",(-1397832519)),new cljs.core.Keyword(null,"size","size",(1098693007)),new cljs.core.Keyword(null,"offset","offset",(296498311)),new cljs.core.Keyword(null,"rest?","rest?",(345335951))], null))));
});

cljs.core.match.VectorPattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
});

cljs.core.match.VectorPattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new cljs.core.match.VectorPattern(self__.v,self__.t,self__.size,self__.offset,self__.rest_QMARK_,new_meta));
});

cljs.core.match.VectorPattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
});

cljs.core.match.VectorPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var G__1075 = (((k instanceof cljs.core.Keyword))?k.fqn:null);
switch (G__1075) {
case "v":
return self__.v;

break;
case "t":
return self__.t;

break;
case "size":
return self__.size;

break;
case "offset":
return self__.offset;

break;
case "rest?":
return self__.rest_QMARK_;

break;
case "cljs.core.match/tag":
return new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296));

break;
default:
return not_found;

}
});

cljs.core.match.VectorPattern.prototype.cljs$core$match$protocols$IPatternCompile$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.match.VectorPattern.prototype.cljs$core$match$protocols$IPatternCompile$to_source_STAR_$arity$2 = (function (this$,ocr){
var self__ = this;
var this$__$1 = this;
var t__$1 = (function (){var or__20817__auto__ = cljs.core.match.array_tag.call(null,ocr);
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return self__.t;
}
})();
if(cljs.core.truth_(cljs.core.match.check_size_QMARK_.call(null,t__$1))){
if(cljs.core.truth_(self__.rest_QMARK_)){
return cljs.core.match.test_with_min_size_inline.call(null,t__$1,ocr,self__.size);
} else {
return cljs.core.match.test_with_size_inline.call(null,t__$1,ocr,self__.size);
}
} else {
return cljs.core.match.test_inline.call(null,t__$1,ocr);
}
});

cljs.core.match.VectorPattern.prototype.cljs$core$match$protocols$IContainsRestPattern$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.match.VectorPattern.prototype.cljs$core$match$protocols$IContainsRestPattern$contains_rest_pattern_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.rest_QMARK_;
});

cljs.core.match.VectorPattern.prototype.cljs$core$match$protocols$IVectorPattern$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.match.VectorPattern.prototype.cljs$core$match$protocols$IVectorPattern$split$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
var lv = cljs.core.subvec.call(null,self__.v,(0),n);
var rv = cljs.core.subvec.call(null,self__.v,n);
var pl = (new cljs.core.match.VectorPattern(lv,self__.t,n,self__.offset,false,self__._meta));
var pr = (cljs.core.truth_(cljs.core.match.rest_pattern_QMARK_.call(null,cljs.core.first.call(null,rv)))?new cljs.core.Keyword(null,"p","p",(151049309)).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,rv)):(function (){var rest_QMARK___$1 = cljs.core.some.call(null,cljs.core.match.rest_pattern_QMARK_,rv);
var rvc = cljs.core.count.call(null,rv);
var size__$1 = (cljs.core.truth_(rest_QMARK___$1)?(rvc - (1)):rvc);
return (new cljs.core.match.VectorPattern(rv,self__.t,size__$1,n,rest_QMARK___$1,self__._meta));
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pl,pr], null);
});

cljs.core.match.VectorPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.match.VectorPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$specialize_matrix$arity$2 = (function (this$,matrix){
var self__ = this;
var this$__$1 = this;
var rows = cljs.core.match.rows.call(null,matrix);
var ocrs = cljs.core.match.occurrences.call(null,matrix);
var focr = cljs.core.first.call(null,ocrs);
var env = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"focr","focr",(-820561400)),focr,new cljs.core.Keyword(null,"pat","pat",(-1417570164)),this$__$1,new cljs.core.Keyword(null,"fp","fp",(-469175650)),cljs.core.ffirst.call(null,rows)], null);
var vec__1072 = cljs.core.match.calc_rest_QMARK__and_min_size.call(null,rows,env);
var rest_QMARK___$1 = cljs.core.nth.call(null,vec__1072,(0),null);
var min_size = cljs.core.nth.call(null,vec__1072,(1),null);
var env_SINGLEQUOTE_ = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"rest?","rest?",(345335951)),rest_QMARK___$1,new cljs.core.Keyword(null,"min-size","min-size",(1058361905)),min_size,new cljs.core.Keyword(null,"tag","tag",(-1290361223)),(function (){var or__20817__auto__ = cljs.core.match.array_tag.call(null,focr);
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return new cljs.core.Keyword(null,"t","t",(-1397832519)).cljs$core$IFn$_invoke$arity$1(this$__$1);
}
})());
var nrows = cljs.core.match.specialize_vector_pattern_matrix.call(null,rows,env_SINGLEQUOTE_);
var nocrs = cljs.core.match.vector_pattern_matrix_ocrs.call(null,ocrs,env_SINGLEQUOTE_);
return cljs.core.match.pattern_matrix.call(null,nrows,nocrs);
});

cljs.core.match.VectorPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"t","t",(242699008),null),new cljs.core.Symbol(null,"size","size",(-1555742762),null),new cljs.core.Symbol(null,"offset","offset",(1937029838),null),new cljs.core.Symbol(null,"rest?","rest?",(1985867478),null),new cljs.core.Symbol(null,"_meta","_meta",(-1716892533),null)], null);
});

cljs.core.match.VectorPattern.cljs$lang$type = true;

cljs.core.match.VectorPattern.cljs$lang$ctorStr = "cljs.core.match/VectorPattern";

cljs.core.match.VectorPattern.cljs$lang$ctorPrWriter = (function (this__22602__auto__,writer__22603__auto__,opt__22604__auto__){
return cljs.core._write.call(null,writer__22603__auto__,"cljs.core.match/VectorPattern");
});

(function (){
cljs.core.match.__GT_VectorPattern = (function cljs$core$match$__GT_VectorPattern(v,t,size,offset,rest_QMARK_,_meta){
return (new cljs.core.match.VectorPattern(v,t,size,offset,rest_QMARK_,_meta));
}); return (
new cljs.core.Var(function(){return cljs.core.match.__GT_VectorPattern;},new cljs.core.Symbol("cljs.core.match","->VectorPattern","cljs.core.match/->VectorPattern",(-1322426378),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Symbol("cljs.core.match","Object","cljs.core.match/Object",(1160957744),null),null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","ILookup","cljs.core/ILookup",(-150575073),null),null,new cljs.core.Symbol("cljs.core.match.protocols","IPatternCompile","cljs.core.match.protocols/IPatternCompile",(1601136321),null),null,new cljs.core.Symbol("cljs.core.match.protocols","IContainsRestPattern","cljs.core.match.protocols/IContainsRestPattern",(-698882889),null),null,new cljs.core.Symbol("cljs.core.match.protocols","IVectorPattern","cljs.core.match.protocols/IVectorPattern",(-592933530),null),null,new cljs.core.Symbol("cljs.core.match.protocols","ISpecializeMatrix","cljs.core.match.protocols/ISpecializeMatrix",(1271926164),null),null], null), null),new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"->VectorPattern","->VectorPattern",(-128345792),null),"cljs/core/match.cljc",(23),(1),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(1386),(1386),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"t","t",(242699008),null),new cljs.core.Symbol(null,"size","size",(-1555742762),null),new cljs.core.Symbol(null,"offset","offset",(1937029838),null),new cljs.core.Symbol(null,"rest?","rest?",(1985867478),null),new cljs.core.Symbol(null,"_meta","_meta",(-1716892533),null)], null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","ILookup","cljs.core/ILookup",(-150575073),null),null], null), null),null,(cljs.core.truth_(cljs.core.match.__GT_VectorPattern)?cljs.core.match.__GT_VectorPattern.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.match.vector_pattern = (function cljs$core$match$vector_pattern(var_args){
var args1077 = [];
var len__23656__auto___1080 = arguments.length;
var i__23657__auto___1081 = (0);
while(true){
if((i__23657__auto___1081 < len__23656__auto___1080)){
args1077.push((arguments[i__23657__auto___1081]));

var G__1082 = (i__23657__auto___1081 + (1));
i__23657__auto___1081 = G__1082;
continue;
} else {
}
break;
}

var G__1079 = args1077.length;
switch (G__1079) {
case (0):
return cljs.core.match.vector_pattern.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return cljs.core.match.vector_pattern.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.core.match.vector_pattern.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.match.vector_pattern.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return cljs.core.match.vector_pattern.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1077.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.core.match.vector_pattern;},new cljs.core.Symbol("cljs.core.match","vector-pattern","cljs.core.match/vector-pattern",(1933888244),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"vector-pattern","vector-pattern",(-1158473798),null),"cljs/core/match.cljc",(21),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"t","t",(242699008),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"t","t",(242699008),null),new cljs.core.Symbol(null,"offset","offset",(1937029838),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"t","t",(242699008),null),new cljs.core.Symbol(null,"offset","offset",(1937029838),null),new cljs.core.Symbol(null,"rest?","rest?",(1985867478),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"t","t",(242699008),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"t","t",(242699008),null),new cljs.core.Symbol(null,"offset","offset",(1937029838),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"t","t",(242699008),null),new cljs.core.Symbol(null,"offset","offset",(1937029838),null),new cljs.core.Symbol(null,"rest?","rest?",(1985867478),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null,null,null)], null),(1),(1455),(1455),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"t","t",(242699008),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"t","t",(242699008),null),new cljs.core.Symbol(null,"offset","offset",(1937029838),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"t","t",(242699008),null),new cljs.core.Symbol(null,"offset","offset",(1937029838),null),new cljs.core.Symbol(null,"rest?","rest?",(1985867478),null)], null)),null,(cljs.core.truth_(cljs.core.match.vector_pattern)?cljs.core.match.vector_pattern.cljs$lang$test:null)])));})()
;

cljs.core.match.vector_pattern.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.match.vector_pattern.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296)),null,null);
});

cljs.core.match.vector_pattern.cljs$core$IFn$_invoke$arity$1 = (function (v){
return cljs.core.match.vector_pattern.call(null,v,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296)),null,null);
});

cljs.core.match.vector_pattern.cljs$core$IFn$_invoke$arity$2 = (function (v,t){
return cljs.core.match.vector_pattern.call(null,v,t,null,null);
});

cljs.core.match.vector_pattern.cljs$core$IFn$_invoke$arity$3 = (function (v,t,offset){
return cljs.core.match.vector_pattern.call(null,v,t,offset,null);
});

cljs.core.match.vector_pattern.cljs$core$IFn$_invoke$arity$4 = (function (v,t,offset,rest_QMARK_){
if(cljs.core.vector_QMARK_.call(null,v)){
} else {
throw (new Error("Assert failed: (vector? v)"));
}

var c = cljs.core.count.call(null,v);
var size = (cljs.core.truth_(rest_QMARK_)?(c - (1)):c);
return (new cljs.core.match.VectorPattern(v,t,size,offset,rest_QMARK_,null));
});

cljs.core.match.vector_pattern.cljs$lang$maxFixedArity = (4);

new cljs.core.Var(function(){return cljs.core.match.vector_pattern;},new cljs.core.Symbol("cljs.core.match","vector-pattern","cljs.core.match/vector-pattern",(1933888244),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"vector-pattern","vector-pattern",(-1158473798),null),"cljs/core/match.cljc",(21),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"t","t",(242699008),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"t","t",(242699008),null),new cljs.core.Symbol(null,"offset","offset",(1937029838),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"t","t",(242699008),null),new cljs.core.Symbol(null,"offset","offset",(1937029838),null),new cljs.core.Symbol(null,"rest?","rest?",(1985867478),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"t","t",(242699008),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"t","t",(242699008),null),new cljs.core.Symbol(null,"offset","offset",(1937029838),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"t","t",(242699008),null),new cljs.core.Symbol(null,"offset","offset",(1937029838),null),new cljs.core.Symbol(null,"rest?","rest?",(1985867478),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null,null,null,null)], null),(1),(1455),(1455),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"t","t",(242699008),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"t","t",(242699008),null),new cljs.core.Symbol(null,"offset","offset",(1937029838),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"t","t",(242699008),null),new cljs.core.Symbol(null,"offset","offset",(1937029838),null),new cljs.core.Symbol(null,"rest?","rest?",(1985867478),null)], null)),null,(cljs.core.truth_(cljs.core.match.vector_pattern)?cljs.core.match.vector_pattern.cljs$lang$test:null)]));
(function (){
cljs.core.match.vector_pattern_QMARK_ = (function cljs$core$match$vector_pattern_QMARK_(x){
return (x instanceof cljs.core.match.VectorPattern);
}); return (
new cljs.core.Var(function(){return cljs.core.match.vector_pattern_QMARK_;},new cljs.core.Symbol("cljs.core.match","vector-pattern?","cljs.core.match/vector-pattern?",(-2038061165),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"vector-pattern?","vector-pattern?",(-918951347),null),"cljs/core/match.cljc",(22),(1),(1466),(1466),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(cljs.core.match.vector_pattern_QMARK_)?cljs.core.match.vector_pattern_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.specialize_or_pattern_row = (function cljs$core$match$specialize_or_pattern_row(row,pat,ps){
var p = cljs.core.first.call(null,row);
if(cljs.core.truth_((function (){var and__20770__auto__ = cljs.core.match.groupable_QMARK_.call(null,pat,p);
if(cljs.core.truth_(and__20770__auto__)){
return cljs.core.not.call(null,cljs.core.match.wildcard_pattern_QMARK_.call(null,p));
} else {
return and__20770__auto__;
}
})())){
return cljs.core.map.call(null,((function (p){
return (function (p__$1){
return cljs.core.match.update_pattern.call(null,row,(0),p__$1);
});})(p))
,ps);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [row], null);
}
}); return (
new cljs.core.Var(function(){return cljs.core.match.specialize_or_pattern_row;},new cljs.core.Symbol("cljs.core.match","specialize-or-pattern-row","cljs.core.match/specialize-or-pattern-row",(1720840485),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"specialize-or-pattern-row","specialize-or-pattern-row",(-1406848425),null),"cljs/core/match.cljc",(32),(1),(1476),(1476),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"row","row",(1070392006),null),new cljs.core.Symbol(null,"pat","pat",(222961363),null),new cljs.core.Symbol(null,"ps","ps",(1932889573),null)], null)),null,(cljs.core.truth_(cljs.core.match.specialize_or_pattern_row)?cljs.core.match.specialize_or_pattern_row.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.specialize_or_pattern_matrix = (function cljs$core$match$specialize_or_pattern_matrix(rows,pat,ps){
return cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,(function (p1__37_SHARP_){
return cljs.core.match.specialize_or_pattern_row.call(null,p1__37_SHARP_,pat,ps);
}),rows)));
}); return (
new cljs.core.Var(function(){return cljs.core.match.specialize_or_pattern_matrix;},new cljs.core.Symbol("cljs.core.match","specialize-or-pattern-matrix","cljs.core.match/specialize-or-pattern-matrix",(1408717883),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"specialize-or-pattern-matrix","specialize-or-pattern-matrix",(1768624521),null),"cljs/core/match.cljc",(35),(1),(1483),(1483),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rows","rows",(-1804386089),null),new cljs.core.Symbol(null,"pat","pat",(222961363),null),new cljs.core.Symbol(null,"ps","ps",(1932889573),null)], null)),null,(cljs.core.truth_(cljs.core.match.specialize_or_pattern_matrix)?cljs.core.match.specialize_or_pattern_matrix.cljs$lang$test:null)])));})()
;

/**
* @constructor
 * @implements {cljs.core.match.protocols.IPseudoPattern}
 * @implements {cljs.core.match.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.match.protocols.ISpecializeMatrix}
*/
cljs.core.match.OrPattern = (function (ps,_meta){
this.ps = ps;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.match.OrPattern.prototype.cljs$core$match$protocols$IPseudoPattern$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.match.OrPattern.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return [cljs.core.str(self__.ps)].join('');
});

cljs.core.match.OrPattern.prototype.equals = (function (other){
var self__ = this;
var _ = this;
return ((other instanceof cljs.core.match.OrPattern)) && (cljs.core._EQ_.call(null,self__.ps,new cljs.core.Keyword(null,"ps","ps",(292358046)).cljs$core$IFn$_invoke$arity$1(other)));
});

cljs.core.match.OrPattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
});

cljs.core.match.OrPattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new cljs.core.match.OrPattern(self__.ps,new_meta));
});

cljs.core.match.OrPattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
});

cljs.core.match.OrPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var G__1084 = (((k instanceof cljs.core.Keyword))?k.fqn:null);
switch (G__1084) {
case "ps":
return self__.ps;

break;
case "cljs.core.match/tag":
return new cljs.core.Keyword("cljs.core.match","or","cljs.core.match/or",(1151305311));

break;
default:
return not_found;

}
});

cljs.core.match.OrPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.match.OrPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$specialize_matrix$arity$2 = (function (this$,matrix){
var self__ = this;
var this$__$1 = this;
var rows = cljs.core.match.rows.call(null,matrix);
var ocrs = cljs.core.match.occurrences.call(null,matrix);
var nrows = cljs.core.match.specialize_or_pattern_matrix.call(null,rows,this$__$1,self__.ps);
return cljs.core.match.pattern_matrix.call(null,nrows,ocrs);
});

cljs.core.match.OrPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ps","ps",(1932889573),null),new cljs.core.Symbol(null,"_meta","_meta",(-1716892533),null)], null);
});

cljs.core.match.OrPattern.cljs$lang$type = true;

cljs.core.match.OrPattern.cljs$lang$ctorStr = "cljs.core.match/OrPattern";

cljs.core.match.OrPattern.cljs$lang$ctorPrWriter = (function (this__22602__auto__,writer__22603__auto__,opt__22604__auto__){
return cljs.core._write.call(null,writer__22603__auto__,"cljs.core.match/OrPattern");
});

(function (){
cljs.core.match.__GT_OrPattern = (function cljs$core$match$__GT_OrPattern(ps,_meta){
return (new cljs.core.match.OrPattern(ps,_meta));
}); return (
new cljs.core.Var(function(){return cljs.core.match.__GT_OrPattern;},new cljs.core.Symbol("cljs.core.match","->OrPattern","cljs.core.match/->OrPattern",(1660170693),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol("cljs.core.match.protocols","IPseudoPattern","cljs.core.match.protocols/IPseudoPattern",(-554076115),null),null,new cljs.core.Symbol("cljs.core.match","Object","cljs.core.match/Object",(1160957744),null),null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","ILookup","cljs.core/ILookup",(-150575073),null),null,new cljs.core.Symbol("cljs.core.match.protocols","ISpecializeMatrix","cljs.core.match.protocols/ISpecializeMatrix",(1271926164),null),null], null), null),new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"->OrPattern","->OrPattern",(-1470598281),null),"cljs/core/match.cljc",(19),(1),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(1487),(1487),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ps","ps",(1932889573),null),new cljs.core.Symbol(null,"_meta","_meta",(-1716892533),null)], null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","ILookup","cljs.core/ILookup",(-150575073),null),null], null), null),null,(cljs.core.truth_(cljs.core.match.__GT_OrPattern)?cljs.core.match.__GT_OrPattern.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.match.or_pattern = (function cljs$core$match$or_pattern(p){
if(cljs.core.vector_QMARK_.call(null,p)){
} else {
throw (new Error("Assert failed: (vector? p)"));
}

return (new cljs.core.match.OrPattern(p,null));
}); return (
new cljs.core.Var(function(){return cljs.core.match.or_pattern;},new cljs.core.Symbol("cljs.core.match","or-pattern","cljs.core.match/or-pattern",(-1618664158),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"or-pattern","or-pattern",(1412522096),null),"cljs/core/match.cljc",(17),(1),(1518),(1518),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null)], null)),null,(cljs.core.truth_(cljs.core.match.or_pattern)?cljs.core.match.or_pattern.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.or_pattern_QMARK_ = (function cljs$core$match$or_pattern_QMARK_(x){
return (x instanceof cljs.core.match.OrPattern);
}); return (
new cljs.core.Var(function(){return cljs.core.match.or_pattern_QMARK_;},new cljs.core.Symbol("cljs.core.match","or-pattern?","cljs.core.match/or-pattern?",(-1342154334),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"or-pattern?","or-pattern?",(2056527088),null),"cljs/core/match.cljc",(18),(1),(1522),(1522),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(cljs.core.match.or_pattern_QMARK_)?cljs.core.match.or_pattern_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.guard_pattern_QMARK_; return (
new cljs.core.Var(function(){return cljs.core.match.guard_pattern_QMARK_;},new cljs.core.Symbol("cljs.core.match","guard-pattern?","cljs.core.match/guard-pattern?",(-2012106643),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"guard-pattern?","guard-pattern?",(-223580193),null),"cljs/core/match.cljc",(24),(1),(1536),true,(1536),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.match.guard_pattern_QMARK_)?cljs.core.match.guard_pattern_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.specialize_guard_pattern_matrix = (function cljs$core$match$specialize_guard_pattern_matrix(rows){
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p__1090){
var vec__1091 = p__1090;
var p = cljs.core.nth.call(null,vec__1091,(0),null);
var row = vec__1091;
if(cljs.core.truth_(cljs.core.match.guard_pattern_QMARK_.call(null,p))){
return cljs.core.match.update_pattern.call(null,row,(0),new cljs.core.Keyword(null,"p","p",(151049309)).cljs$core$IFn$_invoke$arity$1(p));
} else {
return row;
}
}),rows));
}); return (
new cljs.core.Var(function(){return cljs.core.match.specialize_guard_pattern_matrix;},new cljs.core.Symbol("cljs.core.match","specialize-guard-pattern-matrix","cljs.core.match/specialize-guard-pattern-matrix",(-239330250),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"specialize-guard-pattern-matrix","specialize-guard-pattern-matrix",(-892084488),null),"cljs/core/match.cljc",(38),(1),(1538),(1538),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)], null)),null,(cljs.core.truth_(cljs.core.match.specialize_guard_pattern_matrix)?cljs.core.match.specialize_guard_pattern_matrix.cljs$lang$test:null)])));})()
;

/**
* @constructor
 * @implements {cljs.core.match.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.match.protocols.IPatternCompile}
 * @implements {cljs.core.match.protocols.ISpecializeMatrix}
*/
cljs.core.match.GuardPattern = (function (p,gs,_meta){
this.p = p;
this.gs = gs;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.match.GuardPattern.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return [cljs.core.str(self__.p),cljs.core.str(" :guard "),cljs.core.str(self__.gs)].join('');
});

cljs.core.match.GuardPattern.prototype.equals = (function (other){
var self__ = this;
var _ = this;
return ((other instanceof cljs.core.match.GuardPattern)) && (cljs.core._EQ_.call(null,self__.p,new cljs.core.Keyword(null,"p","p",(151049309)).cljs$core$IFn$_invoke$arity$1(other))) && (cljs.core._EQ_.call(null,self__.gs,new cljs.core.Keyword(null,"gs","gs",(1588487164)).cljs$core$IFn$_invoke$arity$1(other)));
});

cljs.core.match.GuardPattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
});

cljs.core.match.GuardPattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new cljs.core.match.GuardPattern(self__.p,self__.gs,new_meta));
});

cljs.core.match.GuardPattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
});

cljs.core.match.GuardPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var G__1094 = (((k instanceof cljs.core.Keyword))?k.fqn:null);
switch (G__1094) {
case "p":
return self__.p;

break;
case "gs":
return self__.gs;

break;
case "cljs.core.match/tag":
return new cljs.core.Keyword("cljs.core.match","guard","cljs.core.match/guard",(-2126094417));

break;
default:
return not_found;

}
});

cljs.core.match.GuardPattern.prototype.cljs$core$match$protocols$IPatternCompile$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.match.GuardPattern.prototype.cljs$core$match$protocols$IPatternCompile$to_source_STAR_$arity$2 = (function (this$,ocr){
var self__ = this;
var this$__$1 = this;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null)),cljs.core.map.call(null,((function (this$__$1){
return (function (expr,ocr__$1){
var x__23399__auto__ = expr;
return cljs.core._conj.call(null,(function (){var x__23399__auto____$1 = ocr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto____$1);
})(),x__23399__auto__);
});})(this$__$1))
,self__.gs,cljs.core.repeat.call(null,ocr))));
});

cljs.core.match.GuardPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.match.GuardPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$specialize_matrix$arity$2 = (function (this$,matrix){
var self__ = this;
var this$__$1 = this;
var rows = cljs.core.match.rows.call(null,matrix);
var ocrs = cljs.core.match.occurrences.call(null,matrix);
var nrows = cljs.core.match.specialize_guard_pattern_matrix.call(null,rows);
return cljs.core.match.pattern_matrix.call(null,nrows,ocrs);
});

cljs.core.match.GuardPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"gs","gs",(-1065948605),null),new cljs.core.Symbol(null,"_meta","_meta",(-1716892533),null)], null);
});

cljs.core.match.GuardPattern.cljs$lang$type = true;

cljs.core.match.GuardPattern.cljs$lang$ctorStr = "cljs.core.match/GuardPattern";

cljs.core.match.GuardPattern.cljs$lang$ctorPrWriter = (function (this__22602__auto__,writer__22603__auto__,opt__22604__auto__){
return cljs.core._write.call(null,writer__22603__auto__,"cljs.core.match/GuardPattern");
});

(function (){
cljs.core.match.__GT_GuardPattern = (function cljs$core$match$__GT_GuardPattern(p,gs,_meta){
return (new cljs.core.match.GuardPattern(p,gs,_meta));
}); return (
new cljs.core.Var(function(){return cljs.core.match.__GT_GuardPattern;},new cljs.core.Symbol("cljs.core.match","->GuardPattern","cljs.core.match/->GuardPattern",(690390641),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol("cljs.core.match","Object","cljs.core.match/Object",(1160957744),null),null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","ILookup","cljs.core/ILookup",(-150575073),null),null,new cljs.core.Symbol("cljs.core.match.protocols","IPatternCompile","cljs.core.match.protocols/IPatternCompile",(1601136321),null),null,new cljs.core.Symbol("cljs.core.match.protocols","ISpecializeMatrix","cljs.core.match.protocols/ISpecializeMatrix",(1271926164),null),null], null), null),new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"->GuardPattern","->GuardPattern",(1739801539),null),"cljs/core/match.cljc",(22),(1),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(1546),(1546),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"gs","gs",(-1065948605),null),new cljs.core.Symbol(null,"_meta","_meta",(-1716892533),null)], null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","ILookup","cljs.core/ILookup",(-150575073),null),null], null), null),null,(cljs.core.truth_(cljs.core.match.__GT_GuardPattern)?cljs.core.match.__GT_GuardPattern.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.match.guard_pattern = (function cljs$core$match$guard_pattern(p,gs){
if(cljs.core.set_QMARK_.call(null,gs)){
} else {
throw (new Error("Assert failed: (set? gs)"));
}

return (new cljs.core.match.GuardPattern(p,gs,null));
}); return (
new cljs.core.Var(function(){return cljs.core.match.guard_pattern;},new cljs.core.Symbol("cljs.core.match","guard-pattern","cljs.core.match/guard-pattern",(-1992330486),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"guard-pattern","guard-pattern",(-1030539688),null),"cljs/core/match.cljc",(20),(1),(1584),(1584),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"gs","gs",(-1065948605),null)], null)),null,(cljs.core.truth_(cljs.core.match.guard_pattern)?cljs.core.match.guard_pattern.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.guard_pattern_QMARK_ = (function cljs$core$match$guard_pattern_QMARK_(x){
return (x instanceof cljs.core.match.GuardPattern);
}); return (
new cljs.core.Var(function(){return cljs.core.match.guard_pattern_QMARK_;},new cljs.core.Symbol("cljs.core.match","guard-pattern?","cljs.core.match/guard-pattern?",(-2012106643),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"guard-pattern?","guard-pattern?",(-223580193),null),"cljs/core/match.cljc",(21),(1),(1588),(1588),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(cljs.core.match.guard_pattern_QMARK_)?cljs.core.match.guard_pattern_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.app_pattern_QMARK_; return (
new cljs.core.Var(function(){return cljs.core.match.app_pattern_QMARK_;},new cljs.core.Symbol("cljs.core.match","app-pattern?","cljs.core.match/app-pattern?",(-1840570311),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"app-pattern?","app-pattern?",(-618141877),null),"cljs/core/match.cljc",(22),(1),(1602),true,(1602),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.match.app_pattern_QMARK_)?cljs.core.match.app_pattern_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.app_pattern_matrix_ocrs = (function cljs$core$match$app_pattern_matrix_ocrs(p__1096,form){
var vec__1100 = p__1096;
var focr = cljs.core.nth.call(null,vec__1100,(0),null);
var ocrs = vec__1100;
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta.call(null,cljs.core.gensym.call(null,[cljs.core.str("app_"),cljs.core.str(focr)].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bind-expr","bind-expr",(41520549)),cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__23399__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = (function (){var or__20817__auto__ = new cljs.core.Keyword(null,"bind-expr","bind-expr",(41520549)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,focr));
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return focr;
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()))], null))], null),ocrs);
}); return (
new cljs.core.Var(function(){return cljs.core.match.app_pattern_matrix_ocrs;},new cljs.core.Symbol("cljs.core.match","app-pattern-matrix-ocrs","cljs.core.match/app-pattern-matrix-ocrs",(-883254483),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"app-pattern-matrix-ocrs","app-pattern-matrix-ocrs",(-1915792225),null),"cljs/core/match.cljc",(30),(1),(1608),(1608),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"focr","focr",(819970127),null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"ocrs","ocrs",(-195684886),null)], null),new cljs.core.Symbol(null,"form","form",(16469056),null)], null)),null,(cljs.core.truth_(cljs.core.match.app_pattern_matrix_ocrs)?cljs.core.match.app_pattern_matrix_ocrs.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.specialize_app_pattern_matrix = (function cljs$core$match$specialize_app_pattern_matrix(rows,form){
var vec__1110 = cljs.core.split_with.call(null,(function (p__1113){
var vec__1114 = p__1113;
var pat = cljs.core.nth.call(null,vec__1114,(0),null);
var row = vec__1114;
var and__20770__auto__ = cljs.core.match.app_pattern_QMARK_.call(null,pat);
if(cljs.core.truth_(and__20770__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"form","form",(-1624062471)).cljs$core$IFn$_invoke$arity$1(pat),form);
} else {
return and__20770__auto__;
}
}),rows);
var matched_rows = cljs.core.nth.call(null,vec__1110,(0),null);
var rest_rows = cljs.core.nth.call(null,vec__1110,(1),null);
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__1110,matched_rows,rest_rows){
return (function (row){
return cljs.core.match.protocols.prepend.call(null,cljs.core.match.update_pattern.call(null,row,(0),cljs.core.match.wildcard_pattern.call(null)),new cljs.core.Keyword(null,"p","p",(151049309)).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,row)));
});})(vec__1110,matched_rows,rest_rows))
,matched_rows),cljs.core.map.call(null,((function (vec__1110,matched_rows,rest_rows){
return (function (row){
return cljs.core.match.protocols.prepend.call(null,row,cljs.core.match.wildcard_pattern.call(null));
});})(vec__1110,matched_rows,rest_rows))
,rest_rows)));
}); return (
new cljs.core.Var(function(){return cljs.core.match.specialize_app_pattern_matrix;},new cljs.core.Symbol("cljs.core.match","specialize-app-pattern-matrix","cljs.core.match/specialize-app-pattern-matrix",(-1147734300),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"specialize-app-pattern-matrix","specialize-app-pattern-matrix",(-2113260266),null),"cljs/core/match.cljc",(36),(1),(1615),(1615),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rows","rows",(-1804386089),null),new cljs.core.Symbol(null,"form","form",(16469056),null)], null)),null,(cljs.core.truth_(cljs.core.match.specialize_app_pattern_matrix)?cljs.core.match.specialize_app_pattern_matrix.cljs$lang$test:null)])));})()
;

/**
* @constructor
 * @implements {cljs.core.match.protocols.IPseudoPattern}
 * @implements {cljs.core.match.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.match.protocols.ISpecializeMatrix}
*/
cljs.core.match.AppPattern = (function (p,form,_meta){
this.p = p;
this.form = form;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.match.AppPattern.prototype.cljs$core$match$protocols$IPseudoPattern$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.match.AppPattern.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return [cljs.core.str(self__.p),cljs.core.str(" :<< "),cljs.core.str(self__.form)].join('');
});

cljs.core.match.AppPattern.prototype.equals = (function (other){
var self__ = this;
var _ = this;
return ((other instanceof cljs.core.match.AppPattern)) && (cljs.core._EQ_.call(null,self__.p,new cljs.core.Keyword(null,"p","p",(151049309)).cljs$core$IFn$_invoke$arity$1(other))) && (cljs.core._EQ_.call(null,self__.form,new cljs.core.Keyword(null,"form","form",(-1624062471)).cljs$core$IFn$_invoke$arity$1(other)));
});

cljs.core.match.AppPattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
});

cljs.core.match.AppPattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new cljs.core.match.AppPattern(self__.p,self__.form,new_meta));
});

cljs.core.match.AppPattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
});

cljs.core.match.AppPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var G__1117 = (((k instanceof cljs.core.Keyword))?k.fqn:null);
switch (G__1117) {
case "p":
return self__.p;

break;
case "form":
return self__.form;

break;
case "cljs.core.match/tag":
return new cljs.core.Keyword("cljs.core.match","app","cljs.core.match/app",(-668230373));

break;
default:
return not_found;

}
});

cljs.core.match.AppPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.match.AppPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$specialize_matrix$arity$2 = (function (this$,matrix){
var self__ = this;
var this$__$1 = this;
var rows = cljs.core.match.rows.call(null,matrix);
var ocrs = cljs.core.match.occurrences.call(null,matrix);
var nocrs = cljs.core.match.app_pattern_matrix_ocrs.call(null,ocrs,self__.form);
var nrows = cljs.core.match.specialize_app_pattern_matrix.call(null,rows,self__.form);
return cljs.core.match.pattern_matrix.call(null,nrows,nocrs);
});

cljs.core.match.AppPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"form","form",(16469056),null),new cljs.core.Symbol(null,"_meta","_meta",(-1716892533),null)], null);
});

cljs.core.match.AppPattern.cljs$lang$type = true;

cljs.core.match.AppPattern.cljs$lang$ctorStr = "cljs.core.match/AppPattern";

cljs.core.match.AppPattern.cljs$lang$ctorPrWriter = (function (this__22602__auto__,writer__22603__auto__,opt__22604__auto__){
return cljs.core._write.call(null,writer__22603__auto__,"cljs.core.match/AppPattern");
});

(function (){
cljs.core.match.__GT_AppPattern = (function cljs$core$match$__GT_AppPattern(p,form,_meta){
return (new cljs.core.match.AppPattern(p,form,_meta));
}); return (
new cljs.core.Var(function(){return cljs.core.match.__GT_AppPattern;},new cljs.core.Symbol("cljs.core.match","->AppPattern","cljs.core.match/->AppPattern",(1229717623),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol("cljs.core.match.protocols","IPseudoPattern","cljs.core.match.protocols/IPseudoPattern",(-554076115),null),null,new cljs.core.Symbol("cljs.core.match","Object","cljs.core.match/Object",(1160957744),null),null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","ILookup","cljs.core/ILookup",(-150575073),null),null,new cljs.core.Symbol("cljs.core.match.protocols","ISpecializeMatrix","cljs.core.match.protocols/ISpecializeMatrix",(1271926164),null),null], null), null),new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"->AppPattern","->AppPattern",(3687717),null),"cljs/core/match.cljc",(20),(1),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(1635),(1635),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"form","form",(16469056),null),new cljs.core.Symbol(null,"_meta","_meta",(-1716892533),null)], null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","ILookup","cljs.core/ILookup",(-150575073),null),null], null), null),null,(cljs.core.truth_(cljs.core.match.__GT_AppPattern)?cljs.core.match.__GT_AppPattern.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.match.app_pattern = (function cljs$core$match$app_pattern(p,form){
return (new cljs.core.match.AppPattern(p,form,null));
}); return (
new cljs.core.Var(function(){return cljs.core.match.app_pattern;},new cljs.core.Symbol("cljs.core.match","app-pattern","cljs.core.match/app-pattern",(93249349),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"app-pattern","app-pattern",(-881157385),null),"cljs/core/match.cljc",(18),(1),(1670),(1670),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"form","form",(16469056),null)], null)),null,(cljs.core.truth_(cljs.core.match.app_pattern)?cljs.core.match.app_pattern.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.app_pattern_QMARK_ = (function cljs$core$match$app_pattern_QMARK_(x){
return (x instanceof cljs.core.match.AppPattern);
}); return (
new cljs.core.Var(function(){return cljs.core.match.app_pattern_QMARK_;},new cljs.core.Symbol("cljs.core.match","app-pattern?","cljs.core.match/app-pattern?",(-1840570311),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"app-pattern?","app-pattern?",(-618141877),null),"cljs/core/match.cljc",(19),(1),(1673),(1673),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(cljs.core.match.app_pattern_QMARK_)?cljs.core.match.app_pattern_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.preds = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY); return (
new cljs.core.Var(function(){return cljs.core.match.preds;},new cljs.core.Symbol("cljs.core.match","preds","cljs.core.match/preds",(-767384345),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"preds","preds",(150921777),null),"cljs/core/match.cljc",(11),(1),(1696),(1696),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.match.preds)?cljs.core.match.preds.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.defpred = (function cljs$core$match$defpred(var_args){
var args1119 = [];
var len__23656__auto___1122 = arguments.length;
var i__23657__auto___1123 = (0);
while(true){
if((i__23657__auto___1123 < len__23656__auto___1122)){
args1119.push((arguments[i__23657__auto___1123]));

var G__1124 = (i__23657__auto___1123 + (1));
i__23657__auto___1123 = G__1124;
continue;
} else {
}
break;
}

var G__1121 = args1119.length;
switch (G__1121) {
case (3):
return cljs.core.match.defpred.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return cljs.core.match.defpred.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str((args1119.length - (2)))].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.core.match.defpred;},new cljs.core.Symbol("cljs.core.match","defpred","cljs.core.match/defpred",(721116228),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"defpred","defpred",(1347361782),null),"cljs/core/match.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"name","name",(-810760592),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"name","name",(-810760592),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(1698),true,(1698),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"name","name",(-810760592),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null)),null,(cljs.core.truth_(cljs.core.match.defpred)?cljs.core.match.defpred.cljs$lang$test:null)])));})()
;

cljs.core.match.defpred.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,name){
return cljs.core.swap_BANG_.call(null,cljs.core.match.preds,cljs.core.assoc,name,name);
});

cljs.core.match.defpred.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,name,f){
return cljs.core.swap_BANG_.call(null,cljs.core.match.preds,cljs.core.assoc,name,f);
});

cljs.core.match.defpred.cljs$lang$maxFixedArity = (4);

new cljs.core.Var(function(){return cljs.core.match.defpred;},new cljs.core.Symbol("cljs.core.match","defpred","cljs.core.match/defpred",(721116228),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"defpred","defpred",(1347361782),null),"cljs/core/match.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"name","name",(-810760592),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"name","name",(-810760592),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(1698),true,(1698),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"name","name",(-810760592),null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"name","name",(-810760592),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null)),null,(cljs.core.truth_(cljs.core.match.defpred)?cljs.core.match.defpred.cljs$lang$test:null)]));

cljs.core.match.defpred.cljs$lang$macro = true;
(function (){
cljs.core.match.predicate_pattern_QMARK_; return (
new cljs.core.Var(function(){return cljs.core.match.predicate_pattern_QMARK_;},new cljs.core.Symbol("cljs.core.match","predicate-pattern?","cljs.core.match/predicate-pattern?",(21887342),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"predicate-pattern?","predicate-pattern?",(-539089864),null),"cljs/core/match.cljc",(28),(1),(1704),true,(1704),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.match.predicate_pattern_QMARK_)?cljs.core.match.predicate_pattern_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.specialize_predicate_pattern_matrix = (function cljs$core$match$specialize_predicate_pattern_matrix(rows){
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p__1130){
var vec__1131 = p__1130;
var p = cljs.core.nth.call(null,vec__1131,(0),null);
var row = vec__1131;
if(cljs.core.truth_(cljs.core.match.predicate_pattern_QMARK_.call(null,p))){
return cljs.core.match.update_pattern.call(null,row,(0),new cljs.core.Keyword(null,"p","p",(151049309)).cljs$core$IFn$_invoke$arity$1(p));
} else {
return row;
}
}),rows));
}); return (
new cljs.core.Var(function(){return cljs.core.match.specialize_predicate_pattern_matrix;},new cljs.core.Symbol("cljs.core.match","specialize-predicate-pattern-matrix","cljs.core.match/specialize-predicate-pattern-matrix",(-1174434517),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"specialize-predicate-pattern-matrix","specialize-predicate-pattern-matrix",(1980445309),null),"cljs/core/match.cljc",(42),(1),(1706),(1706),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)], null)),null,(cljs.core.truth_(cljs.core.match.specialize_predicate_pattern_matrix)?cljs.core.match.specialize_predicate_pattern_matrix.cljs$lang$test:null)])));})()
;

/**
* @constructor
 * @implements {cljs.core.match.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.match.protocols.IPatternCompile}
 * @implements {cljs.core.match.protocols.ISpecializeMatrix}
*/
cljs.core.match.PredicatePattern = (function (p,gs,_meta){
this.p = p;
this.gs = gs;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.match.PredicatePattern.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return [cljs.core.str(self__.p),cljs.core.str(" :when "),cljs.core.str(self__.gs)].join('');
});

cljs.core.match.PredicatePattern.prototype.equals = (function (other){
var self__ = this;
var _ = this;
return ((other instanceof cljs.core.match.PredicatePattern)) && (cljs.core._EQ_.call(null,self__.p,new cljs.core.Keyword(null,"p","p",(151049309)).cljs$core$IFn$_invoke$arity$1(other))) && (cljs.core._EQ_.call(null,self__.gs,new cljs.core.Keyword(null,"gs","gs",(1588487164)).cljs$core$IFn$_invoke$arity$1(other)));
});

cljs.core.match.PredicatePattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
});

cljs.core.match.PredicatePattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new cljs.core.match.PredicatePattern(self__.p,self__.gs,new_meta));
});

cljs.core.match.PredicatePattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
});

cljs.core.match.PredicatePattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var G__1134 = (((k instanceof cljs.core.Keyword))?k.fqn:null);
switch (G__1134) {
case "p":
return self__.p;

break;
case "gs":
return self__.gs;

break;
case "cljs.core.match/tag":
return new cljs.core.Keyword("cljs.core.match","predicate","cljs.core.match/predicate",(-794311346));

break;
default:
return not_found;

}
});

cljs.core.match.PredicatePattern.prototype.cljs$core$match$protocols$IPatternCompile$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.match.PredicatePattern.prototype.cljs$core$match$protocols$IPatternCompile$to_source_STAR_$arity$2 = (function (this$,ocr){
var self__ = this;
var this$__$1 = this;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null)),cljs.core.map.call(null,((function (this$__$1){
return (function (expr,ocr__$1){
var x__23399__auto__ = expr;
return cljs.core._conj.call(null,(function (){var x__23399__auto____$1 = ocr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto____$1);
})(),x__23399__auto__);
});})(this$__$1))
,self__.gs,cljs.core.repeat.call(null,ocr))));
});

cljs.core.match.PredicatePattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.match.PredicatePattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$specialize_matrix$arity$2 = (function (this$,matrix){
var self__ = this;
var this$__$1 = this;
var rows = cljs.core.match.rows.call(null,matrix);
var ocrs = cljs.core.match.occurrences.call(null,matrix);
var nrows = cljs.core.match.specialize_predicate_pattern_matrix.call(null,rows);
return cljs.core.match.pattern_matrix.call(null,nrows,ocrs);
});

cljs.core.match.PredicatePattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"gs","gs",(-1065948605),null),new cljs.core.Symbol(null,"_meta","_meta",(-1716892533),null)], null);
});

cljs.core.match.PredicatePattern.cljs$lang$type = true;

cljs.core.match.PredicatePattern.cljs$lang$ctorStr = "cljs.core.match/PredicatePattern";

cljs.core.match.PredicatePattern.cljs$lang$ctorPrWriter = (function (this__22602__auto__,writer__22603__auto__,opt__22604__auto__){
return cljs.core._write.call(null,writer__22603__auto__,"cljs.core.match/PredicatePattern");
});

(function (){
cljs.core.match.__GT_PredicatePattern = (function cljs$core$match$__GT_PredicatePattern(p,gs,_meta){
return (new cljs.core.match.PredicatePattern(p,gs,_meta));
}); return (
new cljs.core.Var(function(){return cljs.core.match.__GT_PredicatePattern;},new cljs.core.Symbol("cljs.core.match","->PredicatePattern","cljs.core.match/->PredicatePattern",(-204872602),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol("cljs.core.match","Object","cljs.core.match/Object",(1160957744),null),null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","ILookup","cljs.core/ILookup",(-150575073),null),null,new cljs.core.Symbol("cljs.core.match.protocols","IPatternCompile","cljs.core.match.protocols/IPatternCompile",(1601136321),null),null,new cljs.core.Symbol("cljs.core.match.protocols","ISpecializeMatrix","cljs.core.match.protocols/ISpecializeMatrix",(1271926164),null),null], null), null),new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"->PredicatePattern","->PredicatePattern",(897426068),null),"cljs/core/match.cljc",(26),(1),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(1714),(1714),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"gs","gs",(-1065948605),null),new cljs.core.Symbol(null,"_meta","_meta",(-1716892533),null)], null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","ILookup","cljs.core/ILookup",(-150575073),null),null], null), null),null,(cljs.core.truth_(cljs.core.match.__GT_PredicatePattern)?cljs.core.match.__GT_PredicatePattern.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.match.predicate_pattern = (function cljs$core$match$predicate_pattern(p,gs){
if(cljs.core.set_QMARK_.call(null,gs)){
} else {
throw (new Error("Assert failed: (set? gs)"));
}

return (new cljs.core.match.PredicatePattern(p,gs,null));
}); return (
new cljs.core.Var(function(){return cljs.core.match.predicate_pattern;},new cljs.core.Symbol("cljs.core.match","predicate-pattern","cljs.core.match/predicate-pattern",(1212240816),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"predicate-pattern","predicate-pattern",(-2098356542),null),"cljs/core/match.cljc",(24),(1),(1752),(1752),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"gs","gs",(-1065948605),null)], null)),null,(cljs.core.truth_(cljs.core.match.predicate_pattern)?cljs.core.match.predicate_pattern.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.predicate_pattern_QMARK_ = (function cljs$core$match$predicate_pattern_QMARK_(x){
return (x instanceof cljs.core.match.PredicatePattern);
}); return (
new cljs.core.Var(function(){return cljs.core.match.predicate_pattern_QMARK_;},new cljs.core.Symbol("cljs.core.match","predicate-pattern?","cljs.core.match/predicate-pattern?",(21887342),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"predicate-pattern?","predicate-pattern?",(-539089864),null),"cljs/core/match.cljc",(25),(1),(1756),(1756),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(cljs.core.match.predicate_pattern_QMARK_)?cljs.core.match.predicate_pattern_QMARK_.cljs$lang$test:null)])));})()
;
cljs.core._add_method.call(null,cljs.core.match.groupable_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.core.match","literal","cljs.core.match/literal",(-1699299641)),new cljs.core.Keyword("cljs.core.match","literal","cljs.core.match/literal",(-1699299641))], null),(function (a,b){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"l","l",(1395893423)).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"l","l",(1395893423)).cljs$core$IFn$_invoke$arity$1(b));
}));
cljs.core._add_method.call(null,cljs.core.match.groupable_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.core.match","guard","cljs.core.match/guard",(-2126094417)),new cljs.core.Keyword("cljs.core.match","guard","cljs.core.match/guard",(-2126094417))], null),(function (a,b){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"gs","gs",(1588487164)).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"gs","gs",(1588487164)).cljs$core$IFn$_invoke$arity$1(b));
}));
cljs.core._add_method.call(null,cljs.core.match.groupable_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.core.match","predice","cljs.core.match/predice",(173694935)),new cljs.core.Keyword("cljs.core.match","predicate","cljs.core.match/predicate",(-794311346))], null),(function (a,b){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"gs","gs",(1588487164)).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"gs","gs",(1588487164)).cljs$core$IFn$_invoke$arity$1(b));
}));
cljs.core._add_method.call(null,cljs.core.match.groupable_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.core.match","map","cljs.core.match/map",(-408120017)),new cljs.core.Keyword("cljs.core.match","map","cljs.core.match/map",(-408120017))], null),(function (a,b){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"only","only",(1907811652)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,a)),new cljs.core.Keyword(null,"only","only",(1907811652)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,b)));
}));
cljs.core._add_method.call(null,cljs.core.match.groupable_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.core.match","or","cljs.core.match/or",(1151305311)),new cljs.core.Keyword("cljs.core.match","or","cljs.core.match/or",(1151305311))], null),(function (a,b){
var as = new cljs.core.Keyword(null,"ps","ps",(292358046)).cljs$core$IFn$_invoke$arity$1(a);
var bs = new cljs.core.Keyword(null,"ps","ps",(292358046)).cljs$core$IFn$_invoke$arity$1(b);
return (cljs.core._EQ_.call(null,cljs.core.count.call(null,as),cljs.core.count.call(null,bs))) && (cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core.match.groupable_QMARK_,as,bs)));
}));
cljs.core._add_method.call(null,cljs.core.match.groupable_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296)),new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296))], null),(function (a,b){
return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"rest?","rest?",(345335951)).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"rest?","rest?",(345335951)).cljs$core$IFn$_invoke$arity$1(b))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"size","size",(1098693007)).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"size","size",(1098693007)).cljs$core$IFn$_invoke$arity$1(b)));
}));
cljs.core._add_method.call(null,cljs.core.match.groupable_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.core.match","app","cljs.core.match/app",(-668230373)),new cljs.core.Keyword("cljs.core.match","app","cljs.core.match/app",(-668230373))], null),(function (a,b){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"form","form",(-1624062471)).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"form","form",(-1624062471)).cljs$core$IFn$_invoke$arity$1(b));
}));
if(typeof cljs.core.match.to_source !== 'undefined'){
} else {
/**
 * Returns a Clojure form that, when executed, is truthy if the
 *   pattern matches the occurrence. Dispatches on the `type` of the
 *   pattern. For instance, a literal pattern might return `(= ~(:pattern
 *   pattern) ~ocr)`, using `=` to test for a match.
 */
(function (){
cljs.core.match.to_source = (function (){var method_table__23489__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23490__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23491__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23492__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23493__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core.match","to-source"),((function (method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__,hierarchy__23493__auto__){
return (function (pattern,ocr){
return new cljs.core.Keyword("cljs.core.match","tag","cljs.core.match/tag",(-39691477)).cljs$core$IFn$_invoke$arity$1(pattern);
});})(method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__,hierarchy__23493__auto__))
,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__23493__auto__,method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__));
})(); return (
new cljs.core.Var(function(){return cljs.core.match.to_source;},new cljs.core.Symbol("cljs.core.match","to-source","cljs.core.match/to-source",(-1487572746),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"to-source","to-source",(-106840648),null),"cljs/core/match.cljc",(20),(1),(1798),(1798),cljs.core.List.EMPTY,"Returns a Clojure form that, when executed, is truthy if the\n  pattern matches the occurrence. Dispatches on the `type` of the\n  pattern. For instance, a literal pattern might return `(= ~(:pattern\n  pattern) ~ocr)`, using `=` to test for a match.",(cljs.core.truth_(cljs.core.match.to_source)?cljs.core.match.to_source.cljs$lang$test:null)])));})()
;
}
if(typeof cljs.core.match.emit_pattern !== 'undefined'){
} else {
/**
 * Returns the corresponding pattern for the given syntax. Dispatches
 *   on the class of its argument. For example, `[(:or 1 2) 2]` is dispatched
 *   as clojure.lang.IPersistentVector
 */
(function (){
cljs.core.match.emit_pattern = (function (){var method_table__23489__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23490__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23491__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23492__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23493__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core.match","emit-pattern"),((function (method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__,hierarchy__23493__auto__){
return (function (pattern){
return cljs.core.match.protocols.syntax_tag.call(null,pattern);
});})(method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__,hierarchy__23493__auto__))
,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__23493__auto__,method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__));
})(); return (
new cljs.core.Var(function(){return cljs.core.match.emit_pattern;},new cljs.core.Symbol("cljs.core.match","emit-pattern","cljs.core.match/emit-pattern",(1604883552),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"emit-pattern","emit-pattern",(1695863454),null),"cljs/core/match.cljc",(23),(1),(1806),(1806),cljs.core.List.EMPTY,"Returns the corresponding pattern for the given syntax. Dispatches\n  on the class of its argument. For example, `[(:or 1 2) 2]` is dispatched\n  as clojure.lang.IPersistentVector",(cljs.core.truth_(cljs.core.match.emit_pattern)?cljs.core.match.emit_pattern.cljs$lang$test:null)])));})()
;
}
cljs.core.PersistentVector.prototype.cljs$core$match$protocols$ISyntaxTag$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.cljs$core$match$protocols$ISyntaxTag$syntax_tag$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296));
});

cljs.core.List.prototype.cljs$core$match$protocols$ISyntaxTag$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.cljs$core$match$protocols$ISyntaxTag$syntax_tag$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword("cljs.core.match","seq","cljs.core.match/seq",(-634730153));
});

cljs.core.Cons.prototype.cljs$core$match$protocols$ISyntaxTag$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Cons.prototype.cljs$core$match$protocols$ISyntaxTag$syntax_tag$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword("cljs.core.match","seq","cljs.core.match/seq",(-634730153));
});

cljs.core.PersistentHashMap.prototype.cljs$core$match$protocols$ISyntaxTag$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.cljs$core$match$protocols$ISyntaxTag$syntax_tag$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword("cljs.core.match","map","cljs.core.match/map",(-408120017));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$match$protocols$ISyntaxTag$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.cljs$core$match$protocols$ISyntaxTag$syntax_tag$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword("cljs.core.match","map","cljs.core.match/map",(-408120017));
});

cljs.core.Symbol.prototype.cljs$core$match$protocols$ISyntaxTag$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Symbol.prototype.cljs$core$match$protocols$ISyntaxTag$syntax_tag$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword("cljs.core.match","symbol","cljs.core.match/symbol",(-2001901386));
});

(cljs.core.match.protocols.ISyntaxTag["object"] = true);

(cljs.core.match.protocols.syntax_tag["object"] = (function (_){
return new cljs.core.Keyword(null,"default","default",(-1987822328));
}));

(cljs.core.match.protocols.ISyntaxTag["null"] = true);

(cljs.core.match.protocols.syntax_tag["null"] = (function (_){
return new cljs.core.Keyword(null,"default","default",(-1987822328));
}));
(cljs.core.match.protocols.ISyntaxTag["number"] = true);

(cljs.core.match.protocols.syntax_tag["number"] = (function (_){
return new cljs.core.Keyword(null,"default","default",(-1987822328));
}));
(cljs.core.match.protocols.ISyntaxTag["string"] = true);

(cljs.core.match.protocols.syntax_tag["string"] = (function (_){
return new cljs.core.Keyword(null,"default","default",(-1987822328));
}));
(cljs.core.match.protocols.ISyntaxTag["boolean"] = true);

(cljs.core.match.protocols.syntax_tag["boolean"] = (function (_){
return new cljs.core.Keyword(null,"default","default",(-1987822328));
}));
(function (){
cljs.core.match.emit_patterns = (function cljs$core$match$emit_patterns(var_args){
var args1136 = [];
var len__23656__auto___1139 = arguments.length;
var i__23657__auto___1140 = (0);
while(true){
if((i__23657__auto___1140 < len__23656__auto___1139)){
args1136.push((arguments[i__23657__auto___1140]));

var G__1141 = (i__23657__auto___1140 + (1));
i__23657__auto___1140 = G__1141;
continue;
} else {
}
break;
}

var G__1138 = args1136.length;
switch (G__1138) {
case (2):
return cljs.core.match.emit_patterns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.match.emit_patterns.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1136.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.core.match.emit_patterns;},new cljs.core.Symbol("cljs.core.match","emit-patterns","cljs.core.match/emit-patterns",(2122281910),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"emit-patterns","emit-patterns",(1149447800),null),"cljs/core/match.cljc",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ps","ps",(1932889573),null),new cljs.core.Symbol(null,"t","t",(242699008),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ps","ps",(1932889573),null),new cljs.core.Symbol(null,"t","t",(242699008),null),new cljs.core.Symbol(null,"v","v",(1661996586),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ps","ps",(1932889573),null),new cljs.core.Symbol(null,"t","t",(242699008),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ps","ps",(1932889573),null),new cljs.core.Symbol(null,"t","t",(242699008),null),new cljs.core.Symbol(null,"v","v",(1661996586),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(1851),(1851),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ps","ps",(1932889573),null),new cljs.core.Symbol(null,"t","t",(242699008),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ps","ps",(1932889573),null),new cljs.core.Symbol(null,"t","t",(242699008),null),new cljs.core.Symbol(null,"v","v",(1661996586),null)], null)),null,(cljs.core.truth_(cljs.core.match.emit_patterns)?cljs.core.match.emit_patterns.cljs$lang$test:null)])));})()
;

cljs.core.match.emit_patterns.cljs$core$IFn$_invoke$arity$2 = (function (ps,t){
return cljs.core.match.emit_patterns.call(null,ps,t,cljs.core.PersistentVector.EMPTY);
});

cljs.core.match.emit_patterns.cljs$core$IFn$_invoke$arity$3 = (function (ps,t,v){
while(true){
if(cljs.core.empty_QMARK_.call(null,ps)){
return v;
} else {
var p = cljs.core.first.call(null,ps);
if(cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"&","&",(-2144855648),null))){
var p__$1 = cljs.core.second.call(null,ps);
var rp = (((cljs.core.vector_QMARK_.call(null,p__$1)) && (cljs.core._EQ_.call(null,t,new cljs.core.Keyword(null,"seq","seq",(-1817803783)))))?cljs.core.match.seq_pattern.call(null,cljs.core.match.emit_patterns.call(null,p__$1,t)):cljs.core.match.emit_pattern.call(null,p__$1));
var G__1143 = cljs.core.nnext.call(null,ps);
var G__1144 = t;
var G__1145 = cljs.core.conj.call(null,v,cljs.core.match.rest_pattern.call(null,rp));
ps = G__1143;
t = G__1144;
v = G__1145;
continue;
} else {
var G__1146 = cljs.core.next.call(null,ps);
var G__1147 = t;
var G__1148 = cljs.core.conj.call(null,v,cljs.core.match.emit_pattern.call(null,cljs.core.first.call(null,ps)));
ps = G__1146;
t = G__1147;
v = G__1148;
continue;

}
}
break;
}
});

cljs.core.match.emit_patterns.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return cljs.core.match.emit_patterns;},new cljs.core.Symbol("cljs.core.match","emit-patterns","cljs.core.match/emit-patterns",(2122281910),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"emit-patterns","emit-patterns",(1149447800),null),"cljs/core/match.cljc",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ps","ps",(1932889573),null),new cljs.core.Symbol(null,"t","t",(242699008),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ps","ps",(1932889573),null),new cljs.core.Symbol(null,"t","t",(242699008),null),new cljs.core.Symbol(null,"v","v",(1661996586),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ps","ps",(1932889573),null),new cljs.core.Symbol(null,"t","t",(242699008),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ps","ps",(1932889573),null),new cljs.core.Symbol(null,"t","t",(242699008),null),new cljs.core.Symbol(null,"v","v",(1661996586),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(1851),(1851),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ps","ps",(1932889573),null),new cljs.core.Symbol(null,"t","t",(242699008),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ps","ps",(1932889573),null),new cljs.core.Symbol(null,"t","t",(242699008),null),new cljs.core.Symbol(null,"v","v",(1661996586),null)], null)),null,(cljs.core.truth_(cljs.core.match.emit_patterns)?cljs.core.match.emit_patterns.cljs$lang$test:null)]));
cljs.core._add_method.call(null,cljs.core.match.emit_pattern,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296)),(function (pat){
var ps = cljs.core.match.emit_patterns.call(null,pat,new cljs.core.Keyword(null,"vector","vector",(1902966158)));
return cljs.core.match.vector_pattern.call(null,ps,cljs.core.match._STAR_vector_type_STAR_,(0),cljs.core.some.call(null,cljs.core.match.rest_pattern_QMARK_,ps));
}));
cljs.core._add_method.call(null,cljs.core.match.emit_pattern,new cljs.core.Keyword("cljs.core.match","map","cljs.core.match/map",(-408120017)),(function (pat){
return cljs.core.match.map_pattern.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p__1149){
var vec__1150 = p__1149;
var k = cljs.core.nth.call(null,vec__1150,(0),null);
var v = cljs.core.nth.call(null,vec__1150,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.match.emit_pattern.call(null,v)], null);
}),pat))));
}));
cljs.core._add_method.call(null,cljs.core.match.emit_pattern,new cljs.core.Keyword("cljs.core.match","symbol","cljs.core.match/symbol",(-2001901386)),(function (pat){
if(cljs.core.not_EQ_.call(null,cljs.core.get.call(null,cljs.core.match._STAR_locals_STAR_,pat,new cljs.core.Keyword("cljs.core.match","not-found","cljs.core.match/not-found",(85049222))),new cljs.core.Keyword("cljs.core.match","not-found","cljs.core.match/not-found",(85049222)))){
return cljs.core.match.literal_pattern.call(null,cljs.core.with_meta.call(null,pat,cljs.core.assoc.call(null,cljs.core.meta.call(null,pat),new cljs.core.Keyword(null,"local","local",(-1497766724)),true)));
} else {
return cljs.core.match.wildcard_pattern.call(null,pat);
}
}));
cljs.core._add_method.call(null,cljs.core.match.emit_pattern,new cljs.core.Keyword(null,"default","default",(-1987822328)),(function (pat){
return cljs.core.match.literal_pattern.call(null,pat);
}));
(function (){
cljs.core.match.emit_pattern_for_syntax; return (
new cljs.core.Var(function(){return cljs.core.match.emit_pattern_for_syntax;},new cljs.core.Symbol("cljs.core.match","emit-pattern-for-syntax","cljs.core.match/emit-pattern-for-syntax",(-832427911),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"emit-pattern-for-syntax","emit-pattern-for-syntax",(351659979),null),"cljs/core/match.cljc",(33),(1),(1892),true,(1892),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.match.emit_pattern_for_syntax)?cljs.core.match.emit_pattern_for_syntax.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.match.or_pattern; return (
new cljs.core.Var(function(){return cljs.core.match.or_pattern;},new cljs.core.Symbol("cljs.core.match","or-pattern","cljs.core.match/or-pattern",(-1618664158),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"or-pattern","or-pattern",(1412522096),null),"cljs/core/match.cljc",(44),(1),(1892),true,(1892),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.match.or_pattern)?cljs.core.match.or_pattern.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.match.as_pattern; return (
new cljs.core.Var(function(){return cljs.core.match.as_pattern;},new cljs.core.Symbol("cljs.core.match","as-pattern","cljs.core.match/as-pattern",(1154194354),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"as-pattern","as-pattern",(-1971370752),null),"cljs/core/match.cljc",(55),(1),(1892),true,(1892),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.match.as_pattern)?cljs.core.match.as_pattern.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.match.guard_pattern; return (
new cljs.core.Var(function(){return cljs.core.match.guard_pattern;},new cljs.core.Symbol("cljs.core.match","guard-pattern","cljs.core.match/guard-pattern",(-1992330486),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"guard-pattern","guard-pattern",(-1030539688),null),"cljs/core/match.cljc",(69),(1),(1892),true,(1892),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.match.guard_pattern)?cljs.core.match.guard_pattern.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.match.predicate_pattern; return (
new cljs.core.Var(function(){return cljs.core.match.predicate_pattern;},new cljs.core.Symbol("cljs.core.match","predicate-pattern","cljs.core.match/predicate-pattern",(1212240816),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"predicate-pattern","predicate-pattern",(-2098356542),null),"cljs/core/match.cljc",(27),(1),(1892),true,(1893),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.match.predicate_pattern)?cljs.core.match.predicate_pattern.cljs$lang$test:null)])));})()
;

(function (){
cljs.core.match.vector_pattern; return (
new cljs.core.Var(function(){return cljs.core.match.vector_pattern;},new cljs.core.Symbol("cljs.core.match","vector-pattern","cljs.core.match/vector-pattern",(1933888244),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"vector-pattern","vector-pattern",(-1158473798),null),"cljs/core/match.cljc",(42),(1),(1892),true,(1893),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.core.match.vector_pattern)?cljs.core.match.vector_pattern.cljs$lang$test:null)])));})()
;
cljs.core._add_method.call(null,cljs.core.match.emit_pattern,new cljs.core.Keyword("cljs.core.match","seq","cljs.core.match/seq",(-634730153)),(function (pat){
if((cljs.core._EQ_.call(null,cljs.core.count.call(null,pat),(2))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,pat),new cljs.core.Symbol(null,"quote","quote",(1377916282),null))) && (((cljs.core.second.call(null,pat) instanceof cljs.core.Symbol)) || ((cljs.core.second.call(null,pat) instanceof cljs.core.Keyword)))){
return cljs.core.match.literal_pattern.call(null,cljs.core.second.call(null,pat));
} else {
return cljs.core.match.emit_pattern_for_syntax.call(null,pat);
}
}));
if(typeof cljs.core.match.emit_pattern_for_syntax !== 'undefined'){
} else {
/**
 * Handles patterns wrapped in the special list syntax. Dispatches
 *   on the first or second keyword in the list. For example, the pattern 
 *   `(:or 1 ...) is dispatches as :or, and `(1 :as a)` is dispatched by :as.
 */
(function (){
cljs.core.match.emit_pattern_for_syntax = (function (){var method_table__23489__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23490__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23491__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23492__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23493__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core.match","emit-pattern-for-syntax"),((function (method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__,hierarchy__23493__auto__){
return (function (p__1153){
var vec__1154 = p__1153;
var f = cljs.core.nth.call(null,vec__1154,(0),null);
var s = cljs.core.nth.call(null,vec__1154,(1),null);
if((f instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.Keyword(null,"default","default",(-1987822328))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",(-1987822328)),s], null);
}
});})(method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__,hierarchy__23493__auto__))
,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__23493__auto__,method_table__23489__auto__,prefer_table__23490__auto__,method_cache__23491__auto__,cached_hierarchy__23492__auto__));
})(); return (
new cljs.core.Var(function(){return cljs.core.match.emit_pattern_for_syntax;},new cljs.core.Symbol("cljs.core.match","emit-pattern-for-syntax","cljs.core.match/emit-pattern-for-syntax",(-832427911),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"emit-pattern-for-syntax","emit-pattern-for-syntax",(351659979),null),"cljs/core/match.cljc",(34),(1),(1903),(1903),cljs.core.List.EMPTY,"Handles patterns wrapped in the special list syntax. Dispatches\n  on the first or second keyword in the list. For example, the pattern \n  `(:or 1 ...) is dispatches as :or, and `(1 :as a)` is dispatched by :as.",(cljs.core.truth_(cljs.core.match.emit_pattern_for_syntax)?cljs.core.match.emit_pattern_for_syntax.cljs$lang$test:null)])));})()
;
}
cljs.core._add_method.call(null,cljs.core.match.emit_pattern_for_syntax,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.Keyword(null,"default","default",(-1987822328))], null),(function (pat){
return cljs.core.match.or_pattern.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.match.emit_pattern,cljs.core.rest.call(null,pat))));
}));
cljs.core._add_method.call(null,cljs.core.match.emit_pattern_for_syntax,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",(-1987822328)),new cljs.core.Keyword(null,"as","as",(1148689641))], null),(function (p__1157){
var vec__1158 = p__1157;
var p = cljs.core.nth.call(null,vec__1158,(0),null);
var _ = cljs.core.nth.call(null,vec__1158,(1),null);
var sym = cljs.core.nth.call(null,vec__1158,(2),null);
return cljs.core.with_meta.call(null,cljs.core.match.emit_pattern.call(null,p),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",(1148689641)),sym], null));
}));
cljs.core._add_method.call(null,cljs.core.match.emit_pattern_for_syntax,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",(-1987822328)),new cljs.core.Keyword(null,"<<","<<",(1655720184))], null),(function (p__1161){
var vec__1162 = p__1161;
var p = cljs.core.nth.call(null,vec__1162,(0),null);
var _ = cljs.core.nth.call(null,vec__1162,(1),null);
var form = cljs.core.nth.call(null,vec__1162,(2),null);
return cljs.core.match.app_pattern.call(null,cljs.core.match.emit_pattern.call(null,p),form);
}));
cljs.core._add_method.call(null,cljs.core.match.emit_pattern_for_syntax,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",(-1987822328)),new cljs.core.Keyword(null,"when","when",(-576417306))], null),(function (p__1165){
var vec__1166 = p__1165;
var p = cljs.core.nth.call(null,vec__1166,(0),null);
var _ = cljs.core.nth.call(null,vec__1166,(1),null);
var gs = cljs.core.nth.call(null,vec__1166,(2),null);
var gs__$1 = ((!(cljs.core.vector_QMARK_.call(null,gs)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gs], null):gs);
if(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,gs__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid predicate expression "),cljs.core.str(gs__$1)].join('')),cljs.core.str("\n"),cljs.core.str("(every? symbol? gs)")].join('')));
}

if(cljs.core.every_QMARK_.call(null,((function (gs__$1,vec__1166,p,_,gs){
return (function (p1__38_SHARP_){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.match.preds),p1__38_SHARP_);
});})(gs__$1,vec__1166,p,_,gs))
,gs__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Unknown predicate in "),cljs.core.str(gs__$1)].join('')),cljs.core.str("\n"),cljs.core.str("(every? (fn* [p1__38#] (contains? (clojure.core/deref preds) p1__38#)) gs)")].join('')));
}

return cljs.core.match.predicate_pattern.call(null,cljs.core.match.emit_pattern.call(null,p),cljs.core.set.call(null,gs__$1));
}));
cljs.core._add_method.call(null,cljs.core.match.emit_pattern_for_syntax,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",(-1987822328)),new cljs.core.Keyword(null,"guard","guard",(-873147811))], null),(function (p__1169){
var vec__1170 = p__1169;
var p = cljs.core.nth.call(null,vec__1170,(0),null);
var _ = cljs.core.nth.call(null,vec__1170,(1),null);
var gs = cljs.core.nth.call(null,vec__1170,(2),null);
var gs__$1 = ((!(cljs.core.vector_QMARK_.call(null,gs)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gs], null):gs);
return cljs.core.match.guard_pattern.call(null,cljs.core.match.emit_pattern.call(null,p),cljs.core.set.call(null,gs__$1));
}));
cljs.core._add_method.call(null,cljs.core.match.emit_pattern_for_syntax,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",(-1987822328)),new cljs.core.Keyword(null,"seq","seq",(-1817803783))], null),(function (pat){
var p = cljs.core.first.call(null,pat);
if(cljs.core.empty_QMARK_.call(null,p)){
return cljs.core.match.literal_pattern.call(null,cljs.core.List.EMPTY);
} else {
return cljs.core.match.seq_pattern.call(null,cljs.core.match.emit_patterns.call(null,p,new cljs.core.Keyword(null,"seq","seq",(-1817803783))));
}
}));
cljs.core._add_method.call(null,cljs.core.match.emit_pattern_for_syntax,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",(-1987822328)),new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296))], null),(function (p__1173){
var vec__1174 = p__1173;
var p = cljs.core.nth.call(null,vec__1174,(0),null);
var t = cljs.core.nth.call(null,vec__1174,(1),null);
var offset_key = cljs.core.nth.call(null,vec__1174,(2),null);
var offset = cljs.core.nth.call(null,vec__1174,(3),null);
var ps = cljs.core.match.emit_patterns.call(null,p,new cljs.core.Keyword(null,"vector","vector",(1902966158)));
return cljs.core.match.vector_pattern.call(null,ps,t,offset,cljs.core.some.call(null,cljs.core.match.rest_pattern_QMARK_,ps));
}));
cljs.core._add_method.call(null,cljs.core.match.emit_pattern_for_syntax,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",(-1987822328)),new cljs.core.Keyword(null,"only","only",(1907811652))], null),(function (p__1177){
var vec__1178 = p__1177;
var p = cljs.core.nth.call(null,vec__1178,(0),null);
var _ = cljs.core.nth.call(null,vec__1178,(1),null);
var only = cljs.core.nth.call(null,vec__1178,(2),null);
return cljs.core.with_meta.call(null,cljs.core.match.emit_pattern.call(null,p),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"only","only",(1907811652)),only], null));
}));
cljs.core._add_method.call(null,cljs.core.match.emit_pattern_for_syntax,new cljs.core.Keyword(null,"default","default",(-1987822328)),(function (p__1181){
var vec__1182 = p__1181;
var _ = cljs.core.nth.call(null,vec__1182,(0),null);
var s = cljs.core.nth.call(null,vec__1182,(1),null);
var l = vec__1182;
throw (new Error([cljs.core.str("Invalid list syntax "),cljs.core.str(s),cljs.core.str(" in "),cljs.core.str(l),cljs.core.str(". "),cljs.core.str("Valid syntax: "),cljs.core.str(cljs.core.vec.call(null,cljs.core.remove.call(null,((function (vec__1182,_,s,l){
return (function (p1__39_SHARP_){
return cljs.core._EQ_.call(null,p1__39_SHARP_,new cljs.core.Keyword(null,"default","default",(-1987822328)));
});})(vec__1182,_,s,l))
,cljs.core.keys.call(null,cljs.core.match.emit_pattern_for_syntax.getMethodTable()))))].join('')));
}));
var void_1195 = {};
var void_QMARK__1196 = ((function (void_1195){
return (function (p1__40_SHARP_){
return (void_1195 === p1__40_SHARP_);
});})(void_1195))
;
var infix_keyword_QMARK__1197 = ((function (void_1195,void_QMARK__1196){
return (function (p1__41_SHARP_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"when","when",(-576417306)),null,new cljs.core.Keyword(null,"as","as",(1148689641)),null,new cljs.core.Keyword(null,"guard","guard",(-873147811)),null], null), null).call(null,p1__41_SHARP_);
});})(void_1195,void_QMARK__1196))
;
(function (){
cljs.core.match.regroup_keywords = ((function (void_1195,void_QMARK__1196,infix_keyword_QMARK__1197){
return (function cljs$core$match$regroup_keywords(pattern){
if(cljs.core.vector_QMARK_.call(null,pattern)){
return cljs.core.first.call(null,cljs.core.reduce.call(null,((function (void_1195,void_QMARK__1196,infix_keyword_QMARK__1197){
return (function (p__1191,r){
var vec__1192 = p__1191;
var result = cljs.core.nth.call(null,vec__1192,(0),null);
var p = cljs.core.nth.call(null,vec__1192,(1),null);
var q = cljs.core.nth.call(null,vec__1192,(2),null);
if(cljs.core.truth_(void_QMARK__1196.call(null,p))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,q,r], null);
} else {
if(cljs.core.truth_((function (){var and__20770__auto__ = cljs.core.not.call(null,void_QMARK__1196.call(null,r));
if(and__20770__auto__){
return infix_keyword_QMARK__1197.call(null,q);
} else {
return and__20770__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,result,(function (){var x__23399__auto__ = cljs.core.match.regroup_keywords.call(null,p);
return cljs.core._conj.call(null,(function (){var x__23399__auto____$1 = q;
return cljs.core._conj.call(null,(function (){var x__23399__auto____$2 = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto____$2);
})(),x__23399__auto____$1);
})(),x__23399__auto__);
})()),void_1195,void_1195], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,result,cljs.core.match.regroup_keywords.call(null,p)),q,r], null);

}
}
});})(void_1195,void_QMARK__1196,infix_keyword_QMARK__1197))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,void_1195,void_1195], null),cljs.core.conj.call(null,pattern,void_1195,void_1195)));
} else {
if(cljs.core.seq_QMARK_.call(null,pattern)){
return cljs.core.cons.call(null,cljs.core.match.regroup_keywords.call(null,cljs.core.first.call(null,pattern)),cljs.core.rest.call(null,pattern));
} else {
return pattern;

}
}
});})(void_1195,void_QMARK__1196,infix_keyword_QMARK__1197))
; return (
new cljs.core.Var(function(){return cljs.core.match.regroup_keywords;},new cljs.core.Symbol("cljs.core.match","regroup-keywords","cljs.core.match/regroup-keywords",(-353034640),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"regroup-keywords","regroup-keywords",(-1537123194),null),"cljs/core/match.cljc",(25),(3),(1968),(1968),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pattern","pattern",(1882666950),null)], null)),null,(cljs.core.truth_(cljs.core.match.regroup_keywords)?cljs.core.match.regroup_keywords.cljs$lang$test:null)])));})()
;
/**
 * Returns a pattern with pattern-keywords (:when and :as) properly
 *  grouped.  The original pattern may use the 'flattened' syntax.
 *  For example, a 'flattened' pattern row like [a b :when even?] is
 *  grouped as [a (b :when even?)].
 */
(function (){
cljs.core.match.group_keywords = (function cljs$core$match$group_keywords(pattern){
if(cljs.core.vector_QMARK_.call(null,pattern)){
return cljs.core.match.regroup_keywords.call(null,pattern);
} else {
return pattern;
}
}); return (
new cljs.core.Var(function(){return cljs.core.match.group_keywords;},new cljs.core.Symbol("cljs.core.match","group-keywords","cljs.core.match/group-keywords",(-1759559240),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"group-keywords","group-keywords",(-1376615818),null),"cljs/core/match.cljc",(22),(2),(1987),(1987),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pattern","pattern",(1882666950),null)], null)),"Returns a pattern with pattern-keywords (:when and :as) properly\n    grouped.  The original pattern may use the 'flattened' syntax.\n    For example, a 'flattened' pattern row like [a b :when even?] is\n    grouped as [a (b :when even?)].",(cljs.core.truth_(cljs.core.match.group_keywords)?cljs.core.match.group_keywords.cljs$lang$test:null)])));})()
;
/**
 * Take an unprocessed pattern expression and an action expression and return
 * a pattern row of the processed pattern expression plus the action epxression.
 */
(function (){
cljs.core.match.to_pattern_row = (function cljs$core$match$to_pattern_row(pat,action){
var ps = cljs.core.map.call(null,cljs.core.match.emit_pattern,cljs.core.match.group_keywords.call(null,pat));
return cljs.core.match.pattern_row.call(null,ps,action);
}); return (
new cljs.core.Var(function(){return cljs.core.match.to_pattern_row;},new cljs.core.Symbol("cljs.core.match","to-pattern-row","cljs.core.match/to-pattern-row",(481817827),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"to-pattern-row","to-pattern-row",(1176744369),null),"cljs/core/match.cljc",(21),(1),(1995),(1995),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pat","pat",(222961363),null),new cljs.core.Symbol(null,"action","action",(829293503),null)], null)),"Take an unprocessed pattern expression and an action expression and return\n   a pattern row of the processed pattern expression plus the action epxression.",(cljs.core.truth_(cljs.core.match.to_pattern_row)?cljs.core.match.to_pattern_row.cljs$lang$test:null)])));})()
;
/**
 * Returns a vector of two elements: the set of all wildcards and the 
 * set of duplicate wildcards.  The underbar _ is excluded from both.
 */
(function (){
cljs.core.match.wildcards_and_duplicates = (function cljs$core$match$wildcards_and_duplicates(patterns){
var remaining = patterns;
var seen = cljs.core.PersistentHashSet.EMPTY;
var dups = cljs.core.PersistentHashSet.EMPTY;
while(true){
var temp__19520__auto__ = cljs.core.seq.call(null,remaining);
if(temp__19520__auto__){
var patterns__$1 = temp__19520__auto__;
var pat = cljs.core.first.call(null,patterns__$1);
var pats = cljs.core.rest.call(null,patterns__$1);
if((cljs.core._EQ_.call(null,pat,new cljs.core.Symbol(null,"_","_",(-1201019570),null))) || (cljs.core._EQ_.call(null,pat,new cljs.core.Symbol(null,"&","&",(-2144855648),null)))){
var G__1198 = pats;
var G__1199 = seen;
var G__1200 = dups;
remaining = G__1198;
seen = G__1199;
dups = G__1200;
continue;
} else {
if((pat instanceof cljs.core.Symbol)){
if(cljs.core.contains_QMARK_.call(null,seen,pat)){
var G__1201 = pats;
var G__1202 = seen;
var G__1203 = cljs.core.conj.call(null,dups,pat);
remaining = G__1201;
seen = G__1202;
dups = G__1203;
continue;
} else {
var G__1204 = pats;
var G__1205 = cljs.core.conj.call(null,seen,pat);
var G__1206 = dups;
remaining = G__1204;
seen = G__1205;
dups = G__1206;
continue;
}
} else {
if(cljs.core.vector_QMARK_.call(null,pat)){
var G__1207 = cljs.core.concat.call(null,pats,pat);
var G__1208 = seen;
var G__1209 = dups;
remaining = G__1207;
seen = G__1208;
dups = G__1209;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,pat)){
var G__1210 = cljs.core.concat.call(null,pats,cljs.core.vals.call(null,pat));
var G__1211 = seen;
var G__1212 = dups;
remaining = G__1210;
seen = G__1211;
dups = G__1212;
continue;
} else {
if(cljs.core.seq_QMARK_.call(null,pat)){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,pat),new cljs.core.Symbol(null,"quote","quote",(1377916282),null))){
var G__1213 = pats;
var G__1214 = seen;
var G__1215 = dups;
remaining = G__1213;
seen = G__1214;
dups = G__1215;
continue;
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,pat),new cljs.core.Keyword(null,"or","or",(235744169)))){
var wds = cljs.core.map.call(null,cljs.core.match.wildcards_and_duplicates,cljs.core.map.call(null,cljs.core.list,cljs.core.take_nth.call(null,(2),pat)));
var mseen = cljs.core.apply.call(null,clojure.set.union,cljs.core.map.call(null,cljs.core.first,wds));
var G__1216 = pats;
var G__1217 = clojure.set.union.call(null,seen,mseen);
var G__1218 = cljs.core.apply.call(null,clojure.set.union,dups,clojure.set.intersection.call(null,seen,mseen),cljs.core.map.call(null,cljs.core.second,wds));
remaining = G__1216;
seen = G__1217;
dups = G__1218;
continue;
} else {
if(cljs.core._EQ_.call(null,cljs.core.second.call(null,pat),new cljs.core.Keyword(null,"as","as",(1148689641)))){
var G__1219 = cljs.core.concat.call(null,pats,cljs.core.take_nth.call(null,(2),pat));
var G__1220 = seen;
var G__1221 = dups;
remaining = G__1219;
seen = G__1220;
dups = G__1221;
continue;
} else {
var G__1222 = cljs.core.conj.call(null,pats,cljs.core.first.call(null,pat));
var G__1223 = seen;
var G__1224 = dups;
remaining = G__1222;
seen = G__1223;
dups = G__1224;
continue;

}
}
}
} else {
var G__1225 = pats;
var G__1226 = seen;
var G__1227 = dups;
remaining = G__1225;
seen = G__1226;
dups = G__1227;
continue;

}
}
}
}
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seen,dups], null);
}
break;
}
}); return (
new cljs.core.Var(function(){return cljs.core.match.wildcards_and_duplicates;},new cljs.core.Symbol("cljs.core.match","wildcards-and-duplicates","cljs.core.match/wildcards-and-duplicates",(845345508),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"wildcards-and-duplicates","wildcards-and-duplicates",(1221474070),null),"cljs/core/match.cljc",(31),(1),(2002),(2002),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"patterns","patterns",(-1490353745),null)], null)),"Returns a vector of two elements: the set of all wildcards and the \n   set of duplicate wildcards.  The underbar _ is excluded from both.",(cljs.core.truth_(cljs.core.match.wildcards_and_duplicates)?cljs.core.match.wildcards_and_duplicates.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.find_duplicate_wildcards = (function cljs$core$match$find_duplicate_wildcards(pattern){
return cljs.core.second.call(null,cljs.core.match.wildcards_and_duplicates.call(null,pattern));
}); return (
new cljs.core.Var(function(){return cljs.core.match.find_duplicate_wildcards;},new cljs.core.Symbol("cljs.core.match","find-duplicate-wildcards","cljs.core.match/find-duplicate-wildcards",(1924634399),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"find-duplicate-wildcards","find-duplicate-wildcards",(673436749),null),"cljs/core/match.cljc",(31),(1),(2048),(2048),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pattern","pattern",(1882666950),null)], null)),null,(cljs.core.truth_(cljs.core.match.find_duplicate_wildcards)?cljs.core.match.find_duplicate_wildcards.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.check_pattern = (function cljs$core$match$check_pattern(pat,vars,nvars,rownum){
var pat__$1 = cljs.core.match.group_keywords.call(null,pat);
if(!(cljs.core.vector_QMARK_.call(null,pat__$1))){
throw (new Error([cljs.core.str("Pattern row "),cljs.core.str(rownum),cljs.core.str(": Pattern rows must be wrapped in []."),cljs.core.str(" Try changing "),cljs.core.str(pat__$1),cljs.core.str(" to ["),cljs.core.str(pat__$1),cljs.core.str("]."),cljs.core.str(((cljs.core.list_QMARK_.call(null,pat__$1))?[cljs.core.str(" Note: pattern rows are not patterns."),cljs.core.str(" They cannot be wrapped in a :when guard, for example")].join(''):null))].join('')));
} else {
}

if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,pat__$1),nvars)){
throw (new Error([cljs.core.str("Pattern row "),cljs.core.str(rownum),cljs.core.str(": Pattern row has differing number of patterns. "),cljs.core.str(pat__$1),cljs.core.str(" has "),cljs.core.str(cljs.core.count.call(null,pat__$1)),cljs.core.str(" pattern/s, expecting "),cljs.core.str(nvars),cljs.core.str(" for occurrences "),cljs.core.str(vars)].join('')));
} else {
}

var temp__19834__auto__ = cljs.core.seq.call(null,cljs.core.match.find_duplicate_wildcards.call(null,pat__$1));
if(temp__19834__auto__){
var duplicates = temp__19834__auto__;
throw (new Error([cljs.core.str("Pattern row "),cljs.core.str(rownum),cljs.core.str(": Pattern row reuses wildcards in "),cljs.core.str(pat__$1),cljs.core.str(".  The following wildcards are ambiguous: "),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,", ",cljs.core.sort.call(null,duplicates)))),cljs.core.str(".  There's no guarantee that the matched values will be same."),cljs.core.str("  Rename the occurrences uniquely.")].join('')));
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return cljs.core.match.check_pattern;},new cljs.core.Symbol("cljs.core.match","check-pattern","cljs.core.match/check-pattern",(-1112538106),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"check-pattern","check-pattern",(-953401016),null),"cljs/core/match.cljc",(20),(1),(2051),(2051),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pat","pat",(222961363),null),new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"nvars","nvars",(1278532042),null),new cljs.core.Symbol(null,"rownum","rownum",(98679281),null)], null)),null,(cljs.core.truth_(cljs.core.match.check_pattern)?cljs.core.match.check_pattern.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.check_matrix_args = (function cljs$core$match$check_matrix_args(vars,clauses){
if((vars instanceof cljs.core.Symbol)){
throw (new Error([cljs.core.str("Occurrences must be in a vector."),cljs.core.str(" Try changing "),cljs.core.str(vars),cljs.core.str(" to ["),cljs.core.str(vars),cljs.core.str("]")].join('')));
} else {
}

if(!(cljs.core.vector_QMARK_.call(null,vars))){
throw (new Error([cljs.core.str("Occurrences must be in a vector. "),cljs.core.str(vars),cljs.core.str(" is not a vector")].join('')));
} else {
}

var nvars_1266 = cljs.core.count.call(null,vars);
var cls_1267 = cljs.core.partition.call(null,(2),clauses);
var seq__1247_1268 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.butlast.call(null,cls_1267),cljs.core.rest.call(null,cljs.core.range.call(null))));
var chunk__1248_1269 = null;
var count__1249_1270 = (0);
var i__1250_1271 = (0);
while(true){
if((i__1250_1271 < count__1249_1270)){
var vec__1251_1272 = cljs.core._nth.call(null,chunk__1248_1269,i__1250_1271);
var vec__1254_1273 = cljs.core.nth.call(null,vec__1251_1272,(0),null);
var pat_1274 = cljs.core.nth.call(null,vec__1254_1273,(0),null);
var __1275 = cljs.core.nth.call(null,vec__1254_1273,(1),null);
var rownum_1276 = cljs.core.nth.call(null,vec__1251_1272,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",(-1508377146)),pat_1274)){
throw (new Error([cljs.core.str("Pattern row "),cljs.core.str(rownum_1276),cljs.core.str(": :else form only allowed on final pattern row")].join('')));
} else {
}

cljs.core.match.check_pattern.call(null,pat_1274,vars,nvars_1266,rownum_1276);

var G__1277 = seq__1247_1268;
var G__1278 = chunk__1248_1269;
var G__1279 = count__1249_1270;
var G__1280 = (i__1250_1271 + (1));
seq__1247_1268 = G__1277;
chunk__1248_1269 = G__1278;
count__1249_1270 = G__1279;
i__1250_1271 = G__1280;
continue;
} else {
var temp__19834__auto___1281 = cljs.core.seq.call(null,seq__1247_1268);
if(temp__19834__auto___1281){
var seq__1247_1282__$1 = temp__19834__auto___1281;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1247_1282__$1)){
var c__23363__auto___1283 = cljs.core.chunk_first.call(null,seq__1247_1282__$1);
var G__1284 = cljs.core.chunk_rest.call(null,seq__1247_1282__$1);
var G__1285 = c__23363__auto___1283;
var G__1286 = cljs.core.count.call(null,c__23363__auto___1283);
var G__1287 = (0);
seq__1247_1268 = G__1284;
chunk__1248_1269 = G__1285;
count__1249_1270 = G__1286;
i__1250_1271 = G__1287;
continue;
} else {
var vec__1257_1288 = cljs.core.first.call(null,seq__1247_1282__$1);
var vec__1260_1289 = cljs.core.nth.call(null,vec__1257_1288,(0),null);
var pat_1290 = cljs.core.nth.call(null,vec__1260_1289,(0),null);
var __1291 = cljs.core.nth.call(null,vec__1260_1289,(1),null);
var rownum_1292 = cljs.core.nth.call(null,vec__1257_1288,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",(-1508377146)),pat_1290)){
throw (new Error([cljs.core.str("Pattern row "),cljs.core.str(rownum_1292),cljs.core.str(": :else form only allowed on final pattern row")].join('')));
} else {
}

cljs.core.match.check_pattern.call(null,pat_1290,vars,nvars_1266,rownum_1292);

var G__1293 = cljs.core.next.call(null,seq__1247_1282__$1);
var G__1294 = null;
var G__1295 = (0);
var G__1296 = (0);
seq__1247_1268 = G__1293;
chunk__1248_1269 = G__1294;
count__1249_1270 = G__1295;
i__1250_1271 = G__1296;
continue;
}
} else {
}
}
break;
}

var temp__19834__auto___1297 = cljs.core.last.call(null,cls_1267);
if(cljs.core.truth_(temp__19834__auto___1297)){
var vec__1263_1298 = temp__19834__auto___1297;
var pat_1299 = cljs.core.nth.call(null,vec__1263_1298,(0),null);
var __1300 = cljs.core.nth.call(null,vec__1263_1298,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",(-1508377146)),pat_1299)){
} else {
cljs.core.match.check_pattern.call(null,pat_1299,vars,nvars_1266,cljs.core.count.call(null,cls_1267));
}
} else {
}

if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses))){
throw (new Error([cljs.core.str("Uneven number of Pattern Rows. The last form `"),cljs.core.str(cljs.core.last.call(null,clauses)),cljs.core.str("` seems out of place.")].join('')));
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return cljs.core.match.check_matrix_args;},new cljs.core.Symbol("cljs.core.match","check-matrix-args","cljs.core.match/check-matrix-args",(233489716),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"check-matrix-args","check-matrix-args",(1259735170),null),"cljs/core/match.cljc",(24),(1),(2082),(2082),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null)], null)),null,(cljs.core.truth_(cljs.core.match.check_matrix_args)?cljs.core.match.check_matrix_args.cljs$lang$test:null)])));})()
;
/**
 * Process the vars for the pattern matrix. If user provides an
 * expression, create a var and annotate via metadata with the
 * original expression.
 */
(function (){
cljs.core.match.process_vars = (function cljs$core$match$process_vars(vars){
var process_var = (function cljs$core$match$process_vars_$_process_var(var$){
if(!((var$ instanceof cljs.core.Symbol))){
var nsym = cljs.core.gensym.call(null,"ocr-");
return cljs.core.with_meta.call(null,nsym,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ocr-expr","ocr-expr",(-897749617)),var$], null));
} else {
return var$;
}
});
return cljs.core.vec.call(null,cljs.core.map.call(null,process_var,vars));
}); return (
new cljs.core.Var(function(){return cljs.core.match.process_vars;},new cljs.core.Symbol("cljs.core.match","process-vars","cljs.core.match/process-vars",(-1031982863),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"process-vars","process-vars",(-2067100409),null),"cljs/core/match.cljc",(19),(1),(2111),(2111),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vars","vars",(-406425690),null)], null)),"Process the vars for the pattern matrix. If user provides an\n   expression, create a var and annotate via metadata with the\n   original expression.",(cljs.core.truth_(cljs.core.match.process_vars)?cljs.core.match.process_vars.cljs$lang$test:null)])));})()
;
/**
 * Take the list of vars and sequence of unprocessed clauses and
 * return the pattern matrix. The pattern matrix contains the processed
 * pattern rows and the list of vars originally specified. Inserts
 * a last match - :else if provided by the user or a default match that
 * throws.
 */
(function (){
cljs.core.match.emit_matrix = (function cljs$core$match$emit_matrix(var_args){
var args1301 = [];
var len__23656__auto___1307 = arguments.length;
var i__23657__auto___1308 = (0);
while(true){
if((i__23657__auto___1308 < len__23656__auto___1307)){
args1301.push((arguments[i__23657__auto___1308]));

var G__1309 = (i__23657__auto___1308 + (1));
i__23657__auto___1308 = G__1309;
continue;
} else {
}
break;
}

var G__1303 = args1301.length;
switch (G__1303) {
case (2):
return cljs.core.match.emit_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.match.emit_matrix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1301.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.core.match.emit_matrix;},new cljs.core.Symbol("cljs.core.match","emit-matrix","cljs.core.match/emit-matrix",(634960561),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"emit-matrix","emit-matrix",(-28508221),null),"cljs/core/match.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null),new cljs.core.Symbol(null,"default","default",(-347290801),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null),new cljs.core.Symbol(null,"default","default",(-347290801),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(2123),(2123),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null),new cljs.core.Symbol(null,"default","default",(-347290801),null)], null)),"Take the list of vars and sequence of unprocessed clauses and\n   return the pattern matrix. The pattern matrix contains the processed\n   pattern rows and the list of vars originally specified. Inserts\n   a last match - :else if provided by the user or a default match that\n   throws.",(cljs.core.truth_(cljs.core.match.emit_matrix)?cljs.core.match.emit_matrix.cljs$lang$test:null)])));})()
;

cljs.core.match.emit_matrix.cljs$core$IFn$_invoke$arity$2 = (function (vars,clauses){
return cljs.core.match.emit_matrix.call(null,vars,clauses,true);
});

cljs.core.match.emit_matrix.cljs$core$IFn$_invoke$arity$3 = (function (vars,clauses,default$){
var cs = cljs.core.partition.call(null,(2),clauses);
var vs = cljs.core.match.process_vars.call(null,vars);
var cs__$1 = (function (){var vec__1304 = cljs.core.last.call(null,cs);
var p = cljs.core.nth.call(null,vec__1304,(0),null);
var a = cljs.core.nth.call(null,vec__1304,(1),null);
var last_match = cljs.core.vec.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,vars),new cljs.core.Symbol(null,"_","_",(-1201019570),null)));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",(-1508377146)),p)){
return cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.butlast.call(null,cs)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_match,a], null));
} else {
if(cljs.core.truth_(default$)){
return cljs.core.conj.call(null,cljs.core.vec.call(null,cs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_match,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",(595905694),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",(750655924),null)),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",(-1971828991),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),cljs.core.interpose.call(null," ",vs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()))], null));
} else {
return cs;
}
}
})();
return cljs.core.match.pattern_matrix.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,((function (cs,vs,cs__$1){
return (function (p1__42_SHARP_){
return cljs.core.apply.call(null,cljs.core.match.to_pattern_row,p1__42_SHARP_);
});})(cs,vs,cs__$1))
,cs__$1)),cljs.core.match.process_vars.call(null,vs));
});

cljs.core.match.emit_matrix.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return cljs.core.match.emit_matrix;},new cljs.core.Symbol("cljs.core.match","emit-matrix","cljs.core.match/emit-matrix",(634960561),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"emit-matrix","emit-matrix",(-28508221),null),"cljs/core/match.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null),new cljs.core.Symbol(null,"default","default",(-347290801),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null),new cljs.core.Symbol(null,"default","default",(-347290801),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(2123),(2123),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null),new cljs.core.Symbol(null,"default","default",(-347290801),null)], null)),"Take the list of vars and sequence of unprocessed clauses and\n   return the pattern matrix. The pattern matrix contains the processed\n   pattern rows and the list of vars originally specified. Inserts\n   a last match - :else if provided by the user or a default match that\n   throws.",(cljs.core.truth_(cljs.core.match.emit_matrix)?cljs.core.match.emit_matrix.cljs$lang$test:null)]));
(function (){
cljs.core.match.executable_form = (function cljs$core$match$executable_form(node){
return cljs.core.match.protocols.n_to_clj.call(null,node);
}); return (
new cljs.core.Var(function(){return cljs.core.match.executable_form;},new cljs.core.Symbol("cljs.core.match","executable-form","cljs.core.match/executable-form",(530683655),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"executable-form","executable-form",(-799715247),null),"cljs/core/match.cljc",(22),(1),(2155),(2155),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node","node",(-2073234571),null)], null)),null,(cljs.core.truth_(cljs.core.match.executable_form)?cljs.core.match.executable_form.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.recur_present_QMARK_ = (function cljs$core$match$recur_present_QMARK_(actions){
var analyze_action = (function cljs$core$match$recur_present_QMARK__$_analyze_action(action){
if(cljs.core.truth_((function (){var and__20770__auto__ = cljs.core.sequential_QMARK_.call(null,action);
if(and__20770__auto__){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"recur","recur",(1202958259),null),null], null), null),cljs.core.flatten.call(null,action));
} else {
return and__20770__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"recur-present","recur-present",(1178490943)),true], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
return cljs.core.some.call(null,new cljs.core.Keyword(null,"recur-present","recur-present",(1178490943)),cljs.core.map.call(null,analyze_action,actions));
}); return (
new cljs.core.Var(function(){return cljs.core.match.recur_present_QMARK_;},new cljs.core.Symbol("cljs.core.match","recur-present?","cljs.core.match/recur-present?",(748287178),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"recur-present?","recur-present?",(388843780),null),"cljs/core/match.cljc",(21),(1),(2161),(2161),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"actions","actions",(827874645),null)], null)),null,(cljs.core.truth_(cljs.core.match.recur_present_QMARK_)?cljs.core.match.recur_present_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
cljs.core.match.clj_form = (function cljs$core$match$clj_form(vars,clauses){
if(cljs.core.truth_(cljs.core.deref.call(null,cljs.core.match._STAR_syntax_check_STAR_))){
cljs.core.match.check_matrix_args.call(null,vars,clauses);
} else {
}

var actions = cljs.core.map.call(null,cljs.core.second,cljs.core.partition.call(null,(2),clauses));
var recur_present_QMARK_ = cljs.core.match.recur_present_QMARK_.call(null,actions);
if(cljs.core.not.call(null,(function (){var and__20770__auto__ = cljs.core.match._STAR_no_backtrack_STAR_;
if(cljs.core.truth_(and__20770__auto__)){
return recur_present_QMARK_;
} else {
return and__20770__auto__;
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Recur form present yet *no-backtrack* set to true"),cljs.core.str("\n"),cljs.core.str("(not (and *no-backtrack* recur-present?))")].join('')));
}

var _STAR_recur_present_STAR_1312 = cljs.core.match._STAR_recur_present_STAR_;
cljs.core.match._STAR_recur_present_STAR_ = (function (){var or__20817__auto__ = cljs.core.match._STAR_recur_present_STAR_;
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
var or__20817__auto____$1 = recur_present_QMARK_;
if(cljs.core.truth_(or__20817__auto____$1)){
return or__20817__auto____$1;
} else {
return cljs.core.match._STAR_no_backtrack_STAR_;
}
}
})();

try{return cljs.core.match.executable_form.call(null,cljs.core.match.compile.call(null,cljs.core.match.emit_matrix.call(null,vars,clauses)));
}finally {cljs.core.match._STAR_recur_present_STAR_ = _STAR_recur_present_STAR_1312;
}}); return (
new cljs.core.Var(function(){return cljs.core.match.clj_form;},new cljs.core.Symbol("cljs.core.match","clj-form","cljs.core.match/clj-form",(594749029),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"clj-form","clj-form",(1776608179),null),"cljs/core/match.cljc",(15),(1),(2168),(2168),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null)], null)),null,(cljs.core.truth_(cljs.core.match.clj_form)?cljs.core.match.clj_form.cljs$lang$test:null)])));})()
;
/**
 * Pattern match a row of occurrences. Take a vector of occurrences, vars.
 *   Clause question-answer syntax is like `cond`. Questions must be
 *   wrapped in a vector, with same arity as vars. Last question can be :else,
 *   which expands to a row of wildcards. Optionally may take a single
 *   var not wrapped in a vector, questions then need not be wrapped in a
 *   vector.
 * 
 *   Example:
 *   (let [x 1
 *      y 2]
 *  (match [x y 3]
 *    [1 2 3] :answer1
 *    :else :default-answer))
 */
(function (){
cljs.core.match.match = (function cljs$core$match$match(var_args){
var args__23658__auto__ = [];
var len__23656__auto___1327 = arguments.length;
var i__23657__auto___1328 = (0);
while(true){
if((i__23657__auto___1328 < len__23656__auto___1327)){
args__23658__auto__.push((arguments[i__23657__auto___1328]));

var G__1329 = (i__23657__auto___1328 + (1));
i__23657__auto___1328 = G__1329;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((3) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((3)),(0),null)):null);
return cljs.core.match.match.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return cljs.core.match.match;},new cljs.core.Symbol("cljs.core.match","match","cljs.core.match/match",(-1807915977),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"match","match",(-1434376219),null),"cljs/core/match.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(2186),true,(2186),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null)], null)),"Pattern match a row of occurrences. Take a vector of occurrences, vars.\n  Clause question-answer syntax is like `cond`. Questions must be\n  wrapped in a vector, with same arity as vars. Last question can be :else,\n  which expands to a row of wildcards. Optionally may take a single\n  var not wrapped in a vector, questions then need not be wrapped in a\n  vector.\n\n  Example:\n  (let [x 1\n        y 2]\n    (match [x y 3]\n      [1 2 3] :answer1\n      :else :default-answer))",(cljs.core.truth_(cljs.core.match.match)?cljs.core.match.match.cljs$lang$test:null)])));})()
;

cljs.core.match.match.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vars,clauses){
var vec__1317 = ((cljs.core.vector_QMARK_.call(null,vars))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,clauses], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(1),(5),cljs.core.PersistentVector.EMPTY_NODE,[vars],null)),cljs.core.mapcat.call(null,(function (p__1320){
var vec__1321 = p__1320;
var c = cljs.core.nth.call(null,vec__1321,(0),null);
var a = cljs.core.nth.call(null,vec__1321,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.not_EQ_.call(null,c,new cljs.core.Keyword(null,"else","else",(-1508377146))))?(new cljs.core.PersistentVector(null,(1),(5),cljs.core.PersistentVector.EMPTY_NODE,[c],null)):c),a], null);
}),cljs.core.partition.call(null,(2),clauses))], null));
var vars__$1 = cljs.core.nth.call(null,vec__1317,(0),null);
var clauses__$1 = cljs.core.nth.call(null,vec__1317,(1),null);
var _STAR_line_STAR_1324 = cljs.core.match._STAR_line_STAR_;
var _STAR_locals_STAR_1325 = cljs.core.match._STAR_locals_STAR_;
var _STAR_warned_STAR_1326 = cljs.core.match._STAR_warned_STAR_;
cljs.core.match._STAR_line_STAR_ = new cljs.core.Keyword(null,"line","line",(212345235)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,_AMPERSAND_form));

cljs.core.match._STAR_locals_STAR_ = cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Symbol(null,"_","_",(-1201019570),null));

cljs.core.match._STAR_warned_STAR_ = cljs.core.atom.call(null,false);

try{return cljs.core.match.clj_form.call(null,vars__$1,clauses__$1);
}finally {cljs.core.match._STAR_warned_STAR_ = _STAR_warned_STAR_1326;

cljs.core.match._STAR_locals_STAR_ = _STAR_locals_STAR_1325;

cljs.core.match._STAR_line_STAR_ = _STAR_line_STAR_1324;
}});

cljs.core.match.match.cljs$lang$maxFixedArity = (3);

cljs.core.match.match.cljs$lang$applyTo = (function (seq1313){
var G__1314 = cljs.core.first.call(null,seq1313);
var seq1313__$1 = cljs.core.next.call(null,seq1313);
var G__1315 = cljs.core.first.call(null,seq1313__$1);
var seq1313__$2 = cljs.core.next.call(null,seq1313__$1);
var G__1316 = cljs.core.first.call(null,seq1313__$2);
var seq1313__$3 = cljs.core.next.call(null,seq1313__$2);
return cljs.core.match.match.cljs$core$IFn$_invoke$arity$variadic(G__1314,G__1315,G__1316,seq1313__$3);
});

new cljs.core.Var(function(){return cljs.core.match.match;},new cljs.core.Symbol("cljs.core.match","match","cljs.core.match/match",(-1807915977),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"match","match",(-1434376219),null),"cljs/core/match.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(2186),true,(2186),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null)], null)),"Pattern match a row of occurrences. Take a vector of occurrences, vars.\n  Clause question-answer syntax is like `cond`. Questions must be\n  wrapped in a vector, with same arity as vars. Last question can be :else,\n  which expands to a row of wildcards. Optionally may take a single\n  var not wrapped in a vector, questions then need not be wrapped in a\n  vector.\n\n  Example:\n  (let [x 1\n        y 2]\n    (match [x y 3]\n      [1 2 3] :answer1\n      :else :default-answer))",(cljs.core.truth_(cljs.core.match.match)?cljs.core.match.match.cljs$lang$test:null)]));

cljs.core.match.match.cljs$lang$macro = true;
(function (){
cljs.core.match.matchv = (function cljs$core$match$matchv(var_args){
var args__23658__auto__ = [];
var len__23656__auto___1339 = arguments.length;
var i__23657__auto___1340 = (0);
while(true){
if((i__23657__auto___1340 < len__23656__auto___1339)){
args__23658__auto__.push((arguments[i__23657__auto___1340]));

var G__1341 = (i__23657__auto___1340 + (1));
i__23657__auto___1340 = G__1341;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((4) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((4)),(0),null)):null);
return cljs.core.match.matchv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return cljs.core.match.matchv;},new cljs.core.Symbol("cljs.core.match","matchv","cljs.core.match/matchv",(-474438741),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"matchv","matchv",(717546749),null),"cljs/core/match.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(2213),true,(2213),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null)], null)),null,(cljs.core.truth_(cljs.core.match.matchv)?cljs.core.match.matchv.cljs$lang$test:null)])));})()
;

cljs.core.match.matchv.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,vars,clauses){
var _STAR_vector_type_STAR_1335 = cljs.core.match._STAR_vector_type_STAR_;
var _STAR_line_STAR_1336 = cljs.core.match._STAR_line_STAR_;
var _STAR_locals_STAR_1337 = cljs.core.match._STAR_locals_STAR_;
var _STAR_warned_STAR_1338 = cljs.core.match._STAR_warned_STAR_;
cljs.core.match._STAR_vector_type_STAR_ = type;

cljs.core.match._STAR_line_STAR_ = new cljs.core.Keyword(null,"line","line",(212345235)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,_AMPERSAND_form));

cljs.core.match._STAR_locals_STAR_ = cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Symbol(null,"_","_",(-1201019570),null));

cljs.core.match._STAR_warned_STAR_ = cljs.core.atom.call(null,false);

try{return cljs.core.match.clj_form.call(null,vars,clauses);
}finally {cljs.core.match._STAR_warned_STAR_ = _STAR_warned_STAR_1338;

cljs.core.match._STAR_locals_STAR_ = _STAR_locals_STAR_1337;

cljs.core.match._STAR_line_STAR_ = _STAR_line_STAR_1336;

cljs.core.match._STAR_vector_type_STAR_ = _STAR_vector_type_STAR_1335;
}});

cljs.core.match.matchv.cljs$lang$maxFixedArity = (4);

cljs.core.match.matchv.cljs$lang$applyTo = (function (seq1330){
var G__1331 = cljs.core.first.call(null,seq1330);
var seq1330__$1 = cljs.core.next.call(null,seq1330);
var G__1332 = cljs.core.first.call(null,seq1330__$1);
var seq1330__$2 = cljs.core.next.call(null,seq1330__$1);
var G__1333 = cljs.core.first.call(null,seq1330__$2);
var seq1330__$3 = cljs.core.next.call(null,seq1330__$2);
var G__1334 = cljs.core.first.call(null,seq1330__$3);
var seq1330__$4 = cljs.core.next.call(null,seq1330__$3);
return cljs.core.match.matchv.cljs$core$IFn$_invoke$arity$variadic(G__1331,G__1332,G__1333,G__1334,seq1330__$4);
});

new cljs.core.Var(function(){return cljs.core.match.matchv;},new cljs.core.Symbol("cljs.core.match","matchv","cljs.core.match/matchv",(-474438741),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"matchv","matchv",(717546749),null),"cljs/core/match.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(2213),true,(2213),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null)], null)),null,(cljs.core.truth_(cljs.core.match.matchv)?cljs.core.match.matchv.cljs$lang$test:null)]));

cljs.core.match.matchv.cljs$lang$macro = true;
/**
 * Same as match but supports IMatchLookup when
 *   matching maps.
 */
(function (){
cljs.core.match.matchm = (function cljs$core$match$matchm(var_args){
var args__23658__auto__ = [];
var len__23656__auto___1357 = arguments.length;
var i__23657__auto___1358 = (0);
while(true){
if((i__23657__auto___1358 < len__23656__auto___1357)){
args__23658__auto__.push((arguments[i__23657__auto___1358]));

var G__1359 = (i__23657__auto___1358 + (1));
i__23657__auto___1358 = G__1359;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((3) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((3)),(0),null)):null);
return cljs.core.match.matchm.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return cljs.core.match.matchm;},new cljs.core.Symbol("cljs.core.match","matchm","cljs.core.match/matchm",(698735528),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"matchm","matchm",(-499542662),null),"cljs/core/match.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(2220),true,(2220),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null)], null)),"Same as match but supports IMatchLookup when\n  matching maps.",(cljs.core.truth_(cljs.core.match.matchm)?cljs.core.match.matchm.cljs$lang$test:null)])));})()
;

cljs.core.match.matchm.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vars,clauses){
var vec__1346 = ((cljs.core.vector_QMARK_.call(null,vars))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,clauses], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(1),(5),cljs.core.PersistentVector.EMPTY_NODE,[vars],null)),cljs.core.mapcat.call(null,(function (p__1349){
var vec__1350 = p__1349;
var c = cljs.core.nth.call(null,vec__1350,(0),null);
var a = cljs.core.nth.call(null,vec__1350,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.not_EQ_.call(null,c,new cljs.core.Keyword(null,"else","else",(-1508377146))))?(new cljs.core.PersistentVector(null,(1),(5),cljs.core.PersistentVector.EMPTY_NODE,[c],null)):c),a], null);
}),cljs.core.partition.call(null,(2),clauses))], null));
var vars__$1 = cljs.core.nth.call(null,vec__1346,(0),null);
var clauses__$1 = cljs.core.nth.call(null,vec__1346,(1),null);
var _STAR_match_lookup_STAR_1353 = cljs.core.match._STAR_match_lookup_STAR_;
var _STAR_line_STAR_1354 = cljs.core.match._STAR_line_STAR_;
var _STAR_locals_STAR_1355 = cljs.core.match._STAR_locals_STAR_;
var _STAR_warned_STAR_1356 = cljs.core.match._STAR_warned_STAR_;
cljs.core.match._STAR_match_lookup_STAR_ = true;

cljs.core.match._STAR_line_STAR_ = new cljs.core.Keyword(null,"line","line",(212345235)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,_AMPERSAND_form));

cljs.core.match._STAR_locals_STAR_ = cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Symbol(null,"_","_",(-1201019570),null));

cljs.core.match._STAR_warned_STAR_ = cljs.core.atom.call(null,false);

try{return cljs.core.match.clj_form.call(null,vars__$1,clauses__$1);
}finally {cljs.core.match._STAR_warned_STAR_ = _STAR_warned_STAR_1356;

cljs.core.match._STAR_locals_STAR_ = _STAR_locals_STAR_1355;

cljs.core.match._STAR_line_STAR_ = _STAR_line_STAR_1354;

cljs.core.match._STAR_match_lookup_STAR_ = _STAR_match_lookup_STAR_1353;
}});

cljs.core.match.matchm.cljs$lang$maxFixedArity = (3);

cljs.core.match.matchm.cljs$lang$applyTo = (function (seq1342){
var G__1343 = cljs.core.first.call(null,seq1342);
var seq1342__$1 = cljs.core.next.call(null,seq1342);
var G__1344 = cljs.core.first.call(null,seq1342__$1);
var seq1342__$2 = cljs.core.next.call(null,seq1342__$1);
var G__1345 = cljs.core.first.call(null,seq1342__$2);
var seq1342__$3 = cljs.core.next.call(null,seq1342__$2);
return cljs.core.match.matchm.cljs$core$IFn$_invoke$arity$variadic(G__1343,G__1344,G__1345,seq1342__$3);
});

new cljs.core.Var(function(){return cljs.core.match.matchm;},new cljs.core.Symbol("cljs.core.match","matchm","cljs.core.match/matchm",(698735528),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"matchm","matchm",(-499542662),null),"cljs/core/match.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(2220),true,(2220),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null)], null)),"Same as match but supports IMatchLookup when\n  matching maps.",(cljs.core.truth_(cljs.core.match.matchm)?cljs.core.match.matchm.cljs$lang$test:null)]));

cljs.core.match.matchm.cljs$lang$macro = true;
(function (){
cljs.core.match.match_let = (function cljs$core$match$match_let(var_args){
var args__23658__auto__ = [];
var len__23656__auto___1364 = arguments.length;
var i__23657__auto___1365 = (0);
while(true){
if((i__23657__auto___1365 < len__23656__auto___1364)){
args__23658__auto__.push((arguments[i__23657__auto___1365]));

var G__1366 = (i__23657__auto___1365 + (1));
i__23657__auto___1365 = G__1366;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((3) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((3)),(0),null)):null);
return cljs.core.match.match_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return cljs.core.match.match_let;},new cljs.core.Symbol("cljs.core.match","match-let","cljs.core.match/match-let",(-1360908464),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"match-let","match-let",(1752589026),null),"cljs/core/match.cljc",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(2237),true,(2237),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),null,(cljs.core.truth_(cljs.core.match.match_let)?cljs.core.match.match_let.cljs$lang$test:null)])));})()
;

cljs.core.match.match_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var bindvars_SHARP_ = cljs.core.take_nth.call(null,(2),bindings);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23399__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core.match","match","cljs.core.match/match",(-1807915977),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,bindvars_SHARP_)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),body));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
});

cljs.core.match.match_let.cljs$lang$maxFixedArity = (3);

cljs.core.match.match_let.cljs$lang$applyTo = (function (seq1360){
var G__1361 = cljs.core.first.call(null,seq1360);
var seq1360__$1 = cljs.core.next.call(null,seq1360);
var G__1362 = cljs.core.first.call(null,seq1360__$1);
var seq1360__$2 = cljs.core.next.call(null,seq1360__$1);
var G__1363 = cljs.core.first.call(null,seq1360__$2);
var seq1360__$3 = cljs.core.next.call(null,seq1360__$2);
return cljs.core.match.match_let.cljs$core$IFn$_invoke$arity$variadic(G__1361,G__1362,G__1363,seq1360__$3);
});

new cljs.core.Var(function(){return cljs.core.match.match_let;},new cljs.core.Symbol("cljs.core.match","match-let","cljs.core.match/match-let",(-1360908464),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"match-let","match-let",(1752589026),null),"cljs/core/match.cljc",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(2237),true,(2237),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),null,(cljs.core.truth_(cljs.core.match.match_let)?cljs.core.match.match_let.cljs$lang$test:null)]));

cljs.core.match.match_let.cljs$lang$macro = true;
(function (){
cljs.core.match.asets = (function cljs$core$match$asets(_AMPERSAND_form,_AMPERSAND_env,a,vs){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),cljs.core.map.call(null,(function (a__$1,b,c){
return cljs.core.concat.call(null,a__$1,(function (){var x__23399__auto__ = b;
return cljs.core._conj.call(null,(function (){var x__23399__auto____$1 = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto____$1);
})(),x__23399__auto__);
})());
}),cljs.core.repeat.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aset","cljs.core/aset",(-898215545),null)),(function (){var x__23399__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()))),cljs.core.range.call(null,cljs.core.count.call(null,vs)),vs),(function (){var x__23399__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
}); return (
new cljs.core.Var(function(){return cljs.core.match.asets;},new cljs.core.Symbol("cljs.core.match","asets","cljs.core.match/asets",(-1055923111),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"asets","asets",(412854063),null),"cljs/core/match.cljc",(16),(1),(2242),true,(2242),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",(-482876059),null),new cljs.core.Symbol(null,"vs","vs",(-381565563),null)], null)),null,(cljs.core.truth_(cljs.core.match.asets)?cljs.core.match.asets.cljs$lang$test:null)])));})()
;

cljs.core.match.asets.cljs$lang$macro = true;
(function (){
cljs.core.match.match = (function cljs$core$match$match(var_args){
var args__23658__auto__ = [];
var len__23656__auto___1381 = arguments.length;
var i__23657__auto___1382 = (0);
while(true){
if((i__23657__auto___1382 < len__23656__auto___1381)){
args__23658__auto__.push((arguments[i__23657__auto___1382]));

var G__1383 = (i__23657__auto___1382 + (1));
i__23657__auto___1382 = G__1383;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((3) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((3)),(0),null)):null);
return cljs.core.match.match.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return cljs.core.match.match;},new cljs.core.Symbol("cljs.core.match","match","cljs.core.match/match",(-1807915977),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"match","match",(-1434376219),null),"cljs/core/match.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(2248),true,(2248),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null)], null)),null,(cljs.core.truth_(cljs.core.match.match)?cljs.core.match.match.cljs$lang$test:null)])));})()
;

cljs.core.match.match.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vars,clauses){
var vec__1371 = ((cljs.core.vector_QMARK_.call(null,vars))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,clauses], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(1),(5),cljs.core.PersistentVector.EMPTY_NODE,[vars],null)),cljs.core.mapcat.call(null,(function (p__1374){
var vec__1375 = p__1374;
var c = cljs.core.nth.call(null,vec__1375,(0),null);
var a = cljs.core.nth.call(null,vec__1375,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.not_EQ_.call(null,c,new cljs.core.Keyword(null,"else","else",(-1508377146))))?(new cljs.core.PersistentVector(null,(1),(5),cljs.core.PersistentVector.EMPTY_NODE,[c],null)):c),a], null);
}),cljs.core.partition.call(null,(2),clauses))], null));
var vars__$1 = cljs.core.nth.call(null,vec__1371,(0),null);
var clauses__$1 = cljs.core.nth.call(null,vec__1371,(1),null);
var _STAR_line_STAR_1378 = cljs.core.match._STAR_line_STAR_;
var _STAR_locals_STAR_1379 = cljs.core.match._STAR_locals_STAR_;
var _STAR_warned_STAR_1380 = cljs.core.match._STAR_warned_STAR_;
cljs.core.match._STAR_line_STAR_ = new cljs.core.Keyword(null,"line","line",(212345235)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,_AMPERSAND_form));

cljs.core.match._STAR_locals_STAR_ = cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"locals","locals",(535295783)).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env),new cljs.core.Symbol(null,"_","_",(-1201019570),null));

cljs.core.match._STAR_warned_STAR_ = cljs.core.atom.call(null,false);

try{return cljs.core.match.clj_form.call(null,vars__$1,clauses__$1);
}finally {cljs.core.match._STAR_warned_STAR_ = _STAR_warned_STAR_1380;

cljs.core.match._STAR_locals_STAR_ = _STAR_locals_STAR_1379;

cljs.core.match._STAR_line_STAR_ = _STAR_line_STAR_1378;
}});

cljs.core.match.match.cljs$lang$maxFixedArity = (3);

cljs.core.match.match.cljs$lang$applyTo = (function (seq1367){
var G__1368 = cljs.core.first.call(null,seq1367);
var seq1367__$1 = cljs.core.next.call(null,seq1367);
var G__1369 = cljs.core.first.call(null,seq1367__$1);
var seq1367__$2 = cljs.core.next.call(null,seq1367__$1);
var G__1370 = cljs.core.first.call(null,seq1367__$2);
var seq1367__$3 = cljs.core.next.call(null,seq1367__$2);
return cljs.core.match.match.cljs$core$IFn$_invoke$arity$variadic(G__1368,G__1369,G__1370,seq1367__$3);
});

new cljs.core.Var(function(){return cljs.core.match.match;},new cljs.core.Symbol("cljs.core.match","match","cljs.core.match/match",(-1807915977),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"match","match",(-1434376219),null),"cljs/core/match.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(2248),true,(2248),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null)], null)),null,(cljs.core.truth_(cljs.core.match.match)?cljs.core.match.match.cljs$lang$test:null)]));

cljs.core.match.match.cljs$lang$macro = true;
(function (){
cljs.core.match.match_STAR_ = (function cljs$core$match$match_STAR_(var_args){
var args__23658__auto__ = [];
var len__23656__auto___1399 = arguments.length;
var i__23657__auto___1400 = (0);
while(true){
if((i__23657__auto___1400 < len__23656__auto___1399)){
args__23658__auto__.push((arguments[i__23657__auto___1400]));

var G__1401 = (i__23657__auto___1400 + (1));
i__23657__auto___1400 = G__1401;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((3) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((3)),(0),null)):null);
return cljs.core.match.match_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return cljs.core.match.match_STAR_;},new cljs.core.Symbol("cljs.core.match","match*","cljs.core.match/match*",(-529932879),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"match*","match*",(664607427),null),"cljs/core/match.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(2262),true,(2262),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null)], null)),null,(cljs.core.truth_(cljs.core.match.match_STAR_)?cljs.core.match.match_STAR_.cljs$lang$test:null)])));})()
;

cljs.core.match.match_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vars,clauses){
var vec__1388 = ((cljs.core.vector_QMARK_.call(null,vars))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,clauses], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(1),(5),cljs.core.PersistentVector.EMPTY_NODE,[vars],null)),cljs.core.mapcat.call(null,(function (p__1391){
var vec__1392 = p__1391;
var c = cljs.core.nth.call(null,vec__1392,(0),null);
var a = cljs.core.nth.call(null,vec__1392,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.not_EQ_.call(null,c,new cljs.core.Keyword(null,"else","else",(-1508377146))))?(new cljs.core.PersistentVector(null,(1),(5),cljs.core.PersistentVector.EMPTY_NODE,[c],null)):c),a], null);
}),cljs.core.partition.call(null,(2),clauses))], null));
var vars__$1 = cljs.core.nth.call(null,vec__1388,(0),null);
var clauses__$1 = cljs.core.nth.call(null,vec__1388,(1),null);
var _STAR_line_STAR_1395 = cljs.core.match._STAR_line_STAR_;
var _STAR_locals_STAR_1396 = cljs.core.match._STAR_locals_STAR_;
var _STAR_warned_STAR_1397 = cljs.core.match._STAR_warned_STAR_;
var _STAR_no_backtrack_STAR_1398 = cljs.core.match._STAR_no_backtrack_STAR_;
cljs.core.match._STAR_line_STAR_ = new cljs.core.Keyword(null,"line","line",(212345235)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,_AMPERSAND_form));

cljs.core.match._STAR_locals_STAR_ = cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"locals","locals",(535295783)).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env),new cljs.core.Symbol(null,"_","_",(-1201019570),null));

cljs.core.match._STAR_warned_STAR_ = cljs.core.atom.call(null,false);

cljs.core.match._STAR_no_backtrack_STAR_ = true;

try{return cljs.core.match.clj_form.call(null,vars__$1,clauses__$1);
}finally {cljs.core.match._STAR_no_backtrack_STAR_ = _STAR_no_backtrack_STAR_1398;

cljs.core.match._STAR_warned_STAR_ = _STAR_warned_STAR_1397;

cljs.core.match._STAR_locals_STAR_ = _STAR_locals_STAR_1396;

cljs.core.match._STAR_line_STAR_ = _STAR_line_STAR_1395;
}});

cljs.core.match.match_STAR_.cljs$lang$maxFixedArity = (3);

cljs.core.match.match_STAR_.cljs$lang$applyTo = (function (seq1384){
var G__1385 = cljs.core.first.call(null,seq1384);
var seq1384__$1 = cljs.core.next.call(null,seq1384);
var G__1386 = cljs.core.first.call(null,seq1384__$1);
var seq1384__$2 = cljs.core.next.call(null,seq1384__$1);
var G__1387 = cljs.core.first.call(null,seq1384__$2);
var seq1384__$3 = cljs.core.next.call(null,seq1384__$2);
return cljs.core.match.match_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__1385,G__1386,G__1387,seq1384__$3);
});

new cljs.core.Var(function(){return cljs.core.match.match_STAR_;},new cljs.core.Symbol("cljs.core.match","match*","cljs.core.match/match*",(-529932879),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"match*","match*",(664607427),null),"cljs/core/match.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(2262),true,(2262),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null)], null)),null,(cljs.core.truth_(cljs.core.match.match_STAR_)?cljs.core.match.match_STAR_.cljs$lang$test:null)]));

cljs.core.match.match_STAR_.cljs$lang$macro = true;
(function (){
cljs.core.match.matchv = (function cljs$core$match$matchv(var_args){
var args__23658__auto__ = [];
var len__23656__auto___1411 = arguments.length;
var i__23657__auto___1412 = (0);
while(true){
if((i__23657__auto___1412 < len__23656__auto___1411)){
args__23658__auto__.push((arguments[i__23657__auto___1412]));

var G__1413 = (i__23657__auto___1412 + (1));
i__23657__auto___1412 = G__1413;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((4) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((4)),(0),null)):null);
return cljs.core.match.matchv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return cljs.core.match.matchv;},new cljs.core.Symbol("cljs.core.match","matchv","cljs.core.match/matchv",(-474438741),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"matchv","matchv",(717546749),null),"cljs/core/match.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(2277),true,(2277),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null)], null)),null,(cljs.core.truth_(cljs.core.match.matchv)?cljs.core.match.matchv.cljs$lang$test:null)])));})()
;

cljs.core.match.matchv.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,vars,clauses){
var _STAR_vector_type_STAR_1407 = cljs.core.match._STAR_vector_type_STAR_;
var _STAR_line_STAR_1408 = cljs.core.match._STAR_line_STAR_;
var _STAR_locals_STAR_1409 = cljs.core.match._STAR_locals_STAR_;
var _STAR_warned_STAR_1410 = cljs.core.match._STAR_warned_STAR_;
cljs.core.match._STAR_vector_type_STAR_ = type;

cljs.core.match._STAR_line_STAR_ = new cljs.core.Keyword(null,"line","line",(212345235)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,_AMPERSAND_form));

cljs.core.match._STAR_locals_STAR_ = cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"locals","locals",(535295783)).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env),new cljs.core.Symbol(null,"_","_",(-1201019570),null));

cljs.core.match._STAR_warned_STAR_ = cljs.core.atom.call(null,false);

try{return cljs.core.match.clj_form.call(null,vars,clauses);
}finally {cljs.core.match._STAR_warned_STAR_ = _STAR_warned_STAR_1410;

cljs.core.match._STAR_locals_STAR_ = _STAR_locals_STAR_1409;

cljs.core.match._STAR_line_STAR_ = _STAR_line_STAR_1408;

cljs.core.match._STAR_vector_type_STAR_ = _STAR_vector_type_STAR_1407;
}});

cljs.core.match.matchv.cljs$lang$maxFixedArity = (4);

cljs.core.match.matchv.cljs$lang$applyTo = (function (seq1402){
var G__1403 = cljs.core.first.call(null,seq1402);
var seq1402__$1 = cljs.core.next.call(null,seq1402);
var G__1404 = cljs.core.first.call(null,seq1402__$1);
var seq1402__$2 = cljs.core.next.call(null,seq1402__$1);
var G__1405 = cljs.core.first.call(null,seq1402__$2);
var seq1402__$3 = cljs.core.next.call(null,seq1402__$2);
var G__1406 = cljs.core.first.call(null,seq1402__$3);
var seq1402__$4 = cljs.core.next.call(null,seq1402__$3);
return cljs.core.match.matchv.cljs$core$IFn$_invoke$arity$variadic(G__1403,G__1404,G__1405,G__1406,seq1402__$4);
});

new cljs.core.Var(function(){return cljs.core.match.matchv;},new cljs.core.Symbol("cljs.core.match","matchv","cljs.core.match/matchv",(-474438741),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"matchv","matchv",(717546749),null),"cljs/core/match.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(2277),true,(2277),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null)], null)),null,(cljs.core.truth_(cljs.core.match.matchv)?cljs.core.match.matchv.cljs$lang$test:null)]));

cljs.core.match.matchv.cljs$lang$macro = true;
(function (){
cljs.core.match.matchv_STAR_ = (function cljs$core$match$matchv_STAR_(var_args){
var args__23658__auto__ = [];
var len__23656__auto___1424 = arguments.length;
var i__23657__auto___1425 = (0);
while(true){
if((i__23657__auto___1425 < len__23656__auto___1424)){
args__23658__auto__.push((arguments[i__23657__auto___1425]));

var G__1426 = (i__23657__auto___1425 + (1));
i__23657__auto___1425 = G__1426;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((4) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((4)),(0),null)):null);
return cljs.core.match.matchv_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return cljs.core.match.matchv_STAR_;},new cljs.core.Symbol("cljs.core.match","matchv*","cljs.core.match/matchv*",(1086320113),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"matchv*","matchv*",(-1723126265),null),"cljs/core/match.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(2285),true,(2285),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null)], null)),null,(cljs.core.truth_(cljs.core.match.matchv_STAR_)?cljs.core.match.matchv_STAR_.cljs$lang$test:null)])));})()
;

cljs.core.match.matchv_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,vars,clauses){
var _STAR_vector_type_STAR_1419 = cljs.core.match._STAR_vector_type_STAR_;
var _STAR_line_STAR_1420 = cljs.core.match._STAR_line_STAR_;
var _STAR_locals_STAR_1421 = cljs.core.match._STAR_locals_STAR_;
var _STAR_warned_STAR_1422 = cljs.core.match._STAR_warned_STAR_;
var _STAR_no_backtrack_STAR_1423 = cljs.core.match._STAR_no_backtrack_STAR_;
cljs.core.match._STAR_vector_type_STAR_ = type;

cljs.core.match._STAR_line_STAR_ = new cljs.core.Keyword(null,"line","line",(212345235)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,_AMPERSAND_form));

cljs.core.match._STAR_locals_STAR_ = cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"locals","locals",(535295783)).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env),new cljs.core.Symbol(null,"_","_",(-1201019570),null));

cljs.core.match._STAR_warned_STAR_ = cljs.core.atom.call(null,false);

cljs.core.match._STAR_no_backtrack_STAR_ = true;

try{return cljs.core.match.clj_form.call(null,vars,clauses);
}finally {cljs.core.match._STAR_no_backtrack_STAR_ = _STAR_no_backtrack_STAR_1423;

cljs.core.match._STAR_warned_STAR_ = _STAR_warned_STAR_1422;

cljs.core.match._STAR_locals_STAR_ = _STAR_locals_STAR_1421;

cljs.core.match._STAR_line_STAR_ = _STAR_line_STAR_1420;

cljs.core.match._STAR_vector_type_STAR_ = _STAR_vector_type_STAR_1419;
}});

cljs.core.match.matchv_STAR_.cljs$lang$maxFixedArity = (4);

cljs.core.match.matchv_STAR_.cljs$lang$applyTo = (function (seq1414){
var G__1415 = cljs.core.first.call(null,seq1414);
var seq1414__$1 = cljs.core.next.call(null,seq1414);
var G__1416 = cljs.core.first.call(null,seq1414__$1);
var seq1414__$2 = cljs.core.next.call(null,seq1414__$1);
var G__1417 = cljs.core.first.call(null,seq1414__$2);
var seq1414__$3 = cljs.core.next.call(null,seq1414__$2);
var G__1418 = cljs.core.first.call(null,seq1414__$3);
var seq1414__$4 = cljs.core.next.call(null,seq1414__$3);
return cljs.core.match.matchv_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__1415,G__1416,G__1417,G__1418,seq1414__$4);
});

new cljs.core.Var(function(){return cljs.core.match.matchv_STAR_;},new cljs.core.Symbol("cljs.core.match","matchv*","cljs.core.match/matchv*",(1086320113),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"matchv*","matchv*",(-1723126265),null),"cljs/core/match.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(4),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(2285),true,(2285),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null)], null)),null,(cljs.core.truth_(cljs.core.match.matchv_STAR_)?cljs.core.match.matchv_STAR_.cljs$lang$test:null)]));

cljs.core.match.matchv_STAR_.cljs$lang$macro = true;
(function (){
cljs.core.match.matchm = (function cljs$core$match$matchm(var_args){
var args__23658__auto__ = [];
var len__23656__auto___1441 = arguments.length;
var i__23657__auto___1442 = (0);
while(true){
if((i__23657__auto___1442 < len__23656__auto___1441)){
args__23658__auto__.push((arguments[i__23657__auto___1442]));

var G__1443 = (i__23657__auto___1442 + (1));
i__23657__auto___1442 = G__1443;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((3) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((3)),(0),null)):null);
return cljs.core.match.matchm.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return cljs.core.match.matchm;},new cljs.core.Symbol("cljs.core.match","matchm","cljs.core.match/matchm",(698735528),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"matchm","matchm",(-499542662),null),"cljs/core/match.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(2293),true,(2293),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null)], null)),null,(cljs.core.truth_(cljs.core.match.matchm)?cljs.core.match.matchm.cljs$lang$test:null)])));})()
;

cljs.core.match.matchm.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vars,clauses){
var vec__1431 = ((cljs.core.vector_QMARK_.call(null,vars))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,clauses], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(1),(5),cljs.core.PersistentVector.EMPTY_NODE,[vars],null)),cljs.core.mapcat.call(null,(function (p__1434){
var vec__1435 = p__1434;
var c = cljs.core.nth.call(null,vec__1435,(0),null);
var a = cljs.core.nth.call(null,vec__1435,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.not_EQ_.call(null,c,new cljs.core.Keyword(null,"else","else",(-1508377146))))?(new cljs.core.PersistentVector(null,(1),(5),cljs.core.PersistentVector.EMPTY_NODE,[c],null)):c),a], null);
}),cljs.core.partition.call(null,(2),clauses))], null));
var vars__$1 = cljs.core.nth.call(null,vec__1431,(0),null);
var clauses__$1 = cljs.core.nth.call(null,vec__1431,(1),null);
var _STAR_line_STAR_1438 = cljs.core.match._STAR_line_STAR_;
var _STAR_locals_STAR_1439 = cljs.core.match._STAR_locals_STAR_;
var _STAR_warned_STAR_1440 = cljs.core.match._STAR_warned_STAR_;
cljs.core.match._STAR_line_STAR_ = new cljs.core.Keyword(null,"line","line",(212345235)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,_AMPERSAND_form));

cljs.core.match._STAR_locals_STAR_ = cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"locals","locals",(535295783)).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env),new cljs.core.Symbol(null,"_","_",(-1201019570),null));

cljs.core.match._STAR_warned_STAR_ = cljs.core.atom.call(null,false);

try{return cljs.core.match.clj_form.call(null,vars__$1,clauses__$1);
}finally {cljs.core.match._STAR_warned_STAR_ = _STAR_warned_STAR_1440;

cljs.core.match._STAR_locals_STAR_ = _STAR_locals_STAR_1439;

cljs.core.match._STAR_line_STAR_ = _STAR_line_STAR_1438;
}});

cljs.core.match.matchm.cljs$lang$maxFixedArity = (3);

cljs.core.match.matchm.cljs$lang$applyTo = (function (seq1427){
var G__1428 = cljs.core.first.call(null,seq1427);
var seq1427__$1 = cljs.core.next.call(null,seq1427);
var G__1429 = cljs.core.first.call(null,seq1427__$1);
var seq1427__$2 = cljs.core.next.call(null,seq1427__$1);
var G__1430 = cljs.core.first.call(null,seq1427__$2);
var seq1427__$3 = cljs.core.next.call(null,seq1427__$2);
return cljs.core.match.matchm.cljs$core$IFn$_invoke$arity$variadic(G__1428,G__1429,G__1430,seq1427__$3);
});

new cljs.core.Var(function(){return cljs.core.match.matchm;},new cljs.core.Symbol("cljs.core.match","matchm","cljs.core.match/matchm",(698735528),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"matchm","matchm",(-499542662),null),"cljs/core/match.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(2293),true,(2293),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"vars","vars",(-406425690),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null)], null)),null,(cljs.core.truth_(cljs.core.match.matchm)?cljs.core.match.matchm.cljs$lang$test:null)]));

cljs.core.match.matchm.cljs$lang$macro = true;
(function (){
cljs.core.match.match_let = (function cljs$core$match$match_let(var_args){
var args__23658__auto__ = [];
var len__23656__auto___1448 = arguments.length;
var i__23657__auto___1449 = (0);
while(true){
if((i__23657__auto___1449 < len__23656__auto___1448)){
args__23658__auto__.push((arguments[i__23657__auto___1449]));

var G__1450 = (i__23657__auto___1449 + (1));
i__23657__auto___1449 = G__1450;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((3) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((3)),(0),null)):null);
return cljs.core.match.match_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return cljs.core.match.match_let;},new cljs.core.Symbol("cljs.core.match","match-let","cljs.core.match/match-let",(-1360908464),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"match-let","match-let",(1752589026),null),"cljs/core/match.cljc",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(2307),true,(2307),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),null,(cljs.core.truth_(cljs.core.match.match_let)?cljs.core.match.match_let.cljs$lang$test:null)])));})()
;

cljs.core.match.match_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var bindvars_SHARP_ = cljs.core.take_nth.call(null,(2),bindings);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23399__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core.match","match","cljs.core.match/match",(-1807915977),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,bindvars_SHARP_)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),body));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
});

cljs.core.match.match_let.cljs$lang$maxFixedArity = (3);

cljs.core.match.match_let.cljs$lang$applyTo = (function (seq1444){
var G__1445 = cljs.core.first.call(null,seq1444);
var seq1444__$1 = cljs.core.next.call(null,seq1444);
var G__1446 = cljs.core.first.call(null,seq1444__$1);
var seq1444__$2 = cljs.core.next.call(null,seq1444__$1);
var G__1447 = cljs.core.first.call(null,seq1444__$2);
var seq1444__$3 = cljs.core.next.call(null,seq1444__$2);
return cljs.core.match.match_let.cljs$core$IFn$_invoke$arity$variadic(G__1445,G__1446,G__1447,seq1444__$3);
});

new cljs.core.Var(function(){return cljs.core.match.match_let;},new cljs.core.Symbol("cljs.core.match","match-let","cljs.core.match/match-let",(-1360908464),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"match-let","match-let",(1752589026),null),"cljs/core/match.cljc",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(2307),true,(2307),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),null,(cljs.core.truth_(cljs.core.match.match_let)?cljs.core.match.match_let.cljs$lang$test:null)]));

cljs.core.match.match_let.cljs$lang$macro = true;
(function (){
cljs.core.match.match_let_STAR_ = (function cljs$core$match$match_let_STAR_(var_args){
var args__23658__auto__ = [];
var len__23656__auto___1455 = arguments.length;
var i__23657__auto___1456 = (0);
while(true){
if((i__23657__auto___1456 < len__23656__auto___1455)){
args__23658__auto__.push((arguments[i__23657__auto___1456]));

var G__1457 = (i__23657__auto___1456 + (1));
i__23657__auto___1456 = G__1457;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((3) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((3)),(0),null)):null);
return cljs.core.match.match_let_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return cljs.core.match.match_let_STAR_;},new cljs.core.Symbol("cljs.core.match","match-let*","cljs.core.match/match-let*",(468405786),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"match-let*","match-let*",(1343720680),null),"cljs/core/match.cljc",(21),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(2313),true,(2313),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),null,(cljs.core.truth_(cljs.core.match.match_let_STAR_)?cljs.core.match.match_let_STAR_.cljs$lang$test:null)])));})()
;

cljs.core.match.match_let_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var bindvars_SHARP_ = cljs.core.take_nth.call(null,(2),bindings);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23399__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),(function (){var x__23399__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core.match","match*","cljs.core.match/match*",(-529932879),null)),(function (){var x__23399__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,bindvars_SHARP_)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})(),body));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23399__auto__);
})()));
});

cljs.core.match.match_let_STAR_.cljs$lang$maxFixedArity = (3);

cljs.core.match.match_let_STAR_.cljs$lang$applyTo = (function (seq1451){
var G__1452 = cljs.core.first.call(null,seq1451);
var seq1451__$1 = cljs.core.next.call(null,seq1451);
var G__1453 = cljs.core.first.call(null,seq1451__$1);
var seq1451__$2 = cljs.core.next.call(null,seq1451__$1);
var G__1454 = cljs.core.first.call(null,seq1451__$2);
var seq1451__$3 = cljs.core.next.call(null,seq1451__$2);
return cljs.core.match.match_let_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__1452,G__1453,G__1454,seq1451__$3);
});

new cljs.core.Var(function(){return cljs.core.match.match_let_STAR_;},new cljs.core.Symbol("cljs.core.match","match-let*","cljs.core.match/match-let*",(468405786),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.core.match","cljs.core.match",(445463996),null),new cljs.core.Symbol(null,"match-let*","match-let*",(1343720680),null),"cljs/core/match.cljc",(21),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(2313),true,(2313),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),null,(cljs.core.truth_(cljs.core.match.match_let_STAR_)?cljs.core.match.match_let_STAR_.cljs$lang$test:null)]));

cljs.core.match.match_let_STAR_.cljs$lang$macro = true;
