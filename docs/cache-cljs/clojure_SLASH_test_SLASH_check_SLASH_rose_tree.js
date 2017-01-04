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

clojure.test.check.rose_tree.RoseTree.cljs$lang$ctorPrWriter = (function (this__22602__auto__,writer__22603__auto__,opt__22604__auto__){
return cljs.core._write.call(null,writer__22603__auto__,"clojure.test.check.rose-tree/RoseTree");
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
var temp__19834__auto__ = cljs.core.seq.call(null,coll);
if(temp__19834__auto__){
var s = temp__19834__auto__;
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
var iter__23197__auto__ = (function clojure$test$check$rose_tree$permutations_$_iter__58(s__59){
return (new cljs.core.LazySeq(null,(function (){
var s__59__$1 = s__59;
while(true){
var temp__19834__auto__ = cljs.core.seq.call(null,s__59__$1);
if(temp__19834__auto__){
var xs__19764__auto__ = temp__19834__auto__;
var vec__67 = cljs.core.first.call(null,xs__19764__auto__);
var rose = cljs.core.nth.call(null,vec__67,(0),null);
var index = cljs.core.nth.call(null,vec__67,(1),null);
var iterys__23193__auto__ = ((function (s__59__$1,vec__67,rose,index,xs__19764__auto__,temp__19834__auto__){
return (function clojure$test$check$rose_tree$permutations_$_iter__58_$_iter__60(s__61){
return (new cljs.core.LazySeq(null,((function (s__59__$1,vec__67,rose,index,xs__19764__auto__,temp__19834__auto__){
return (function (){
var s__61__$1 = s__61;
while(true){
var temp__19834__auto____$1 = cljs.core.seq.call(null,s__61__$1);
if(temp__19834__auto____$1){
var s__61__$2 = temp__19834__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__61__$2)){
var c__23195__auto__ = cljs.core.chunk_first.call(null,s__61__$2);
var size__23196__auto__ = cljs.core.count.call(null,c__23195__auto__);
var b__63 = cljs.core.chunk_buffer.call(null,size__23196__auto__);
if((function (){var i__62 = (0);
while(true){
if((i__62 < size__23196__auto__)){
var child = cljs.core._nth.call(null,c__23195__auto__,i__62);
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
});})(s__59__$1,vec__67,rose,index,xs__19764__auto__,temp__19834__auto__))
,null,null));
});})(s__59__$1,vec__67,rose,index,xs__19764__auto__,temp__19834__auto__))
;
var fs__23194__auto__ = cljs.core.seq.call(null,iterys__23193__auto__.call(null,clojure.test.check.rose_tree.children.call(null,rose)));
if(fs__23194__auto__){
return cljs.core.concat.call(null,fs__23194__auto__,clojure$test$check$rose_tree$permutations_$_iter__58.call(null,cljs.core.rest.call(null,s__59__$1)));
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
return iter__23197__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,roses,cljs.core.range.call(null)));
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
var temp__19520__auto__ = cljs.core.seq.call(null,children);
if(temp__19520__auto__){
var s = temp__19520__auto__;
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
return cljs.core.cons.call(null,node,((cljs.core.seq.call(null,the_children))?clojure$test$check$rose_tree$seq_$_helper.call(null,cljs.core.first.call(null,the_children),cljs.core.conj.call(null,seen,node),clojure.test.check.rose_tree.make_stack.call(null,cljs.core.rest.call(null,the_children),stack)):(function (){var temp__19834__auto__ = cljs.core.seq.call(null,stack);
if(temp__19834__auto__){
var s = temp__19834__auto__;
var f = cljs.core.ffirst.call(null,s);
var r = cljs.core.rest.call(null,cljs.core.first.call(null,s));
return clojure$test$check$rose_tree$seq_$_helper.call(null,f,cljs.core.conj.call(null,seen,node),clojure.test.check.rose_tree.make_stack.call(null,r,cljs.core.rest.call(null,s)));
} else {
return null;
}
})()));
} else {
var temp__19834__auto__ = cljs.core.seq.call(null,stack);
if(temp__19834__auto__){
var s = temp__19834__auto__;
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
