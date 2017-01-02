goog.provide("om.tempid");

/**
* @constructor
 * @implements {om.tempid.Object}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IPrintWithWriter}
*/
om.tempid.TempId = (function (id,__hash){
this.id = id;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2141192192;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om.tempid.TempId.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});

om.tempid.TempId.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return ((other instanceof om.tempid.TempId)) && (cljs.core._EQ_.call(null,this$__$1.id,other.id));
});

om.tempid.TempId.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.__hash == null)){
self__.__hash = cljs.core.hash.call(null,self__.id);
} else {
}

return self__.__hash;
});

om.tempid.TempId.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.write_all.call(null,writer,"#om/id[\"",self__.id,"\"]");
});

om.tempid.TempId.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"id","id",(252129435),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",(-1328796629),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null))], null);
});

om.tempid.TempId.cljs$lang$type = true;

om.tempid.TempId.cljs$lang$ctorStr = "om.tempid/TempId";

om.tempid.TempId.cljs$lang$ctorPrWriter = (function (this__22602__auto__,writer__22603__auto__,opt__22604__auto__){
return cljs.core._write.call(null,writer__22603__auto__,"om.tempid/TempId");
});

(function (){
om.tempid.__GT_TempId = (function om$tempid$__GT_TempId(id,__hash){
return (new om.tempid.TempId(id,__hash));
}); return (
new cljs.core.Var(function(){return om.tempid.__GT_TempId;},new cljs.core.Symbol("om.tempid","->TempId","om.tempid/->TempId",(-138469644),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("om.tempid","Object","om.tempid/Object",(-318270843),null),null,new cljs.core.Symbol("cljs.core","IEquiv","cljs.core/IEquiv",(-1245752602),null),null,new cljs.core.Symbol("cljs.core","IHash","cljs.core/IHash",(-32453786),null),null,new cljs.core.Symbol("cljs.core","IPrintWithWriter","cljs.core/IPrintWithWriter",(1349251417),null),null], null), null),new cljs.core.Symbol(null,"om.tempid","om.tempid",(64977556),null),new cljs.core.Symbol(null,"->TempId","->TempId",(635399413),null),"om/tempid.cljc",(19),(4),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(8),(8),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"id","id",(252129435),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",(-1328796629),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null))], null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("cljs.core","IEquiv","cljs.core/IEquiv",(-1245752602),null),null,new cljs.core.Symbol("cljs.core","IHash","cljs.core/IHash",(-32453786),null),null,new cljs.core.Symbol("cljs.core","IPrintWithWriter","cljs.core/IPrintWithWriter",(1349251417),null),null], null), null),null,(cljs.core.truth_(om.tempid.__GT_TempId)?om.tempid.__GT_TempId.cljs$lang$test:null)])));})()
;

(function (){
om.tempid.tempid = (function om$tempid$tempid(var_args){
var args239 = [];
var len__23656__auto___242 = arguments.length;
var i__23657__auto___243 = (0);
while(true){
if((i__23657__auto___243 < len__23656__auto___242)){
args239.push((arguments[i__23657__auto___243]));

var G__244 = (i__23657__auto___243 + (1));
i__23657__auto___243 = G__244;
continue;
} else {
}
break;
}

var G__241 = args239.length;
switch (G__241) {
case (0):
return om.tempid.tempid.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return om.tempid.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args239.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return om.tempid.tempid;},new cljs.core.Symbol("om.tempid","tempid","om.tempid/tempid",(1145052546),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.tempid","om.tempid",(64977556),null),new cljs.core.Symbol(null,"tempid","tempid",(-1226772547),null),"om/tempid.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",(252129435),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",(252129435),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(4),(26),(26),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",(252129435),null)], null)),null,(cljs.core.truth_(om.tempid.tempid)?om.tempid.tempid.cljs$lang$test:null)])));})()
;

om.tempid.tempid.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.tempid.tempid.call(null,cljs.core.random_uuid.call(null));
});

om.tempid.tempid.cljs$core$IFn$_invoke$arity$1 = (function (id){
return (new om.tempid.TempId(id,null));
});

om.tempid.tempid.cljs$lang$maxFixedArity = (1);

new cljs.core.Var(function(){return om.tempid.tempid;},new cljs.core.Symbol("om.tempid","tempid","om.tempid/tempid",(1145052546),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.tempid","om.tempid",(64977556),null),new cljs.core.Symbol(null,"tempid","tempid",(-1226772547),null),"om/tempid.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",(252129435),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",(252129435),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(4),(26),(26),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",(252129435),null)], null)),null,(cljs.core.truth_(om.tempid.tempid)?om.tempid.tempid.cljs$lang$test:null)]));
(function (){
om.tempid.tempid_QMARK_ = (function om$tempid$tempid_QMARK_(x){
return (x instanceof om.tempid.TempId);
}); return (
new cljs.core.Var(function(){return om.tempid.tempid_QMARK_;},new cljs.core.Symbol("om.tempid","tempid?","om.tempid/tempid?",(732351110),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"om.tempid","om.tempid",(64977556),null),new cljs.core.Symbol(null,"tempid?","tempid?",(2034653313),null),"om/tempid.cljc",(14),(1),(52),(52),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,((om.tempid.tempid_QMARK_)?om.tempid.tempid_QMARK_.cljs$lang$test:null)])));})()
;
