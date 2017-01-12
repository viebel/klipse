goog.provide("sqlingvo.expr");
/**
 * The regular expression used to parse a column identifier.
 */
(function (){
sqlingvo.expr._STAR_column_regex_STAR_ = /(([^.\/]+)\.)?(([^.\/]+)\.)?([^.\/]+)/; return (
new cljs.core.Var(function(){return sqlingvo.expr._STAR_column_regex_STAR_;},new cljs.core.Symbol("sqlingvo.expr","*column-regex*","sqlingvo.expr/*column-regex*",(-1116650114),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.expr","sqlingvo.expr",(-317330993),null),new cljs.core.Symbol(null,"*column-regex*","*column-regex*",(-854068408),null),"sqlingvo/expr.cljc",(30),(1),true,(4),(4),cljs.core.List.EMPTY,"The regular expression used to parse a column identifier.",(cljs.core.truth_(sqlingvo.expr._STAR_column_regex_STAR_)?sqlingvo.expr._STAR_column_regex_STAR_.cljs$lang$test:null)])));})()
;
/**
 * The regular expression used to parse a table identifier.
 */
(function (){
sqlingvo.expr._STAR_table_regex_STAR_ = /(([^.\/]+)\.)?([^.\/]+)/; return (
new cljs.core.Var(function(){return sqlingvo.expr._STAR_table_regex_STAR_;},new cljs.core.Symbol("sqlingvo.expr","*table-regex*","sqlingvo.expr/*table-regex*",(-1113929669),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.expr","sqlingvo.expr",(-317330993),null),new cljs.core.Symbol(null,"*table-regex*","*table-regex*",(1841259105),null),"sqlingvo/expr.cljc",(29),(1),true,(8),(8),cljs.core.List.EMPTY,"The regular expression used to parse a table identifier.",(cljs.core.truth_(sqlingvo.expr._STAR_table_regex_STAR_)?sqlingvo.expr._STAR_table_regex_STAR_.cljs$lang$test:null)])));})()
;

/**
 * @interface
 */
(function (){
sqlingvo.expr.IExpr = function(){}; return (
new cljs.core.Var(function(){return sqlingvo.expr.IExpr;},new cljs.core.Symbol("sqlingvo.expr","IExpr","sqlingvo.expr/IExpr",(-2004502358),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"sqlingvo.expr","sqlingvo.expr",(-317330993),null),new cljs.core.Symbol(null,"IExpr","IExpr",(-1196760352),null),"sqlingvo/expr.cljc",(19),(1),(12),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentArrayMap.fromArray([cljs.core.with_meta(new cljs.core.Symbol(null,"-parse-expr","-parse-expr",(1914532618),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),"Parse `x` and return the AST of a SQL expression."], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)], null)], true, false)], null),(12),cljs.core.List.EMPTY,null,cljs.core.list("@interface"),(cljs.core.truth_(sqlingvo.expr.IExpr)?sqlingvo.expr.IExpr.cljs$lang$test:null)])));})()
;

/**
 * Parse `x` and return the AST of a SQL expression.
 */
(function (){
sqlingvo.expr._parse_expr = (function sqlingvo$expr$_parse_expr(x){
if((!((x == null))) && (!((x.sqlingvo$expr$IExpr$_parse_expr$arity$1 == null)))){
return x.sqlingvo$expr$IExpr$_parse_expr$arity$1(x);
} else {
var x__23054__auto__ = (((x == null))?null:x);
var m__23055__auto__ = (sqlingvo.expr._parse_expr[goog.typeOf(x__23054__auto__)]);
if(!((m__23055__auto__ == null))){
return m__23055__auto__.call(null,x);
} else {
var m__23055__auto____$1 = (sqlingvo.expr._parse_expr["_"]);
if(!((m__23055__auto____$1 == null))){
return m__23055__auto____$1.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"IExpr.-parse-expr",x);
}
}
}
}); return (
new cljs.core.Var(function(){return sqlingvo.expr._parse_expr;},new cljs.core.Symbol("sqlingvo.expr","-parse-expr","sqlingvo.expr/-parse-expr",(-2109761168),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("sqlingvo.expr","IExpr","sqlingvo.expr/IExpr",(-2004502358),null),new cljs.core.Symbol(null,"sqlingvo.expr","sqlingvo.expr",(-317330993),null),new cljs.core.Symbol(null,"-parse-expr","-parse-expr",(1914532618),null),"sqlingvo/expr.cljc",(15),(1),(12),(13),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"Parse `x` and return the AST of a SQL expression.",(cljs.core.truth_(sqlingvo.expr._parse_expr)?sqlingvo.expr._parse_expr.cljs$lang$test:null)])));})()
;

/**
 * Returns true if `form` is an attribute for a composite type.
 */
(function (){
sqlingvo.expr.attribute_QMARK_ = (function sqlingvo$expr$attribute_QMARK_(form){
return ((form instanceof cljs.core.Symbol)) && (clojure.string.starts_with_QMARK_.call(null,[cljs.core.str(form)].join(''),".-"));
}); return (
new cljs.core.Var(function(){return sqlingvo.expr.attribute_QMARK_;},new cljs.core.Symbol("sqlingvo.expr","attribute?","sqlingvo.expr/attribute?",(889957495),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.expr","sqlingvo.expr",(-317330993),null),new cljs.core.Symbol(null,"attribute?","attribute?",(-450296259),null),"sqlingvo/expr.cljc",(17),(1),(15),(15),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",(16469056),null)], null)),"Returns true if `form` is an attribute for a composite type.",(cljs.core.truth_(sqlingvo.expr.attribute_QMARK_)?sqlingvo.expr.attribute_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * Parse the SQL expression `x` into an AST.
 */
(function (){
sqlingvo.expr.parse_expr = (function sqlingvo$expr$parse_expr(x){
return sqlingvo.expr._parse_expr.call(null,x);
}); return (
new cljs.core.Var(function(){return sqlingvo.expr.parse_expr;},new cljs.core.Symbol("sqlingvo.expr","parse-expr","sqlingvo.expr/parse-expr",(-2011152934),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.expr","sqlingvo.expr",(-317330993),null),new cljs.core.Symbol(null,"parse-expr","parse-expr",(-670906364),null),"sqlingvo/expr.cljc",(17),(1),(21),(21),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"Parse the SQL expression `x` into an AST.",(cljs.core.truth_(sqlingvo.expr.parse_expr)?sqlingvo.expr.parse_expr.cljs$lang$test:null)])));})()
;
/**
 * Parse the SQL expressions `xs` into an AST.
 */
(function (){
sqlingvo.expr.parse_exprs = (function sqlingvo$expr$parse_exprs(xs){
return cljs.core.mapv.call(null,sqlingvo.expr.parse_expr,cljs.core.remove.call(null,cljs.core.nil_QMARK_,xs));
}); return (
new cljs.core.Var(function(){return sqlingvo.expr.parse_exprs;},new cljs.core.Symbol("sqlingvo.expr","parse-exprs","sqlingvo.expr/parse-exprs",(1344207650),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.expr","sqlingvo.expr",(-317330993),null),new cljs.core.Symbol(null,"parse-exprs","parse-exprs",(3387112),null),"sqlingvo/expr.cljc",(18),(1),(26),(26),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"xs","xs",(-2004992428),null)], null)),"Parse the SQL expressions `xs` into an AST.",(cljs.core.truth_(sqlingvo.expr.parse_exprs)?sqlingvo.expr.parse_exprs.cljs$lang$test:null)])));})()
;

/**
* @constructor
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IFn}
*/
sqlingvo.expr.Stmt = (function (f){
this.f = f;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
sqlingvo.expr.Stmt.prototype.cljs$core$IDeref$_deref$arity$1 = (function (stmt){
var self__ = this;
var stmt__$1 = this;
var ast = cljs.core.second.call(null,self__.f.call(null,null));
return new cljs.core.Keyword(null,"eval-fn","eval-fn",(-1111644294)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"db","db",(993250759)).cljs$core$IFn$_invoke$arity$1(ast)).call(null,ast);
});

sqlingvo.expr.Stmt.prototype.call = (function (self__,n){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return self__.f.call(null,n);
});

sqlingvo.expr.Stmt.prototype.apply = (function (self__,args22){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args22)));
});

sqlingvo.expr.Stmt.prototype.cljs$core$IFn$_invoke$arity$1 = (function (n){
var self__ = this;
var this$ = this;
return self__.f.call(null,n);
});

sqlingvo.expr.Stmt.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null)], null);
});

sqlingvo.expr.Stmt.cljs$lang$type = true;

sqlingvo.expr.Stmt.cljs$lang$ctorStr = "sqlingvo.expr/Stmt";

sqlingvo.expr.Stmt.cljs$lang$ctorPrWriter = (function (this__22602__auto__,writer__22603__auto__,opt__22604__auto__){
return cljs.core._write.call(null,writer__22603__auto__,"sqlingvo.expr/Stmt");
});

(function (){
sqlingvo.expr.__GT_Stmt = (function sqlingvo$expr$__GT_Stmt(f){
return (new sqlingvo.expr.Stmt(f));
}); return (
new cljs.core.Var(function(){return sqlingvo.expr.__GT_Stmt;},new cljs.core.Symbol("sqlingvo.expr","->Stmt","sqlingvo.expr/->Stmt",(1811639674),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("cljs.core","IDeref","cljs.core/IDeref",(1331648568),null),null,new cljs.core.Symbol("cljs.core","IFn","cljs.core/IFn",(-920223129),null),null], null), null),new cljs.core.Symbol(null,"sqlingvo.expr","sqlingvo.expr",(-317330993),null),new cljs.core.Symbol(null,"->Stmt","->Stmt",(-1147652304),null),"sqlingvo/expr.cljc",(14),(1),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(31),(31),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null)], null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("cljs.core","IDeref","cljs.core/IDeref",(1331648568),null),null,new cljs.core.Symbol("cljs.core","IFn","cljs.core/IFn",(-920223129),null),null], null), null),null,(cljs.core.truth_(sqlingvo.expr.__GT_Stmt)?sqlingvo.expr.__GT_Stmt.cljs$lang$test:null)])));})()
;

