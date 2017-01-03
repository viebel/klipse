// Compiled by ClojureScript 1.9.376
goog.provide("clojure.test.check.rose_tree");

/**
* @constructor
 * @implements {cljs.core.IIndexed}
*/
clojure.test.check.rose_tree.RoseTree = (function (root,children){
this.root = root;
this.children = children;
this.cljs$lang$protocol_mask$partition0$ = 16;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
clojure.test.check.rose_tree.RoseTree.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,i){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,i,(0))){
return self__.root;
} else {
if(cljs.core._EQ_.call(null,i,(1))){
return self__.children;
} else {
throw (new Error("Index out of bounds in rose tree"));

}
}
});

clojure.test.check.rose_tree.RoseTree.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,i,not_found){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,i,(0))){
return self__.root;
} else {
if(cljs.core._EQ_.call(null,i,(1))){
return self__.children;
} else {
return not_found;

}
}
});

clojure.test.check.rose_tree.RoseTree.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"root","root",(1191874074),null),new cljs.core.Symbol(null,"children","children",(699969545),null)], null);
});

clojure.test.check.rose_tree.RoseTree.cljs$lang$type = true;

clojure.test.check.rose_tree.RoseTree.cljs$lang$ctorStr = "clojure.test.check.rose-tree/RoseTree";

clojure.test.check.rose_tree.RoseTree.cljs$lang$ctorPrWriter = (function (this__13753__auto__,writer__13754__auto__,opt__13755__auto__){
return cljs.core._write.call(null,writer__13754__auto__,"clojure.test.check.rose-tree/RoseTree");
});

(function (){
clojure.test.check.rose_tree.__GT_RoseTree = (function clojure$test$check$rose_tree$__GT_RoseTree(root,children){
return (new clojure.test.check.rose_tree.RoseTree(root,children));
}); return (
new cljs.core.Var(function(){return clojure.test.check.rose_tree.__GT_RoseTree;},new cljs.core.Symbol("clojure.test.check.rose-tree","->RoseTree","clojure.test.check.rose-tree/->RoseTree",(860715399),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("cljs.core","IIndexed","cljs.core/IIndexed",(-436490749),null),null], null), null),new cljs.core.Symbol(null,"clojure.test.check.rose-tree","clojure.test.check.rose-tree",(-224731289),null),new cljs.core.Symbol(null,"->RoseTree","->RoseTree",(-695894749),null),"clojure/test/check/rose_tree.cljc",(18),(1),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(15),(15),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"root","root",(1191874074),null),new cljs.core.Symbol(null,"children","children",(699969545),null)], null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("cljs.core","IIndexed","cljs.core/IIndexed",(-436490749),null),null], null), null),null,(cljs.core.truth_(clojure.test.check.rose_tree.__GT_RoseTree)?clojure.test.check.rose_tree.__GT_RoseTree.cljs$lang$test:null)])));})()
;

/**
 * Returns the root of a Rose tree.
 */
