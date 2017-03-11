goog.provide("re_frame.interop");
(function (){
re_frame.interop.next_tick = goog.async.nextTick; return (
new cljs.core.Var(function(){return re_frame.interop.next_tick;},new cljs.core.Symbol("re-frame.interop","next-tick","re-frame.interop/next-tick",(-2046294661),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.interop","re-frame.interop",(-2069048160),null),new cljs.core.Symbol(null,"next-tick","next-tick",(-500999387),null),"re_frame/interop.cljs",(15),(1),(6),(6),cljs.core.List.EMPTY,null,(cljs.core.truth_(re_frame.interop.next_tick)?re_frame.interop.next_tick.cljs$lang$test:null)])));})()
;
(function (){
re_frame.interop.empty_queue = cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY); return (
new cljs.core.Var(function(){return re_frame.interop.empty_queue;},new cljs.core.Symbol("re-frame.interop","empty-queue","re-frame.interop/empty-queue",(1131411224),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.interop","re-frame.interop",(-2069048160),null),new cljs.core.Symbol(null,"empty-queue","empty-queue",(-1081794310),null),"re_frame/interop.cljs",(17),(1),(8),(8),cljs.core.List.EMPTY,null,(cljs.core.truth_(re_frame.interop.empty_queue)?re_frame.interop.empty_queue.cljs$lang$test:null)])));})()
;
(function (){
re_frame.interop.after_render = reagent.core.after_render; return (
new cljs.core.Var(function(){return re_frame.interop.after_render;},new cljs.core.Symbol("re-frame.interop","after-render","re-frame.interop/after-render",(1022166374),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.interop","re-frame.interop",(-2069048160),null),new cljs.core.Symbol(null,"after-render","after-render",(-656902336),null),"re_frame/interop.cljs",(18),(1),(10),(10),cljs.core.List.EMPTY,null,(cljs.core.truth_(re_frame.interop.after_render)?re_frame.interop.after_render.cljs$lang$test:null)])));})()
;
/**
 * @define {boolean}
 */
(function (){
re_frame.interop.debug_enabled_QMARK_ = goog.DEBUG; return (
new cljs.core.Var(function(){return re_frame.interop.debug_enabled_QMARK_;},new cljs.core.Symbol("re-frame.interop","debug-enabled?","re-frame.interop/debug-enabled?",(-1300618403),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.interop","re-frame.interop",(-2069048160),null),new cljs.core.Symbol(null,"debug-enabled?","debug-enabled?",(-1785892485),null),"re_frame/interop.cljs",(29),(1),(16),(16),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),cljs.core.List.EMPTY,"@define {boolean}",((re_frame.interop.debug_enabled_QMARK_)?re_frame.interop.debug_enabled_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
re_frame.interop.ratom = (function re_frame$interop$ratom(x){
return reagent.core.atom.call(null,x);
}); return (
new cljs.core.Var(function(){return re_frame.interop.ratom;},new cljs.core.Symbol("re-frame.interop","ratom","re-frame.interop/ratom",(1044957430),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.interop","re-frame.interop",(-2069048160),null),new cljs.core.Symbol(null,"ratom","ratom",(1514010260),null),"re_frame/interop.cljs",(12),(1),(18),(18),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(re_frame.interop.ratom)?re_frame.interop.ratom.cljs$lang$test:null)])));})()
;
(function (){
re_frame.interop.ratom_QMARK_ = (function re_frame$interop$ratom_QMARK_(x){
if(!((x == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === x.reagent$ratom$IReactiveAtom$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,x);
}
}); return (
new cljs.core.Var(function(){return re_frame.interop.ratom_QMARK_;},new cljs.core.Symbol("re-frame.interop","ratom?","re-frame.interop/ratom?",(148097364),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.interop","re-frame.interop",(-2069048160),null),new cljs.core.Symbol(null,"ratom?","ratom?",(757406582),null),"re_frame/interop.cljs",(13),(1),(21),(21),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(re_frame.interop.ratom_QMARK_)?re_frame.interop.ratom_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
re_frame.interop.deref_QMARK_ = (function re_frame$interop$deref_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
}); return (
new cljs.core.Var(function(){return re_frame.interop.deref_QMARK_;},new cljs.core.Symbol("re-frame.interop","deref?","re-frame.interop/deref?",(-2108816816),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.interop","re-frame.interop",(-2069048160),null),new cljs.core.Symbol(null,"deref?","deref?",(-1506488202),null),"re_frame/interop.cljs",(13),(1),(24),(24),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(re_frame.interop.deref_QMARK_)?re_frame.interop.deref_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
re_frame.interop.make_reaction = (function re_frame$interop$make_reaction(f){
return reagent.ratom.make_reaction.call(null,f);
}); return (
new cljs.core.Var(function(){return re_frame.interop.make_reaction;},new cljs.core.Symbol("re-frame.interop","make-reaction","re-frame.interop/make-reaction",(1467945106),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.interop","re-frame.interop",(-2069048160),null),new cljs.core.Symbol(null,"make-reaction","make-reaction",(1935680112),null),"re_frame/interop.cljs",(20),(1),(28),(28),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null)], null)),null,(cljs.core.truth_(re_frame.interop.make_reaction)?re_frame.interop.make_reaction.cljs$lang$test:null)])));})()
;
(function (){
re_frame.interop.add_on_dispose_BANG_ = (function re_frame$interop$add_on_dispose_BANG_(a_ratom,f){
return reagent.ratom.add_on_dispose_BANG_.call(null,a_ratom,f);
}); return (
new cljs.core.Var(function(){return re_frame.interop.add_on_dispose_BANG_;},new cljs.core.Symbol("re-frame.interop","add-on-dispose!","re-frame.interop/add-on-dispose!",(1950280373),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.interop","re-frame.interop",(-2069048160),null),new cljs.core.Symbol(null,"add-on-dispose!","add-on-dispose!",(1342807147),null),"re_frame/interop.cljs",(22),(1),(31),(31),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a-ratom","a-ratom",(-1156870061),null),new cljs.core.Symbol(null,"f","f",(43394975),null)], null)),null,(cljs.core.truth_(re_frame.interop.add_on_dispose_BANG_)?re_frame.interop.add_on_dispose_BANG_.cljs$lang$test:null)])));})()
;
(function (){
re_frame.interop.dispose_BANG_ = (function re_frame$interop$dispose_BANG_(a_ratom){
return reagent.ratom.dispose_BANG_.call(null,a_ratom);
}); return (
new cljs.core.Var(function(){return re_frame.interop.dispose_BANG_;},new cljs.core.Symbol("re-frame.interop","dispose!","re-frame.interop/dispose!",(-200864731),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.interop","re-frame.interop",(-2069048160),null),new cljs.core.Symbol(null,"dispose!","dispose!",(-395693497),null),"re_frame/interop.cljs",(15),(1),(34),(34),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a-ratom","a-ratom",(-1156870061),null)], null)),null,(cljs.core.truth_(re_frame.interop.dispose_BANG_)?re_frame.interop.dispose_BANG_.cljs$lang$test:null)])));})()
;
(function (){
re_frame.interop.set_timeout_BANG_ = (function re_frame$interop$set_timeout_BANG_(f,ms){
return setTimeout(f,ms);
}); return (
new cljs.core.Var(function(){return re_frame.interop.set_timeout_BANG_;},new cljs.core.Symbol("re-frame.interop","set-timeout!","re-frame.interop/set-timeout!",(2142858270),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.interop","re-frame.interop",(-2069048160),null),new cljs.core.Symbol(null,"set-timeout!","set-timeout!",(1670782512),null),"re_frame/interop.cljs",(19),(1),(37),(37),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"ms","ms",(487821794),null)], null)),null,(cljs.core.truth_(re_frame.interop.set_timeout_BANG_)?re_frame.interop.set_timeout_BANG_.cljs$lang$test:null)])));})()
;
(function (){
re_frame.interop.now = (function re_frame$interop$now(){
if(typeof performance.now !== 'undefined'){
return performance.now();
} else {
return Date.now();
}
}); return (
new cljs.core.Var(function(){return re_frame.interop.now;},new cljs.core.Symbol("re-frame.interop","now","re-frame.interop/now",(458059402),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.interop","re-frame.interop",(-2069048160),null),new cljs.core.Symbol(null,"now","now",(-9994004),null),"re_frame/interop.cljs",(10),(1),(40),(40),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(re_frame.interop.now)?re_frame.interop.now.cljs$lang$test:null)])));})()
;
/**
 * Produces an id for reactive Reagent values
 *   e.g. reactions, ratoms, cursors.
 */
(function (){
re_frame.interop.reagent_id = (function re_frame$interop$reagent_id(reactive_val){
if(((!((reactive_val == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === reactive_val.reagent$ratom$IReactiveAtom$)))?true:false):false)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var pred__31 = cljs.core.instance_QMARK_;
var expr__32 = reactive_val;
if(cljs.core.truth_(pred__31.call(null,reagent.ratom.RAtom,expr__32))){
return "ra";
} else {
if(cljs.core.truth_(pred__31.call(null,reagent.ratom.RCursor,expr__32))){
return "rc";
} else {
if(cljs.core.truth_(pred__31.call(null,reagent.ratom.Reaction,expr__32))){
return "rx";
} else {
if(cljs.core.truth_(pred__31.call(null,reagent.ratom.Track,expr__32))){
return "tr";
} else {
return "other";
}
}
}
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash.call(null,reactive_val))].join('');
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return re_frame.interop.reagent_id;},new cljs.core.Symbol("re-frame.interop","reagent-id","re-frame.interop/reagent-id",(678020802),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frame.interop","re-frame.interop",(-2069048160),null),new cljs.core.Symbol(null,"reagent-id","reagent-id",(873638112),null),"re_frame/interop.cljs",(17),(1),(45),(45),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reactive-val","reactive-val",(1790846826),null)], null)),"Produces an id for reactive Reagent values\n  e.g. reactions, ratoms, cursors.",(cljs.core.truth_(re_frame.interop.reagent_id)?re_frame.interop.reagent_id.cljs$lang$test:null)])));})()
;