/**
 * Returns the abstract syntax tree of `stmt`.
 */
(function (){
sqlingvo.expr.ast = (function sqlingvo$expr$ast(stmt){
if(cljs.core.map_QMARK_.call(null,stmt)){
return stmt;
} else {
if((stmt instanceof sqlingvo.expr.Stmt)){
return cljs.core.second.call(null,stmt.f.call(null,null));
} else {
return cljs.core.second.call(null,stmt.call(null,null));

}
}
}); return (
new cljs.core.Var(function(){return sqlingvo.expr.ast;},new cljs.core.Symbol("sqlingvo.expr","ast","sqlingvo.expr/ast",(-22839291),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.expr","sqlingvo.expr",(-317330993),null),new cljs.core.Symbol(null,"ast","ast",(780197459),null),"sqlingvo/expr.cljc",(10),(1),(40),(40),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stmt","stmt",(1915627230),null)], null)),"Returns the abstract syntax tree of `stmt`.",(cljs.core.truth_(sqlingvo.expr.ast)?sqlingvo.expr.ast.cljs$lang$test:null)])));})()
;
(function (){
sqlingvo.expr.stmt = (function sqlingvo$expr$stmt(x){
return (new sqlingvo.expr.Stmt(x));
}); return (
new cljs.core.Var(function(){return sqlingvo.expr.stmt;},new cljs.core.Symbol("sqlingvo.expr","stmt","sqlingvo.expr/stmt",(-2106533852),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.expr","sqlingvo.expr",(-317330993),null),new cljs.core.Symbol(null,"stmt","stmt",(1915627230),null),"sqlingvo/expr.cljc",(11),(1),(50),(50),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(sqlingvo.expr.stmt)?sqlingvo.expr.stmt.cljs$lang$test:null)])));})()
;
/**
 * Returns the qualified name of `k`.
 */
(function (){
sqlingvo.expr.qualified_name = (function sqlingvo$expr$qualified_name(k){
return clojure.string.replace.call(null,[cljs.core.str(k)].join(''),/^:/,"");
}); return (
new cljs.core.Var(function(){return sqlingvo.expr.qualified_name;},new cljs.core.Symbol("sqlingvo.expr","qualified-name","sqlingvo.expr/qualified-name",(1640968483),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.expr","sqlingvo.expr",(-317330993),null),new cljs.core.Symbol(null,"qualified-name","qualified-name",(-1309915923),null),"sqlingvo/expr.cljc",(21),(1),(53),(53),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",(-505765866),null)], null)),"Returns the qualified name of `k`.",(cljs.core.truth_(sqlingvo.expr.qualified_name)?sqlingvo.expr.qualified_name.cljs$lang$test:null)])));})()
;
/**
 * Returns `x` without any namespace.
 */