(function (){
clojure.test.check.rose_tree.root = (function clojure$test$check$rose_tree$root(rose){
return rose.root;
}); return (
new cljs.core.Var(function(){return clojure.test.check.rose_tree.root;},new cljs.core.Symbol("clojure.test.check.rose-tree","root","clojure.test.check.rose-tree/root",(1758627302),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"no-doc","no-doc",(1559921891)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.rose-tree","clojure.test.check.rose-tree",(-224731289),null),new cljs.core.Symbol(null,"root","root",(1191874074),null),"clojure/test/check/rose_tree.cljc",(11),(1),(29),(29),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"rose","rose",(-961249500),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"RoseTree","RoseTree",(1197858864),null)], null))], null)),"Returns the root of a Rose tree.",(cljs.core.truth_(clojure.test.check.rose_tree.root)?clojure.test.check.rose_tree.root.cljs$lang$test:null)])));})()
;
/**
 * Returns the children of the root of the Rose tree.
 */
(function (){
clojure.test.check.rose_tree.children = (function clojure$test$check$rose_tree$children(rose){
return rose.children;
}); return (
new cljs.core.Var(function(){return clojure.test.check.rose_tree.children;},new cljs.core.Symbol("clojure.test.check.rose-tree","children","clojure.test.check.rose-tree/children",(879800301),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"no-doc","no-doc",(1559921891)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.rose-tree","clojure.test.check.rose-tree",(-224731289),null),new cljs.core.Symbol(null,"children","children",(699969545),null),"clojure/test/check/rose_tree.cljc",(15),(1),(35),(35),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"rose","rose",(-961249500),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"RoseTree","RoseTree",(1197858864),null)], null))], null)),"Returns the children of the root of the Rose tree.",(cljs.core.truth_(clojure.test.check.rose_tree.children)?clojure.test.check.rose_tree.children.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.rose_tree.make_rose = (function clojure$test$check$rose_tree$make_rose(root,children){
return (new clojure.test.check.rose_tree.RoseTree(root,children));
}); return (
new cljs.core.Var(function(){return clojure.test.check.rose_tree.make_rose;},new cljs.core.Symbol("clojure.test.check.rose-tree","make-rose","clojure.test.check.rose-tree/make-rose",(-591847739),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.rose-tree","clojure.test.check.rose-tree",(-224731289),null),new cljs.core.Symbol(null,"make-rose","make-rose",(-403629447),null),"clojure/test/check/rose_tree.cljc",(16),(1),(41),(41),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"root","root",(1191874074),null),new cljs.core.Symbol(null,"children","children",(699969545),null)], null)),null,(cljs.core.truth_(clojure.test.check.rose_tree.make_rose)?clojure.test.check.rose_tree.make_rose.cljs$lang$test:null)])));})()
;
/**
 * Exclude the nth value in a collection.
 */
(function (){
clojure.test.check.rose_tree.exclude_nth = (function clojure$test$check$rose_tree$exclude_nth(n,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__10117__auto__ = cljs.core.seq.call(null,coll);
if(temp__10117__auto__){
var s = temp__10117__auto__;
if((n === (0))){
return cljs.core.rest.call(null,coll);
} else {
return cljs.core.cons.call(null,cljs.core.first.call(null,s),clojure.test.check.rose_tree.exclude_nth.call(null,(n - (1)),cljs.core.rest.call(null,s)));
}
} else {
return null;
}
}),null,null));
}); return (
new cljs.core.Var(function(){return clojure.test.check.rose_tree.exclude_nth;},new cljs.core.Symbol("clojure.test.check.rose-tree","exclude-nth","clojure.test.check.rose-tree/exclude-nth",(-818647507),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.rose-tree","clojure.test.check.rose-tree",(-224731289),null),new cljs.core.Symbol(null,"exclude-nth","exclude-nth",(-738433719),null),"clojure/test/check/rose_tree.cljc",(19),(1),(45),(45),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null),new cljs.core.Symbol(null,"coll","coll",(-1006698606),null)], null)),"Exclude the nth value in a collection.",(cljs.core.truth_(clojure.test.check.rose_tree.exclude_nth)?clojure.test.check.rose_tree.exclude_nth.cljs$lang$test:null)])));})()
;
/**
 * Turn a tree of trees into a single tree. Does this by concatenating
 *   children of the inner and outer trees.
 */
(function (){
clojure.test.check.rose_tree.join = (function clojure$test$check$rose_tree$join(rose){
var outer_root = clojure.test.check.rose_tree.root.call(null,rose);
var outer_children = clojure.test.check.rose_tree.children.call(null,rose);
var inner_root = clojure.test.check.rose_tree.root.call(null,outer_root);
var inner_children = clojure.test.check.rose_tree.children.call(null,outer_root);
return clojure.test.check.rose_tree.make_rose.call(null,inner_root,cljs.core.concat.call(null,cljs.core.map.call(null,clojure.test.check.rose_tree.join,outer_children),inner_children));
}); return (
new cljs.core.Var(function(){return clojure.test.check.rose_tree.join;},new cljs.core.Symbol("clojure.test.check.rose-tree","join","clojure.test.check.rose-tree/join",(273337001),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"no-doc","no-doc",(1559921891)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.rose-tree","clojure.test.check.rose-tree",(-224731289),null),new cljs.core.Symbol(null,"join","join",(881669637),null),"clojure/test/check/rose_tree.cljc",(11),(1),(55),(55),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rose","rose",(-961249500),null)], null)),"Turn a tree of trees into a single tree. Does this by concatenating\n  children of the inner and outer trees.",(cljs.core.truth_(clojure.test.check.rose_tree.join)?clojure.test.check.rose_tree.join.cljs$lang$test:null)])));})()
;
/**
 * Puts a value `x` into a Rose tree, with no children.
 */
(function (){
clojure.test.check.rose_tree.pure = (function clojure$test$check$rose_tree$pure(x){
return clojure.test.check.rose_tree.make_rose.call(null,x,cljs.core.PersistentVector.EMPTY);
}); return (
new cljs.core.Var(function(){return clojure.test.check.rose_tree.pure;},new cljs.core.Symbol("clojure.test.check.rose-tree","pure","clojure.test.check.rose-tree/pure",(1408238045),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"no-doc","no-doc",(1559921891)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.rose-tree","clojure.test.check.rose-tree",(-224731289),null),new cljs.core.Symbol(null,"pure","pure",(-1221065375),null),"clojure/test/check/rose_tree.cljc",(11),(1),(68),(68),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"Puts a value `x` into a Rose tree, with no children.",(cljs.core.truth_(clojure.test.check.rose_tree.pure)?clojure.test.check.rose_tree.pure.cljs$lang$test:null)])));})()
;
/**
 * Applies functions `f` to all values in the tree.
 */
(function (){
clojure.test.check.rose_tree.fmap = (function clojure$test$check$rose_tree$fmap(f,rose){
return clojure.test.check.rose_tree.make_rose.call(null,f.call(null,clojure.test.check.rose_tree.root.call(null,rose)),cljs.core.map.call(null,(function (p1__1_SHARP_){
return clojure.test.check.rose_tree.fmap.call(null,f,p1__1_SHARP_);
}),clojure.test.check.rose_tree.children.call(null,rose)));
}); return (
new cljs.core.Var(function(){return clojure.test.check.rose_tree.fmap;},new cljs.core.Symbol("clojure.test.check.rose-tree","fmap","clojure.test.check.rose-tree/fmap",(780382904),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"no-doc","no-doc",(1559921891)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.rose-tree","clojure.test.check.rose-tree",(-224731289),null),new cljs.core.Symbol(null,"fmap","fmap",(55293788),null),"clojure/test/check/rose_tree.cljc",(11),(1),(74),(74),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"rose","rose",(-961249500),null)], null)),"Applies functions `f` to all values in the tree.",(cljs.core.truth_(clojure.test.check.rose_tree.fmap)?clojure.test.check.rose_tree.fmap.cljs$lang$test:null)])));})()
;
/**
 * Takes a Rose tree (m) and a function (k) from
 *   values to Rose tree and returns a new Rose tree.
 *   This is the monadic bind (>>=) for Rose trees.
 */
(function (){
clojure.test.check.rose_tree.bind = (function clojure$test$check$rose_tree$bind(m,k){
return clojure.test.check.rose_tree.join.call(null,clojure.test.check.rose_tree.fmap.call(null,k,m));
}); return (
new cljs.core.Var(function(){return clojure.test.check.rose_tree.bind;},new cljs.core.Symbol("clojure.test.check.rose-tree","bind","clojure.test.check.rose-tree/bind",(1011724578),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"no-doc","no-doc",(1559921891)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.rose-tree","clojure.test.check.rose-tree",(-224731289),null),new cljs.core.Symbol(null,"bind","bind",(1527103110),null),"clojure/test/check/rose_tree.cljc",(11),(1),(80),(80),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"k","k",(-505765866),null)], null)),"Takes a Rose tree (m) and a function (k) from\n  values to Rose tree and returns a new Rose tree.\n  This is the monadic bind (>>=) for Rose trees.",(cljs.core.truth_(clojure.test.check.rose_tree.bind)?clojure.test.check.rose_tree.bind.cljs$lang$test:null)])));})()
;
/**
 * Returns a new Rose tree whose values pass `pred`. Values who
 *   do not pass `pred` have their children cut out as well.
 *   Takes a list of roses, not a rose
 */
(function (){
clojure.test.check.rose_tree.filter = (function clojure$test$check$rose_tree$filter(pred,rose){
return clojure.test.check.rose_tree.make_rose.call(null,clojure.test.check.rose_tree.root.call(null,rose),cljs.core.map.call(null,(function (p1__2_SHARP_){
return clojure.test.check.rose_tree.filter.call(null,pred,p1__2_SHARP_);
}),cljs.core.filter.call(null,(function (p1__3_SHARP_){
return pred.call(null,clojure.test.check.rose_tree.root.call(null,p1__3_SHARP_));
}),clojure.test.check.rose_tree.children.call(null,rose))));
}); return (
new cljs.core.Var(function(){return clojure.test.check.rose_tree.filter;},new cljs.core.Symbol("clojure.test.check.rose-tree","filter","clojure.test.check.rose-tree/filter",(1281787037),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"no-doc","no-doc",(1559921891)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.rose-tree","clojure.test.check.rose-tree",(-224731289),null),new cljs.core.Symbol(null,"filter","filter",(691993593),null),"clojure/test/check/rose_tree.cljc",(13),(1),(88),(88),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",(-727012372),null),new cljs.core.Symbol(null,"rose","rose",(-961249500),null)], null)),"Returns a new Rose tree whose values pass `pred`. Values who\n  do not pass `pred` have their children cut out as well.\n  Takes a list of roses, not a rose",(cljs.core.truth_(clojure.test.check.rose_tree.filter)?clojure.test.check.rose_tree.filter.cljs$lang$test:null)])));})()
;
/**
 * Create a seq of vectors, where each rose in turn, has been replaced
 *   by its children.
 */
(function (){
clojure.test.check.rose_tree.permutations = (function clojure$test$check$rose_tree$permutations(roses){
var iter__15547__auto__ = (function clojure$test$check$rose_tree$permutations_$_iter__58(s__59){
return (new cljs.core.LazySeq(null,(function (){
var s__59__$1 = s__59;
while(true){
var temp__10117__auto__ = cljs.core.seq.call(null,s__59__$1);
if(temp__10117__auto__){
var xs__10065__auto__ = temp__10117__auto__;
var vec__67 = cljs.core.first.call(null,xs__10065__auto__);
var rose = cljs.core.nth.call(null,vec__67,(0),null);
var index = cljs.core.nth.call(null,vec__67,(1),null);
var iterys__15543__auto__ = ((function (s__59__$1,vec__67,rose,index,xs__10065__auto__,temp__10117__auto__){
return (function clojure$test$check$rose_tree$permutations_$_iter__58_$_iter__60(s__61){
return (new cljs.core.LazySeq(null,((function (s__59__$1,vec__67,rose,index,xs__10065__auto__,temp__10117__auto__){
return (function (){
var s__61__$1 = s__61;
while(true){
var temp__10117__auto____$1 = cljs.core.seq.call(null,s__61__$1);
if(temp__10117__auto____$1){
var s__61__$2 = temp__10117__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__61__$2)){
var c__15545__auto__ = cljs.core.chunk_first.call(null,s__61__$2);
var size__15546__auto__ = cljs.core.count.call(null,c__15545__auto__);
var b__63 = cljs.core.chunk_buffer.call(null,size__15546__auto__);
if((function (){var i__62 = (0);
while(true){
if((i__62 < size__15546__auto__)){
var child = cljs.core._nth.call(null,c__15545__auto__,i__62);
cljs.core.chunk_append.call(null,b__63,cljs.core.assoc.call(null,roses,index,child));

var G__70 = (i__62 + (1));
i__62 = G__70;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__63),clojure$test$check$rose_tree$permutations_$_iter__58_$_iter__60.call(null,cljs.core.chunk_rest.call(null,s__61__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__63),null);
}
} else {
var child = cljs.core.first.call(null,s__61__$2);
return cljs.core.cons.call(null,cljs.core.assoc.call(null,roses,index,child),clojure$test$check$rose_tree$permutations_$_iter__58_$_iter__60.call(null,cljs.core.rest.call(null,s__61__$2)));
}
} else {
return null;
}
break;
}
});})(s__59__$1,vec__67,rose,index,xs__10065__auto__,temp__10117__auto__))
,null,null));
});})(s__59__$1,vec__67,rose,index,xs__10065__auto__,temp__10117__auto__))
;
var fs__15544__auto__ = cljs.core.seq.call(null,iterys__15543__auto__.call(null,clojure.test.check.rose_tree.children.call(null,rose)));
if(fs__15544__auto__){
return cljs.core.concat.call(null,fs__15544__auto__,clojure$test$check$rose_tree$permutations_$_iter__58.call(null,cljs.core.rest.call(null,s__59__$1)));
} else {
var G__71 = cljs.core.rest.call(null,s__59__$1);
s__59__$1 = G__71;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__15547__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,roses,cljs.core.range.call(null)));
}); return (
new cljs.core.Var(function(){return clojure.test.check.rose_tree.permutations;},new cljs.core.Symbol("clojure.test.check.rose-tree","permutations","clojure.test.check.rose-tree/permutations",(1202118638),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"no-doc","no-doc",(1559921891)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.rose-tree","clojure.test.check.rose-tree",(-224731289),null),new cljs.core.Symbol(null,"permutations","permutations",(-1558265014),null),"clojure/test/check/rose_tree.cljc",(19),(1),(98),(98),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"roses","roses",(2125188838),null)], null)),"Create a seq of vectors, where each rose in turn, has been replaced\n  by its children.",(cljs.core.truth_(clojure.test.check.rose_tree.permutations)?clojure.test.check.rose_tree.permutations.cljs$lang$test:null)])));})()
;
/**
 * Apply `f` to the sequence of Rose trees `roses`.
 */
(function (){
clojure.test.check.rose_tree.zip = (function clojure$test$check$rose_tree$zip(f,roses){
return clojure.test.check.rose_tree.make_rose.call(null,cljs.core.apply.call(null,f,cljs.core.map.call(null,clojure.test.check.rose_tree.root,roses)),cljs.core.map.call(null,(function (p1__4_SHARP_){
return clojure.test.check.rose_tree.zip.call(null,f,p1__4_SHARP_);
}),clojure.test.check.rose_tree.permutations.call(null,roses)));
}); return (
new cljs.core.Var(function(){return clojure.test.check.rose_tree.zip;},new cljs.core.Symbol("clojure.test.check.rose-tree","zip","clojure.test.check.rose-tree/zip",(-1363093537),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"no-doc","no-doc",(1559921891)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.rose-tree","clojure.test.check.rose-tree",(-224731289),null),new cljs.core.Symbol(null,"zip","zip",(-1975987589),null),"clojure/test/check/rose_tree.cljc",(10),(1),(107),(107),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"roses","roses",(2125188838),null)], null)),"Apply `f` to the sequence of Rose trees `roses`.",(cljs.core.truth_(clojure.test.check.rose_tree.zip)?clojure.test.check.rose_tree.zip.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.rose_tree.remove = (function clojure$test$check$rose_tree$remove(roses){
return cljs.core.concat.call(null,cljs.core.map_indexed.call(null,(function (index,_){
return clojure.test.check.rose_tree.exclude_nth.call(null,index,roses);
}),roses),clojure.test.check.rose_tree.permutations.call(null,cljs.core.vec.call(null,roses)));
}); return (
new cljs.core.Var(function(){return clojure.test.check.rose_tree.remove;},new cljs.core.Symbol("clojure.test.check.rose-tree","remove","clojure.test.check.rose-tree/remove",(1152064165),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"no-doc","no-doc",(1559921891)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.rose-tree","clojure.test.check.rose-tree",(-224731289),null),new cljs.core.Symbol(null,"remove","remove",(1509103113),null),"clojure/test/check/rose_tree.cljc",(13),(1),(116),(116),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"roses","roses",(2125188838),null)], null)),null,(cljs.core.truth_(clojure.test.check.rose_tree.remove)?clojure.test.check.rose_tree.remove.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.rose_tree.shrink = (function clojure$test$check$rose_tree$shrink(f,roses){
if(cljs.core.seq.call(null,roses)){
return clojure.test.check.rose_tree.make_rose.call(null,cljs.core.apply.call(null,f,cljs.core.map.call(null,clojure.test.check.rose_tree.root,roses)),cljs.core.map.call(null,(function (p1__5_SHARP_){
return clojure.test.check.rose_tree.shrink.call(null,f,p1__5_SHARP_);
}),clojure.test.check.rose_tree.remove.call(null,roses)));
} else {
return clojure.test.check.rose_tree.make_rose.call(null,f.call(null),cljs.core.PersistentVector.EMPTY);
}
}); return (
new cljs.core.Var(function(){return clojure.test.check.rose_tree.shrink;},new cljs.core.Symbol("clojure.test.check.rose-tree","shrink","clojure.test.check.rose-tree/shrink",(-647226154),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"no-doc","no-doc",(1559921891)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.rose-tree","clojure.test.check.rose-tree",(-224731289),null),new cljs.core.Symbol(null,"shrink","shrink",(-1239148174),null),"clojure/test/check/rose_tree.cljc",(13),(1),(123),(123),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"roses","roses",(2125188838),null)], null)),null,(cljs.core.truth_(clojure.test.check.rose_tree.shrink)?clojure.test.check.rose_tree.shrink.cljs$lang$test:null)])));})()
;
/**
 * Return a new rose-tree whose depth-one children
 *   are the children from depth one _and_ two of the input
 *   tree.
 */
(function (){
clojure.test.check.rose_tree.collapse = (function clojure$test$check$rose_tree$collapse(rose){
return clojure.test.check.rose_tree.make_rose.call(null,clojure.test.check.rose_tree.root.call(null,rose),(function (){var the_children = clojure.test.check.rose_tree.children.call(null,rose);
return cljs.core.concat.call(null,cljs.core.map.call(null,clojure.test.check.rose_tree.collapse,the_children),cljs.core.map.call(null,clojure.test.check.rose_tree.collapse,cljs.core.mapcat.call(null,clojure.test.check.rose_tree.children,the_children)));
})());
}); return (
new cljs.core.Var(function(){return clojure.test.check.rose_tree.collapse;},new cljs.core.Symbol("clojure.test.check.rose-tree","collapse","clojure.test.check.rose-tree/collapse",(76888667),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"no-doc","no-doc",(1559921891)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.rose-tree","clojure.test.check.rose-tree",(-224731289),null),new cljs.core.Symbol(null,"collapse","collapse",(422395391),null),"clojure/test/check/rose_tree.cljc",(15),(1),(131),(131),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rose","rose",(-961249500),null)], null)),"Return a new rose-tree whose depth-one children\n  are the children from depth one _and_ two of the input\n  tree.",(cljs.core.truth_(clojure.test.check.rose_tree.collapse)?clojure.test.check.rose_tree.collapse.cljs$lang$test:null)])));})()
;
(function (){
clojure.test.check.rose_tree.make_stack = (function clojure$test$check$rose_tree$make_stack(children,stack){
var temp__9889__auto__ = cljs.core.seq.call(null,children);
if(temp__9889__auto__){
var s = temp__9889__auto__;
return cljs.core.cons.call(null,children,stack);
} else {
return stack;
}
}); return (
new cljs.core.Var(function(){return clojure.test.check.rose_tree.make_stack;},new cljs.core.Symbol("clojure.test.check.rose-tree","make-stack","clojure.test.check.rose-tree/make-stack",(88534183),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"clojure.test.check.rose-tree","clojure.test.check.rose-tree",(-224731289),null),new cljs.core.Symbol(null,"make-stack","make-stack",(-400623677),null),"clojure/test/check/rose_tree.cljc",(18),(1),(143),(143),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"children","children",(699969545),null),new cljs.core.Symbol(null,"stack","stack",(847125597),null)], null)),null,(cljs.core.truth_(clojure.test.check.rose_tree.make_stack)?clojure.test.check.rose_tree.make_stack.cljs$lang$test:null)])));})()
;
/**
 * Create a lazy-seq of all of the (unique) nodes in a shrink-tree.
 *   This assumes that two nodes with the same value have the same children.
 *   While it's not common, it's possible to create trees that don't
 *   fit that description. This function is significantly faster than
 *   brute-force enumerating all of the nodes in a tree, as there will
 *   be many duplicates.
 */
(function (){
clojure.test.check.rose_tree.seq = (function clojure$test$check$rose_tree$seq(rose){
var helper = (function clojure$test$check$rose_tree$seq_$_helper(rose__$1,seen,stack){
var node = clojure.test.check.rose_tree.root.call(null,rose__$1);
var the_children = clojure.test.check.rose_tree.children.call(null,rose__$1);
return (new cljs.core.LazySeq(null,((function (node,the_children){
return (function (){
if(cljs.core.not.call(null,seen.call(null,node))){
return cljs.core.cons.call(null,node,((cljs.core.seq.call(null,the_children))?clojure$test$check$rose_tree$seq_$_helper.call(null,cljs.core.first.call(null,the_children),cljs.core.conj.call(null,seen,node),clojure.test.check.rose_tree.make_stack.call(null,cljs.core.rest.call(null,the_children),stack)):(function (){var temp__10117__auto__ = cljs.core.seq.call(null,stack);
if(temp__10117__auto__){
var s = temp__10117__auto__;
var f = cljs.core.ffirst.call(null,s);
var r = cljs.core.rest.call(null,cljs.core.first.call(null,s));
return clojure$test$check$rose_tree$seq_$_helper.call(null,f,cljs.core.conj.call(null,seen,node),clojure.test.check.rose_tree.make_stack.call(null,r,cljs.core.rest.call(null,s)));
} else {
return null;
}
})()));
} else {
var temp__10117__auto__ = cljs.core.seq.call(null,stack);
if(temp__10117__auto__){
var s = temp__10117__auto__;
var f = cljs.core.ffirst.call(null,s);
var r = cljs.core.rest.call(null,cljs.core.first.call(null,s));
return clojure$test$check$rose_tree$seq_$_helper.call(null,f,seen,clojure.test.check.rose_tree.make_stack.call(null,r,cljs.core.rest.call(null,s)));
} else {
return null;
}
}
});})(node,the_children))
,null,null));
});
return helper.call(null,rose,cljs.core.PersistentHashSet.EMPTY,cljs.core.List.EMPTY);
}); return (
new cljs.core.Var(function(){return clojure.test.check.rose_tree.seq;},new cljs.core.Symbol("clojure.test.check.rose-tree","seq","clojure.test.check.rose-tree/seq",(-669579540),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"clojure.test.check.rose-tree","clojure.test.check.rose-tree",(-224731289),null),new cljs.core.Symbol(null,"seq","seq",(-177272256),null),"clojure/test/check/rose_tree.cljc",(10),(1),(149),(149),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rose","rose",(-961249500),null)], null)),"Create a lazy-seq of all of the (unique) nodes in a shrink-tree.\n  This assumes that two nodes with the same value have the same children.\n  While it's not common, it's possible to create trees that don't\n  fit that description. This function is significantly faster than\n  brute-force enumerating all of the nodes in a tree, as there will\n  be many duplicates.",(cljs.core.truth_(clojure.test.check.rose_tree.seq)?clojure.test.check.rose_tree.seq.cljs$lang$test:null)])));})()
;

//# sourceURL=clojure/test/check/rose_tree.js?rel=1483438383847
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvanVyZS90ZXN0L2NoZWNrL3Jvc2VfdHJlZS5qcz9yZWw9MTQ4MzQzODM4Mzg0NyIsInNvdXJjZXMiOlsicm9zZV90cmVlLmNsanM/cmVsPTE0ODM0MzgzODM4NDciXSwibGluZUNvdW50IjozNDksIm1hcHBpbmdzIjoiO0FBY0EsQUFBQTs7Ozs7Ozs7Ozs7QUFBQSxBQUFBLEFBQUEsQUFBQSxrRkFBQSxsRkFBU0ksNkZBR21CSSxNQUFLQzs7QUFIakMsQUFBQSxnQkFBQSxaQUc0QkQ7QUFINUIsQUFJSSxHQUFNLDJCQUFBLDNCQUFDRSx5QkFBRUQ7QUFBS0g7O0FBQWQsR0FDTSwyQkFBQSwzQkFBQ0kseUJBQUVEO0FBQUtGOztBQURkLEFBRVksTUFDZ0IsS0FBQUksTUFBQTs7Ozs7O0FBUGhDLEFBQUEsQUFBQSxrRkFBQSxsRkFBU1AsNkZBU21CSSxNQUFLQyxFQUFFRzs7QUFUbkMsQUFBQSxnQkFBQSxaQVM0Qko7QUFUNUIsQUFVSSxHQUFNLDJCQUFBLDNCQUFDRSx5QkFBRUQ7QUFBS0g7O0FBQWQsR0FDTSwyQkFBQSwzQkFBQ0kseUJBQUVEO0FBQUtGOztBQURkLEFBRVlLOzs7Ozs7QUFaaEIsQUFBQSxpREFBQSxqREFBU1I7QUFBVCxBQUFBLDBGQUFBLDJEQUFBOzs7QUFBQSxBQUFBLHVEQUFBLHZEQUFTQTs7QUFBVCxBQUFBLDBEQUFBLDFEQUFTQTs7QUFBVCxBQUFBLCtEQUFBLFdBQUFKLG9CQUFBQyxzQkFBQUMscEhBQVNFO0FBQVQsQUFBQSxPQUFBRCwyQkFBQUYsc0JBQUE7OztBQUFBOzZDQUFBLDdDQUFTSSxrR0FBVUMsS0FBS0M7QUFBeEIsQUFBQSxZQUFBSCxzQ0FBbUJFLEtBQUtDOztBQUF4QixpRkFBQSw2SEFBQSx3Q0FBQSwrREFBQSxrREFBQSx1REFBQSx3REFBQSxtRUFBQSwyREFBQSwyREFBQSxzREFBQSwrREFBQSwrREFBQSxvRkFBQSxxREFBQSx3REFBQSxpRkFBQSx3R0FBQSwyR0FBQSx1RUFBQSxvQ0FBQSxLQUFBLElBQUEsbUVB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QUFBLHNEQUFBLCtEQUFBLCtEQUFBLHFEQUFBLHdEQUFBLDJHQUFBLHlEQUFBLG9DQUFBLEtBQUEsSUFBQSxNQUFBLE1BQUEsZUFBQSxtRkFBQSxvRUFBQSxpWEFBQSxvREFBQSxBQUFBLGdEQUFBLGxGQUFNNkUsa0NBQUFBIiwibmFtZXMiOlsidGhpc19fMTM3NTNfX2F1dG9fXyIsIndyaXRlcl9fMTM3NTRfX2F1dG9fXyIsIm9wdF9fMTM3NTVfX2F1dG9fXyIsImNsanMuY29yZS8td3JpdGUiLCJjbG9qdXJlLnRlc3QuY2hlY2sucm9zZS10cmVlL1Jvc2VUcmVlIiwiY2xvanVyZS50ZXN0LmNoZWNrLnJvc2UtdHJlZS8tPlJvc2VUcmVlIiwicm9vdCIsImNoaWxkcmVuIiwidGhpcyIsImkiLCJjbGpzLmNvcmUvPSIsImpzL0Vycm9yIiwibm90LWZvdW5kIiwiY2xvanVyZS50ZXN0LmNoZWNrLnJvc2UtdHJlZS9yb290Iiwicm9zZSIsImNsb2p1cmUudGVzdC5jaGVjay5yb3NlLXRyZWUvY2hpbGRyZW4iLCJjbG9qdXJlLnRlc3QuY2hlY2sucm9zZS10cmVlL21ha2Utcm9zZSIsImNsb2p1cmUudGVzdC5jaGVjay5yb3NlLXRyZWUvZXhjbHVkZS1udGgiLCJuIiwiY29sbCIsImNsanMuY29yZS9MYXp5U2VxIiwidGVtcF9fMTAxMTdfX2F1dG9fXyIsInMiLCJjbGpzLmNvcmUvc2VxIiwiY2xqcy5jb3JlL3Jlc3QiLCJjbGpzLmNvcmUvY29ucyIsImNsanMuY29yZS9maXJzdCIsImNsb2p1cmUudGVzdC5jaGVjay5yb3NlLXRyZWUvam9pbiIsIm91dGVyLXJvb3QiLCJvdXRlci1jaGlsZHJlbiIsImlubmVyLXJvb3QiLCJpbm5lci1jaGlsZHJlbiIsImNsanMuY29yZS9jb25jYXQiLCJjbGpzLmNvcmUvbWFwIiwiY2xvanVyZS50ZXN0LmNoZWNrLnJvc2UtdHJlZS9wdXJlIiwieCIsImNsb2p1cmUudGVzdC5jaGVjay5yb3NlLXRyZWUvZm1hcCIsImYiLCJwMV9fMSMiLCJjbG9qdXJlLnRlc3QuY2hlY2sucm9zZS10cmVlL2JpbmQiLCJtIiwiayIsImNsb2p1cmUudGVzdC5jaGVjay5yb3NlLXRyZWUvZmlsdGVyIiwicHJlZCIsInAxX18yIyIsInAxX18zIyIsImNsanMuY29yZS9maWx0ZXIiLCJjbG9qdXJlLnRlc3QuY2hlY2sucm9zZS10cmVlL3Blcm11dGF0aW9ucyIsInJvc2VzIiwiaXRlcl9fMTU1NDdfX2F1dG9fXyIsInNfXzU5IiwieHNfXzEwMDY1X19hdXRvX18iLCJ2ZWNfXzY3IiwiY2xqcy5jb3JlL250aCIsIml0ZXJ5c19fMTU1NDNfX2F1dG9fXyIsInNfXzYxIiwiY2xqcy5jb3JlL2NodW5rZWQtc2VxPyIsImNfXzE1NTQ1X19hdXRvX18iLCJzaXplX18xNTU0Nl9fYXV0b19fIiwiY2xqcy5jb3JlL2NvdW50IiwiYl9fNjMiLCJjbGpzLmNvcmUvY2h1bmstYnVmZmVyIiwiaV9fNjIiLCJjbGpzLmNvcmUvLW50aCIsImNsanMuY29yZS9jaHVuay1hcHBlbmQiLCJjbGpzLmNvcmUvY2h1bmstY29ucyIsImNsanMuY29yZS9jaHVuayIsIml0ZXJfXzYwIiwiY2xqcy5jb3JlL2NodW5rLXJlc3QiLCJmc19fMTU1NDRfX2F1dG9fXyIsIml0ZXJfXzU4IiwiaW5kZXgiLCJjbGpzLmNvcmUvdmVjdG9yIiwiY2xqcy5jb3JlL3JhbmdlIiwiY2hpbGQiLCJjbGpzLmNvcmUvYXNzb2MiLCJjbG9qdXJlLnRlc3QuY2hlY2sucm9zZS10cmVlL3ppcCIsImNsanMuY29yZS9hcHBseSIsInAxX180IyIsImNsb2p1cmUudGVzdC5jaGVjay5yb3NlLXRyZWUvcmVtb3ZlIiwiY2xqcy5jb3JlL21hcC1pbmRleGVkIiwiXyIsImNsanMuY29yZS92ZWMiLCJjbG9qdXJlLnRlc3QuY2hlY2sucm9zZS10cmVlL3NocmluayIsInAxX181IyIsImNsb2p1cmUudGVzdC5jaGVjay5yb3NlLXRyZWUvY29sbGFwc2UiLCJ0aGUtY2hpbGRyZW4iLCJjbGpzLmNvcmUvbWFwY2F0IiwiY2xvanVyZS50ZXN0LmNoZWNrLnJvc2UtdHJlZS9tYWtlLXN0YWNrIiwic3RhY2siLCJ0ZW1wX185ODg5X19hdXRvX18iLCJjbG9qdXJlLnRlc3QuY2hlY2sucm9zZS10cmVlL3NlcSIsImhlbHBlciIsInNlZW4iLCJub2RlIiwiY2xqcy5jb3JlL25vdCIsImNsanMuY29yZS9jb25qIiwiY2xqcy5jb3JlL2ZmaXJzdCIsInIiLCJjbGpzLmNvcmUvY2h1bmstZmlyc3QiXSwic291cmNlc0NvbnRlbnQiOlsiOyAgIENvcHlyaWdodCAoYykgUmljaCBIaWNrZXksIFJlaWQgRHJhcGVyLCBhbmQgY29udHJpYnV0b3JzLlxuOyAgIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG47ICAgVGhlIHVzZSBhbmQgZGlzdHJpYnV0aW9uIHRlcm1zIGZvciB0aGlzIHNvZnR3YXJlIGFyZSBjb3ZlcmVkIGJ5IHRoZVxuOyAgIEVjbGlwc2UgUHVibGljIExpY2Vuc2UgMS4wIChodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvZWNsaXBzZS0xLjAucGhwKVxuOyAgIHdoaWNoIGNhbiBiZSBmb3VuZCBpbiB0aGUgZmlsZSBlcGwtdjEwLmh0bWwgYXQgdGhlIHJvb3Qgb2YgdGhpcyBkaXN0cmlidXRpb24uXG47ICAgQnkgdXNpbmcgdGhpcyBzb2Z0d2FyZSBpbiBhbnkgZmFzaGlvbiwgeW91IGFyZSBhZ3JlZWluZyB0byBiZSBib3VuZCBieVxuOyAgIHRoZSB0ZXJtcyBvZiB0aGlzIGxpY2Vuc2UuXG47ICAgWW91IG11c3Qgbm90IHJlbW92ZSB0aGlzIG5vdGljZSwgb3IgYW55IG90aGVyLCBmcm9tIHRoaXMgc29mdHdhcmUuXG5cbihucyBjbG9qdXJlLnRlc3QuY2hlY2sucm9zZS10cmVlXG4gIFwiQSBsYXp5IHRyZWUgZGF0YSBzdHJ1Y3R1cmUgdXNlZCBmb3Igc2hyaW5raW5nLlwiXG4gICg6cmVmZXItY2xvanVyZSA6ZXhjbHVkZSBbZmlsdGVyIHJlbW92ZSBzZXFdKVxuICAoOnJlcXVpcmUgWyM/KDpjbGogY2xvanVyZS5jb3JlIDpjbGpzIGNsanMuY29yZSkgOmFzIGNvcmVdKSlcblxuKGRlZnR5cGUgUm9zZVRyZWUgW3Jvb3QgY2hpbGRyZW5dXG4gICM/KDpjbGogIGNsb2p1cmUubGFuZy5JbmRleGVkXG4gICAgIDpjbGpzIElJbmRleGVkKVxuICAoIz8oOmNsaiBudGggOmNsanMgLW50aCkgW3RoaXMgaV1cbiAgICAoY29uZCAoPSBpIDApIHJvb3RcbiAgICAgICAgICAoPSBpIDEpIGNoaWxkcmVuXG4gICAgICAgICAgOmVsc2UgKHRocm93ICM/KDpjbGogIChJbmRleE91dE9mQm91bmRzRXhjZXB0aW9uLilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsanMgKGpzL0Vycm9yLiBcIkluZGV4IG91dCBvZiBib3VuZHMgaW4gcm9zZSB0cmVlXCIpKSkpKVxuXG4gICgjPyg6Y2xqIG50aCA6Y2xqcyAtbnRoKSBbdGhpcyBpIG5vdC1mb3VuZF1cbiAgICAoY29uZCAoPSBpIDApIHJvb3RcbiAgICAgICAgICAoPSBpIDEpIGNoaWxkcmVuXG4gICAgICAgICAgOmVsc2Ugbm90LWZvdW5kKSkpXG5cbihkZWZuIHJvb3RcbiAgXCJSZXR1cm5zIHRoZSByb290IG9mIGEgUm9zZSB0cmVlLlwiXG4gIHs6bm8tZG9jIHRydWV9XG4gIFteUm9zZVRyZWUgcm9zZV1cbiAgKC4tcm9vdCByb3NlKSlcblxuKGRlZm4gY2hpbGRyZW5cbiAgXCJSZXR1cm5zIHRoZSBjaGlsZHJlbiBvZiB0aGUgcm9vdCBvZiB0aGUgUm9zZSB0cmVlLlwiXG4gIHs6bm8tZG9jIHRydWV9XG4gIFteUm9zZVRyZWUgcm9zZV1cbiAgKC4tY2hpbGRyZW4gcm9zZSkpXG5cbihkZWZuIG1ha2Utcm9zZVxuICBbcm9vdCBjaGlsZHJlbl1cbiAgKFJvc2VUcmVlLiByb290IGNoaWxkcmVuKSlcblxuKGRlZm4tIGV4Y2x1ZGUtbnRoXG4gIFwiRXhjbHVkZSB0aGUgbnRoIHZhbHVlIGluIGEgY29sbGVjdGlvbi5cIlxuICBbbiBjb2xsXVxuICAobGF6eS1zZXFcbiAgICAod2hlbi1sZXQgW3MgKGNvcmUvc2VxIGNvbGwpXVxuICAgICAgKGlmICh6ZXJvPyBuKVxuICAgICAgICAocmVzdCBjb2xsKVxuICAgICAgICAoY29ucyAoZmlyc3QgcylcbiAgICAgICAgICAgICAgKGV4Y2x1ZGUtbnRoIChkZWMgbikgKHJlc3QgcykpKSkpKSlcblxuKGRlZm4gam9pblxuICBcIlR1cm4gYSB0cmVlIG9mIHRyZWVzIGludG8gYSBzaW5nbGUgdHJlZS4gRG9lcyB0aGlzIGJ5IGNvbmNhdGVuYXRpbmdcbiAgY2hpbGRyZW4gb2YgdGhlIGlubmVyIGFuZCBvdXRlciB0cmVlcy5cIlxuICB7Om5vLWRvYyB0cnVlfVxuICBbcm9zZV1cbiAgKGxldCBbb3V0ZXItcm9vdCAocm9vdCByb3NlKVxuICAgICAgICBvdXRlci1jaGlsZHJlbiAoY2hpbGRyZW4gcm9zZSlcbiAgICAgICAgaW5uZXItcm9vdCAocm9vdCBvdXRlci1yb290KVxuICAgICAgICBpbm5lci1jaGlsZHJlbiAoY2hpbGRyZW4gb3V0ZXItcm9vdCldXG4gICAgKG1ha2Utcm9zZSBpbm5lci1yb290IChjb25jYXQgKG1hcCBqb2luIG91dGVyLWNoaWxkcmVuKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyLWNoaWxkcmVuKSkpKVxuXG5cbihkZWZuIHB1cmVcbiAgXCJQdXRzIGEgdmFsdWUgYHhgIGludG8gYSBSb3NlIHRyZWUsIHdpdGggbm8gY2hpbGRyZW4uXCJcbiAgezpuby1kb2MgdHJ1ZX1cbiAgW3hdXG4gIChtYWtlLXJvc2UgeCBbXSkpXG5cbihkZWZuIGZtYXBcbiAgXCJBcHBsaWVzIGZ1bmN0aW9ucyBgZmAgdG8gYWxsIHZhbHVlcyBpbiB0aGUgdHJlZS5cIlxuICB7Om5vLWRvYyB0cnVlfVxuICBbZiByb3NlXVxuICAobWFrZS1yb3NlIChmIChyb290IHJvc2UpKSAobWFwICMoZm1hcCBmICUpIChjaGlsZHJlbiByb3NlKSkpKVxuXG4oZGVmbiBiaW5kXG4gIFwiVGFrZXMgYSBSb3NlIHRyZWUgKG0pIGFuZCBhIGZ1bmN0aW9uIChrKSBmcm9tXG4gIHZhbHVlcyB0byBSb3NlIHRyZWUgYW5kIHJldHVybnMgYSBuZXcgUm9zZSB0cmVlLlxuICBUaGlzIGlzIHRoZSBtb25hZGljIGJpbmQgKD4+PSkgZm9yIFJvc2UgdHJlZXMuXCJcbiAgezpuby1kb2MgdHJ1ZX1cbiAgW20ga11cbiAgKGpvaW4gKGZtYXAgayBtKSkpXG5cbihkZWZuIGZpbHRlclxuICBcIlJldHVybnMgYSBuZXcgUm9zZSB0cmVlIHdob3NlIHZhbHVlcyBwYXNzIGBwcmVkYC4gVmFsdWVzIHdob1xuICBkbyBub3QgcGFzcyBgcHJlZGAgaGF2ZSB0aGVpciBjaGlsZHJlbiBjdXQgb3V0IGFzIHdlbGwuXG4gIFRha2VzIGEgbGlzdCBvZiByb3Nlcywgbm90IGEgcm9zZVwiXG4gIHs6bm8tZG9jIHRydWV9XG4gIFtwcmVkIHJvc2VdXG4gIChtYWtlLXJvc2UgKHJvb3Qgcm9zZSlcbiAgICAgICAgICAgICAobWFwICMoZmlsdGVyIHByZWQgJSlcbiAgICAgICAgICAgICAgICAgIChjb3JlL2ZpbHRlciAjKHByZWQgKHJvb3QgJSkpIChjaGlsZHJlbiByb3NlKSkpKSlcblxuKGRlZm4gcGVybXV0YXRpb25zXG4gIFwiQ3JlYXRlIGEgc2VxIG9mIHZlY3RvcnMsIHdoZXJlIGVhY2ggcm9zZSBpbiB0dXJuLCBoYXMgYmVlbiByZXBsYWNlZFxuICBieSBpdHMgY2hpbGRyZW4uXCJcbiAgezpuby1kb2MgdHJ1ZX1cbiAgW3Jvc2VzXVxuICAoZm9yIFtbcm9zZSBpbmRleF0gKG1hcCB2ZWN0b3Igcm9zZXMgKHJhbmdlKSlcbiAgICAgICAgY2hpbGQgKGNoaWxkcmVuIHJvc2UpXVxuICAgIChhc3NvYyByb3NlcyBpbmRleCBjaGlsZCkpKVxuXG4oZGVmbiB6aXBcbiAgXCJBcHBseSBgZmAgdG8gdGhlIHNlcXVlbmNlIG9mIFJvc2UgdHJlZXMgYHJvc2VzYC5cIlxuICB7Om5vLWRvYyB0cnVlfVxuICBbZiByb3Nlc11cbiAgKG1ha2Utcm9zZVxuICAgKGFwcGx5IGYgKG1hcCByb290IHJvc2VzKSlcbiAgIChtYXAgIyh6aXAgZiAlKVxuICAgICAgICAocGVybXV0YXRpb25zIHJvc2VzKSkpKVxuXG4oZGVmbiByZW1vdmVcbiAgezpuby1kb2MgdHJ1ZX1cbiAgW3Jvc2VzXVxuICAoY29uY2F0XG4gICAgKG1hcC1pbmRleGVkIChmbiBbaW5kZXggX10gKGV4Y2x1ZGUtbnRoIGluZGV4IHJvc2VzKSkgcm9zZXMpXG4gICAgKHBlcm11dGF0aW9ucyAodmVjIHJvc2VzKSkpKVxuXG4oZGVmbiBzaHJpbmtcbiAgezpuby1kb2MgdHJ1ZX1cbiAgW2Ygcm9zZXNdXG4gIChpZiAoY29yZS9zZXEgcm9zZXMpXG4gICAgKG1ha2Utcm9zZSAoYXBwbHkgZiAobWFwIHJvb3Qgcm9zZXMpKVxuICAgICAgICAgICAgICAgKG1hcCAjKHNocmluayBmICUpIChyZW1vdmUgcm9zZXMpKSlcbiAgICAobWFrZS1yb3NlIChmKSBbXSkpKVxuXG4oZGVmbiBjb2xsYXBzZVxuICBcIlJldHVybiBhIG5ldyByb3NlLXRyZWUgd2hvc2UgZGVwdGgtb25lIGNoaWxkcmVuXG4gIGFyZSB0aGUgY2hpbGRyZW4gZnJvbSBkZXB0aCBvbmUgX2FuZF8gdHdvIG9mIHRoZSBpbnB1dFxuICB0cmVlLlwiXG4gIHs6bm8tZG9jIHRydWV9XG4gIFtyb3NlXVxuICAobWFrZS1yb3NlIChyb290IHJvc2UpXG4gICAgICAgICAgICAgKGxldCBbdGhlLWNoaWxkcmVuIChjaGlsZHJlbiByb3NlKV1cbiAgICAgICAgICAgICAgIChjb25jYXQgKG1hcCBjb2xsYXBzZSB0aGUtY2hpbGRyZW4pXG4gICAgICAgICAgICAgICAgICAgICAgIChtYXAgY29sbGFwc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAobWFwY2F0IGNoaWxkcmVuIHRoZS1jaGlsZHJlbikpKSkpKVxuXG4oZGVmbi0gbWFrZS1zdGFja1xuICBbY2hpbGRyZW4gc3RhY2tdXG4gIChpZi1sZXQgW3MgKGNvcmUvc2VxIGNoaWxkcmVuKV1cbiAgICAoY29ucyBjaGlsZHJlbiBzdGFjaylcbiAgICBzdGFjaykpXG5cbihkZWZuIHNlcVxuICBcIkNyZWF0ZSBhIGxhenktc2VxIG9mIGFsbCBvZiB0aGUgKHVuaXF1ZSkgbm9kZXMgaW4gYSBzaHJpbmstdHJlZS5cbiAgVGhpcyBhc3N1bWVzIHRoYXQgdHdvIG5vZGVzIHdpdGggdGhlIHNhbWUgdmFsdWUgaGF2ZSB0aGUgc2FtZSBjaGlsZHJlbi5cbiAgV2hpbGUgaXQncyBub3QgY29tbW9uLCBpdCdzIHBvc3NpYmxlIHRvIGNyZWF0ZSB0cmVlcyB0aGF0IGRvbid0XG4gIGZpdCB0aGF0IGRlc2NyaXB0aW9uLiBUaGlzIGZ1bmN0aW9uIGlzIHNpZ25pZmljYW50bHkgZmFzdGVyIHRoYW5cbiAgYnJ1dGUtZm9yY2UgZW51bWVyYXRpbmcgYWxsIG9mIHRoZSBub2RlcyBpbiBhIHRyZWUsIGFzIHRoZXJlIHdpbGxcbiAgYmUgbWFueSBkdXBsaWNhdGVzLlwiXG4gIFtyb3NlXVxuICAobGV0IFtoZWxwZXIgKGZuIGhlbHBlciBbcm9zZSBzZWVuIHN0YWNrXVxuICAgICAgICAgICAgICAgICAobGV0IFtub2RlIChyb290IHJvc2UpXG4gICAgICAgICAgICAgICAgICAgICAgIHRoZS1jaGlsZHJlbiAoY2hpbGRyZW4gcm9zZSldXG4gICAgICAgICAgICAgICAgICAgKGxhenktc2VxXG4gICAgICAgICAgICAgICAgICAgIChpZi1ub3QgKHNlZW4gbm9kZSlcbiAgICAgICAgICAgICAgICAgICAgICAoY29ucyBub2RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGlmIChjb3JlL3NlcSB0aGUtY2hpbGRyZW4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaGVscGVyIChmaXJzdCB0aGUtY2hpbGRyZW4pIChjb25qIHNlZW4gbm9kZSkgKG1ha2Utc3RhY2sgKHJlc3QgdGhlLWNoaWxkcmVuKSBzdGFjaykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAod2hlbi1sZXQgW3MgKGNvcmUvc2VxIHN0YWNrKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGxldCBbZiAoZmZpcnN0IHMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIgKHJlc3QgKGZpcnN0IHMpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaGVscGVyIGYgKGNvbmogc2VlbiBub2RlKSAobWFrZS1zdGFjayByIChyZXN0IHMpKSkpKSkpXG4gICAgICAgICAgICAgICAgICAgICAgKHdoZW4tbGV0IFtzIChjb3JlL3NlcSBzdGFjayldXG4gICAgICAgICAgICAgICAgICAgICAgICAobGV0IFtmIChmZmlyc3QgcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIgKHJlc3QgKGZpcnN0IHMpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKGhlbHBlciBmIHNlZW4gKG1ha2Utc3RhY2sgciAocmVzdCBzKSkpKSkpKSkpXVxuICAgIChoZWxwZXIgcm9zZSAje30gJygpKSkpXG4iXX0=