(function (){
sqlingvo.expr.unintern_name = (function sqlingvo$expr$unintern_name(x){
if(typeof x === 'string'){
return x;
} else {
if(((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol))){
return cljs.core.name.call(null,x);
} else {
return null;
}
}
}); return (
new cljs.core.Var(function(){return sqlingvo.expr.unintern_name;},new cljs.core.Symbol("sqlingvo.expr","unintern-name","sqlingvo.expr/unintern-name",(-2015077886),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.expr","sqlingvo.expr",(-317330993),null),new cljs.core.Symbol(null,"unintern-name","unintern-name",(-1212567352),null),"sqlingvo/expr.cljc",(20),(1),(57),(57),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"Returns `x` without any namespace.",(cljs.core.truth_(sqlingvo.expr.unintern_name)?sqlingvo.expr.unintern_name.cljs$lang$test:null)])));})()
;
(function (){
sqlingvo.expr.make_node = (function sqlingvo$expr$make_node(var_args){
var args__23658__auto__ = [];
var len__23656__auto___27 = arguments.length;
var i__23657__auto___28 = (0);
while(true){
if((i__23657__auto___28 < len__23656__auto___27)){
args__23658__auto__.push((arguments[i__23657__auto___28]));

var G__29 = (i__23657__auto___28 + (1));
i__23657__auto___28 = G__29;
continue;
} else {
}
break;
}

var argseq__23659__auto__ = ((((0) < args__23658__auto__.length))?(new cljs.core.IndexedSeq(args__23658__auto__.slice((0)),(0),null)):null);
return sqlingvo.expr.make_node.cljs$core$IFn$_invoke$arity$variadic(argseq__23659__auto__);
}); return (
new cljs.core.Var(function(){return sqlingvo.expr.make_node;},new cljs.core.Symbol("sqlingvo.expr","make-node","sqlingvo.expr/make-node",(-1817181621),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.expr","sqlingvo.expr",(-317330993),null),new cljs.core.Symbol(null,"make-node","make-node",(-1550461835),null),"sqlingvo/expr.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"node","node",(-2073234571),null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"node","node",(-2073234571),null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(66),(66),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"node","node",(-2073234571),null)], null)], null)),null,(cljs.core.truth_(sqlingvo.expr.make_node)?sqlingvo.expr.make_node.cljs$lang$test:null)])));})()
;

sqlingvo.expr.make_node.cljs$core$IFn$_invoke$arity$variadic = (function (p__24){
var map__25 = p__24;
var map__25__$1 = ((((!((map__25 == null)))?((((map__25.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25):map__25);
var node = map__25__$1;
if(cljs.core.truth_(new cljs.core.Keyword(null,"op","op",(-1882987955)).cljs$core$IFn$_invoke$arity$1(node))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Missing :op in make-node: "),cljs.core.str(cljs.core.pr_str.call(null,node))].join('')),cljs.core.str("\n"),cljs.core.str("(:op node)")].join('')));
}

if(!(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(node)))){
return cljs.core.reduce.call(null,((function (map__25,map__25__$1,node){
return (function (node__$1,child){
if((cljs.core.get.call(null,node__$1,child) == null)){
return cljs.core.dissoc.call(null,node__$1,child);
} else {
return cljs.core.update_in.call(null,node__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",(-940561982))], null),cljs.core.conj,child);
}
});})(map__25,map__25__$1,node))
,cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"children","children",(-940561982)),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"children","children",(-940561982)).cljs$core$IFn$_invoke$arity$1(node));
} else {
return node;
}
});

sqlingvo.expr.make_node.cljs$lang$maxFixedArity = (0);

sqlingvo.expr.make_node.cljs$lang$applyTo = (function (seq23){
return sqlingvo.expr.make_node.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23));
});

new cljs.core.Var(function(){return sqlingvo.expr.make_node;},new cljs.core.Symbol("sqlingvo.expr","make-node","sqlingvo.expr/make-node",(-1817181621),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.expr","sqlingvo.expr",(-317330993),null),new cljs.core.Symbol(null,"make-node","make-node",(-1550461835),null),"sqlingvo/expr.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"node","node",(-2073234571),null)], null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"node","node",(-2073234571),null)], null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(66),(66),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Symbol(null,"node","node",(-2073234571),null)], null)], null)),null,(cljs.core.truth_(sqlingvo.expr.make_node)?sqlingvo.expr.make_node.cljs$lang$test:null)]));
/**
 * Parse `s` as a column identifier and return a map
 *   with :op, :schema, :name and :as keys.
 */
(function (){
sqlingvo.expr.parse_column = (function sqlingvo$expr$parse_column(s){
if(cljs.core.map_QMARK_.call(null,s)){
return s;
} else {
var temp__19520__auto__ = cljs.core.re_matches.call(null,sqlingvo.expr._STAR_column_regex_STAR_,sqlingvo.expr.qualified_name.call(null,s));
if(cljs.core.truth_(temp__19520__auto__)){
var matches = temp__19520__auto__;
var vec__33 = matches;
var _ = cljs.core.nth.call(null,vec__33,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__33,(1),null);
var schema = cljs.core.nth.call(null,vec__33,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__33,(3),null);
var table = cljs.core.nth.call(null,vec__33,(4),null);
var name = cljs.core.nth.call(null,vec__33,(5),null);
var ___$3 = cljs.core.nth.call(null,vec__33,(6),null);
return sqlingvo.expr.make_node.call(null,new cljs.core.Keyword(null,"op","op",(-1882987955)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"children","children",(-940561982)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",(-1582001791)),new cljs.core.Keyword(null,"table","table",(-564943036)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"as","as",(1148689641))], null),new cljs.core.Keyword(null,"form","form",(-1624062471)),s,new cljs.core.Keyword(null,"schema","schema",(-1582001791)),(cljs.core.truth_((function (){var and__20770__auto__ = schema;
if(cljs.core.truth_(and__20770__auto__)){
return table;
} else {
return and__20770__auto__;
}
})())?cljs.core.keyword.call(null,schema):null),new cljs.core.Keyword(null,"table","table",(-564943036)),cljs.core.keyword.call(null,(function (){var or__20817__auto__ = table;
if(cljs.core.truth_(or__20817__auto__)){
return or__20817__auto__;
} else {
return schema;
}
})()),new cljs.core.Keyword(null,"name","name",(1843675177)),cljs.core.keyword.call(null,name),new cljs.core.Keyword(null,"val","val",(128701612)),s);
} else {
return null;
}
}
}); return (
new cljs.core.Var(function(){return sqlingvo.expr.parse_column;},new cljs.core.Symbol("sqlingvo.expr","parse-column","sqlingvo.expr/parse-column",(5186612),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.expr","sqlingvo.expr",(-317330993),null),new cljs.core.Symbol(null,"parse-column","parse-column",(2007600834),null),"sqlingvo/expr.cljc",(19),(1),(77),(77),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),"Parse `s` as a column identifier and return a map\n  with :op, :schema, :name and :as keys.",(cljs.core.truth_(sqlingvo.expr.parse_column)?sqlingvo.expr.parse_column.cljs$lang$test:null)])));})()
;
/**
 * Parse `s` as a table identifier and return a map
 *   with :op, :schema, :name and :as keys.
 */
(function (){
sqlingvo.expr.parse_table = (function sqlingvo$expr$parse_table(s){
if(cljs.core.map_QMARK_.call(null,s)){
return s;
} else {
var temp__19520__auto__ = cljs.core.re_matches.call(null,sqlingvo.expr._STAR_table_regex_STAR_,sqlingvo.expr.qualified_name.call(null,s));
if(cljs.core.truth_(temp__19520__auto__)){
var matches = temp__19520__auto__;
return sqlingvo.expr.make_node.call(null,new cljs.core.Keyword(null,"op","op",(-1882987955)),new cljs.core.Keyword(null,"table","table",(-564943036)),new cljs.core.Keyword(null,"children","children",(-940561982)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",(-1582001791)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"as","as",(1148689641))], null),new cljs.core.Keyword(null,"form","form",(-1624062471)),s,new cljs.core.Keyword(null,"schema","schema",(-1582001791)),cljs.core.keyword.call(null,cljs.core.nth.call(null,matches,(2))),new cljs.core.Keyword(null,"name","name",(1843675177)),cljs.core.keyword.call(null,cljs.core.nth.call(null,matches,(3))),new cljs.core.Keyword(null,"val","val",(128701612)),s);
} else {
return null;
}
}
}); return (
new cljs.core.Var(function(){return sqlingvo.expr.parse_table;},new cljs.core.Symbol("sqlingvo.expr","parse-table","sqlingvo.expr/parse-table",(-1234494026),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.expr","sqlingvo.expr",(-317330993),null),new cljs.core.Symbol(null,"parse-table","parse-table",(-407458948),null),"sqlingvo/expr.cljc",(18),(1),(93),(93),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),"Parse `s` as a table identifier and return a map\n  with :op, :schema, :name and :as keys.",(cljs.core.truth_(sqlingvo.expr.parse_table)?sqlingvo.expr.parse_table.cljs$lang$test:null)])));})()
;
(function (){
sqlingvo.expr.parse_attr_expr = (function sqlingvo$expr$parse_attr_expr(expr){
return sqlingvo.expr.make_node.call(null,new cljs.core.Keyword(null,"op","op",(-1882987955)),new cljs.core.Keyword(null,"attr","attr",(-604132353)),new cljs.core.Keyword(null,"children","children",(-940561982)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arg","arg",(-1747261837))], null),new cljs.core.Keyword(null,"name","name",(1843675177)),cljs.core.keyword.call(null,clojure.string.replace.call(null,cljs.core.name.call(null,cljs.core.first.call(null,expr)),".-","")),new cljs.core.Keyword(null,"arg","arg",(-1747261837)),sqlingvo.expr.parse_expr.call(null,cljs.core.first.call(null,cljs.core.rest.call(null,expr))));
}); return (
new cljs.core.Var(function(){return sqlingvo.expr.parse_attr_expr;},new cljs.core.Symbol("sqlingvo.expr","parse-attr-expr","sqlingvo.expr/parse-attr-expr",(-1814722430),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"sqlingvo.expr","sqlingvo.expr",(-317330993),null),new cljs.core.Symbol(null,"parse-attr-expr","parse-attr-expr",(-1551359308),null),"sqlingvo/expr.cljc",(23),(1),(107),(107),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",(-1908713478),null)], null)),null,(cljs.core.truth_(sqlingvo.expr.parse_attr_expr)?sqlingvo.expr.parse_attr_expr.cljs$lang$test:null)])));})()
;
(function (){
sqlingvo.expr.parse_map_expr = (function sqlingvo$expr$parse_map_expr(m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__23197__auto__ = (function sqlingvo$expr$parse_map_expr_$_iter__52(s__53){
return (new cljs.core.LazySeq(null,(function (){
var s__53__$1 = s__53;
while(true){
var temp__19834__auto__ = cljs.core.seq.call(null,s__53__$1);
if(temp__19834__auto__){
var s__53__$2 = temp__19834__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__53__$2)){
var c__23195__auto__ = cljs.core.chunk_first.call(null,s__53__$2);
var size__23196__auto__ = cljs.core.count.call(null,c__23195__auto__);
var b__55 = cljs.core.chunk_buffer.call(null,size__23196__auto__);
if((function (){var i__54 = (0);
while(true){
if((i__54 < size__23196__auto__)){
var vec__62 = cljs.core._nth.call(null,c__23195__auto__,i__54);
var k = cljs.core.nth.call(null,vec__62,(0),null);
var v = cljs.core.nth.call(null,vec__62,(1),null);
cljs.core.chunk_append.call(null,b__55,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,sqlingvo.expr.parse_expr.call(null,v)], null));

var G__68 = (i__54 + (1));
i__54 = G__68;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55),sqlingvo$expr$parse_map_expr_$_iter__52.call(null,cljs.core.chunk_rest.call(null,s__53__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55),null);
}
} else {
var vec__65 = cljs.core.first.call(null,s__53__$2);
var k = cljs.core.nth.call(null,vec__65,(0),null);
var v = cljs.core.nth.call(null,vec__65,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,sqlingvo.expr.parse_expr.call(null,v)], null),sqlingvo$expr$parse_map_expr_$_iter__52.call(null,cljs.core.rest.call(null,s__53__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__23197__auto__.call(null,m);
})());
}); return (
new cljs.core.Var(function(){return sqlingvo.expr.parse_map_expr;},new cljs.core.Symbol("sqlingvo.expr","parse-map-expr","sqlingvo.expr/parse-map-expr",(2054721710),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.expr","sqlingvo.expr",(-317330993),null),new cljs.core.Symbol(null,"parse-map-expr","parse-map-expr",(1247102564),null),"sqlingvo/expr.cljc",(21),(1),(114),(114),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null)),null,(cljs.core.truth_(sqlingvo.expr.parse_map_expr)?sqlingvo.expr.parse_map_expr.cljs$lang$test:null)])));})()
;
(function (){
sqlingvo.expr.parse_condition = (function sqlingvo$expr$parse_condition(condition){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",(-1882987955)),new cljs.core.Keyword(null,"condition","condition",(1668437652)),new cljs.core.Keyword(null,"condition","condition",(1668437652)),sqlingvo.expr.parse_expr.call(null,condition)], null);
}); return (
new cljs.core.Var(function(){return sqlingvo.expr.parse_condition;},new cljs.core.Symbol("sqlingvo.expr","parse-condition","sqlingvo.expr/parse-condition",(-1068818457),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.expr","sqlingvo.expr",(-317330993),null),new cljs.core.Symbol(null,"parse-condition","parse-condition",(-1339668175),null),"sqlingvo/expr.cljc",(22),(1),(117),(117),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"condition","condition",(-985998117),null)], null)),null,(cljs.core.truth_(sqlingvo.expr.parse_condition)?sqlingvo.expr.parse_condition.cljs$lang$test:null)])));})()
;
(function (){
sqlingvo.expr.parse_from = (function sqlingvo$expr$parse_from(forms){
if((typeof forms === 'string') || ((forms instanceof cljs.core.Keyword))){
return sqlingvo.expr.parse_table.call(null,forms);
} else {
if((cljs.core.map_QMARK_.call(null,forms)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"alias","alias",(-2039751630)),new cljs.core.Keyword(null,"op","op",(-1882987955)).cljs$core$IFn$_invoke$arity$1(forms))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"op","op",(-1882987955)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"expr","expr",(745722291)).cljs$core$IFn$_invoke$arity$1(forms))))){
return cljs.core.assoc.call(null,forms,new cljs.core.Keyword(null,"expr","expr",(745722291)),sqlingvo.expr.parse_table.call(null,new cljs.core.Keyword(null,"form","form",(-1624062471)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"expr","expr",(745722291)).cljs$core$IFn$_invoke$arity$1(forms))));
} else {
if((cljs.core.map_QMARK_.call(null,forms)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"alias","alias",(-2039751630)),new cljs.core.Keyword(null,"op","op",(-1882987955)).cljs$core$IFn$_invoke$arity$1(forms)))){
return forms;
} else {
if((cljs.core.map_QMARK_.call(null,forms)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"list","list",(765357683)),new cljs.core.Keyword(null,"op","op",(-1882987955)).cljs$core$IFn$_invoke$arity$1(forms)))){
return forms;
} else {
if((cljs.core.map_QMARK_.call(null,forms)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"select","select",(1147833503)),new cljs.core.Keyword(null,"op","op",(-1882987955)).cljs$core$IFn$_invoke$arity$1(forms)))){
return forms;
} else {
if((cljs.core.map_QMARK_.call(null,forms)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"table","table",(-564943036)),new cljs.core.Keyword(null,"op","op",(-1882987955)).cljs$core$IFn$_invoke$arity$1(forms)))){
return forms;
} else {
if(cljs.core.truth_((function (){var and__20770__auto__ = cljs.core.map_QMARK_.call(null,forms);
if(and__20770__auto__){
return new cljs.core.Keyword(null,"as","as",(1148689641)).cljs$core$IFn$_invoke$arity$1(forms);
} else {
return and__20770__auto__;
}
})())){
return sqlingvo.expr.make_node.call(null,new cljs.core.Keyword(null,"op","op",(-1882987955)),new cljs.core.Keyword(null,"table","table",(-564943036)),new cljs.core.Keyword(null,"children","children",(-940561982)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",(-1582001791)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"as","as",(1148689641))], null),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Keyword(null,"as","as",(1148689641)).cljs$core$IFn$_invoke$arity$1(forms),new cljs.core.Keyword(null,"schema","schema",(-1582001791)),new cljs.core.Keyword(null,"table","table",(-564943036)).cljs$core$IFn$_invoke$arity$1(forms),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"name","name",(1843675177)).cljs$core$IFn$_invoke$arity$1(forms));
} else {
if(cljs.core.list_QMARK_.call(null,forms)){
return sqlingvo.expr.parse_expr.call(null,forms);
} else {
throw cljs.core.ex_info.call(null,"Can't parse FROM form.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"forms","forms",(2045992350)),forms], null));

}
}
}
}
}
}
}
}
}); return (
new cljs.core.Var(function(){return sqlingvo.expr.parse_from;},new cljs.core.Symbol("sqlingvo.expr","parse-from","sqlingvo.expr/parse-from",(712081018),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"sqlingvo.expr","sqlingvo.expr",(-317330993),null),new cljs.core.Symbol(null,"parse-from","parse-from",(2073334180),null),"sqlingvo/expr.cljc",(17),(1),(121),(121),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",(-608443419),null)], null)),null,(cljs.core.truth_(sqlingvo.expr.parse_from)?sqlingvo.expr.parse_from.cljs$lang$test:null)])));})()
;
(sqlingvo.expr.IExpr["number"] = true);

(sqlingvo.expr._parse_expr["number"] = (function (x){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"val","val",(128701612)),x,new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"number","number",(1570378438)),new cljs.core.Keyword(null,"op","op",(-1882987955)),new cljs.core.Keyword(null,"constant","constant",(-379609303)),new cljs.core.Keyword(null,"form","form",(-1624062471)),x], null);
}));

cljs.core.PersistentArrayMap.prototype.sqlingvo$expr$IExpr$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.sqlingvo$expr$IExpr$_parse_expr$arity$1 = (function (x){
var x__$1 = this;
return x__$1;
});

cljs.core.PersistentHashMap.prototype.sqlingvo$expr$IExpr$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.sqlingvo$expr$IExpr$_parse_expr$arity$1 = (function (x){
var x__$1 = this;
return x__$1;
});

cljs.core.EmptyList.prototype.sqlingvo$expr$IExpr$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.EmptyList.prototype.sqlingvo$expr$IExpr$_parse_expr$arity$1 = (function (x){
var x__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",(-1882987955)),new cljs.core.Keyword(null,"list","list",(765357683))], null);
});

Date.prototype.sqlingvo$expr$IExpr$ = cljs.core.PROTOCOL_SENTINEL;

Date.prototype.sqlingvo$expr$IExpr$_parse_expr$arity$1 = (function (x){
var x__$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"val","val",(128701612)),x__$1,new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"date","date",(-1463434462)),new cljs.core.Keyword(null,"op","op",(-1882987955)),new cljs.core.Keyword(null,"constant","constant",(-379609303)),new cljs.core.Keyword(null,"form","form",(-1624062471)),x__$1], null);
});
(sqlingvo.expr.IExpr["null"] = true);

(sqlingvo.expr._parse_expr["null"] = (function (x){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"val","val",(128701612)),x,new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"nil","nil",(99600501)),new cljs.core.Keyword(null,"op","op",(-1882987955)),new cljs.core.Keyword(null,"nil","nil",(99600501)),new cljs.core.Keyword(null,"form","form",(-1624062471)),x], null);
}));

cljs.core.Cons.prototype.sqlingvo$expr$IExpr$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Cons.prototype.sqlingvo$expr$IExpr$_parse_expr$arity$1 = (function (x){
var x__$1 = this;
return sqlingvo.expr._parse_expr.call(null,cljs.core.apply.call(null,cljs.core.list,x__$1));
});

(sqlingvo.expr.IExpr["boolean"] = true);

(sqlingvo.expr._parse_expr["boolean"] = (function (x){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"val","val",(128701612)),x,new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"boolean","boolean",(-1919418404)),new cljs.core.Keyword(null,"op","op",(-1882987955)),new cljs.core.Keyword(null,"constant","constant",(-379609303)),new cljs.core.Keyword(null,"form","form",(-1624062471)),x], null);
}));

(sqlingvo.expr.IExpr["object"] = true);

(sqlingvo.expr._parse_expr["object"] = (function (x){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"val","val",(128701612)),x,new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"object","object",(1474613949)),new cljs.core.Keyword(null,"op","op",(-1882987955)),new cljs.core.Keyword(null,"constant","constant",(-379609303)),new cljs.core.Keyword(null,"form","form",(-1624062471)),x], null);
}));

cljs.core.PersistentArrayMap.prototype.sqlingvo$expr$IExpr$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.sqlingvo$expr$IExpr$_parse_expr$arity$1 = (function (x){
var x__$1 = this;
return x__$1;
});

cljs.core.Keyword.prototype.sqlingvo$expr$IExpr$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.sqlingvo$expr$IExpr$_parse_expr$arity$1 = (function (x){
var x__$1 = this;
return sqlingvo.expr.parse_column.call(null,x__$1);
});

cljs.core.PersistentVector.prototype.sqlingvo$expr$IExpr$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.sqlingvo$expr$IExpr$_parse_expr$arity$1 = (function (x){
var x__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"children","children",(-940561982)),cljs.core.mapv.call(null,sqlingvo.expr.parse_expr,x__$1),new cljs.core.Keyword(null,"op","op",(-1882987955)),new cljs.core.Keyword(null,"array","array",(-2080713842))], null);
});

cljs.core.List.prototype.sqlingvo$expr$IExpr$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.sqlingvo$expr$IExpr$_parse_expr$arity$1 = (function (expr){
var expr__$1 = this;
if(cljs.core.truth_(sqlingvo.expr.attribute_QMARK_.call(null,cljs.core.first.call(null,expr__$1)))){
return sqlingvo.expr.parse_attr_expr.call(null,expr__$1);
} else {
if((cljs.core.list_QMARK_.call(null,cljs.core.first.call(null,expr__$1))) || ((cljs.core.first.call(null,expr__$1) instanceof cljs.core.Cons))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"children","children",(-940561982)),cljs.core.mapv.call(null,sqlingvo.expr.parse_expr,expr__$1),new cljs.core.Keyword(null,"as","as",(1148689641)),new cljs.core.Keyword(null,"as","as",(1148689641)).cljs$core$IFn$_invoke$arity$1(expr__$1),new cljs.core.Keyword(null,"op","op",(-1882987955)),new cljs.core.Keyword(null,"expr-list","expr-list",(-6297624))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"children","children",(-940561982)),cljs.core.mapv.call(null,sqlingvo.expr.parse_expr,expr__$1),new cljs.core.Keyword(null,"op","op",(-1882987955)),new cljs.core.Keyword(null,"list","list",(765357683))], null);

}
}
});

(sqlingvo.expr.IExpr["string"] = true);

(sqlingvo.expr._parse_expr["string"] = (function (x){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"val","val",(128701612)),x,new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"string","string",(-1989541586)),new cljs.core.Keyword(null,"op","op",(-1882987955)),new cljs.core.Keyword(null,"constant","constant",(-379609303)),new cljs.core.Keyword(null,"form","form",(-1624062471)),x], null);
}));

cljs.core.Symbol.prototype.sqlingvo$expr$IExpr$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Symbol.prototype.sqlingvo$expr$IExpr$_parse_expr$arity$1 = (function (x){
var x__$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"val","val",(128701612)),cljs.core.symbol.call(null,cljs.core.name.call(null,x__$1)),new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"symbol","symbol",(-1038572696)),new cljs.core.Keyword(null,"op","op",(-1882987955)),new cljs.core.Keyword(null,"constant","constant",(-379609303)),new cljs.core.Keyword(null,"form","form",(-1624062471)),x__$1], null);
});

sqlingvo.expr.Stmt.prototype.sqlingvo$expr$IExpr$ = cljs.core.PROTOCOL_SENTINEL;

sqlingvo.expr.Stmt.prototype.sqlingvo$expr$IExpr$_parse_expr$arity$1 = (function (stmt){
var stmt__$1 = this;
return cljs.core.first.call(null,stmt__$1.call(null,cljs.core.PersistentArrayMap.EMPTY));
});
