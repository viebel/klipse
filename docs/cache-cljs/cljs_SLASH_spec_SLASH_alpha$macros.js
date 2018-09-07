goog.provide("cljs.spec.alpha$macros");
if(typeof cljs.spec.alpha$macros.registry_ref !== 'undefined'){
} else {
cljs.spec.alpha$macros.registry_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Returns a symbol from a symbol or var
 */
cljs.spec.alpha$macros.__GT_sym = (function cljs$spec$alpha$macros$__GT_sym(x){
if(cljs.core.map_QMARK_(x)){
return new cljs.core.Keyword(null,"name","name",(1843675177)).cljs$core$IFn$_invoke$arity$1(x);
} else {
return x;
}
});
cljs.spec.alpha$macros.unfn = (function cljs$spec$alpha$macros$unfn(expr){
if((cljs.core.seq_QMARK_(expr)) && ((cljs.core.first(expr) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("fn*",cljs.core.name(cljs.core.first(expr))))){
var vec__193 = cljs.core.rest(expr);
var seq__194 = cljs.core.seq(vec__193);
var first__195 = cljs.core.first(seq__194);
var seq__194__$1 = cljs.core.next(seq__194);
var vec__196 = first__195;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__196,(0),null);
var form = seq__194__$1;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(clojure.walk.postwalk_replace(cljs.core.PersistentArrayMap.createAsIfByAssoc([s,new cljs.core.Symbol(null,"%","%",(-950237169),null)]),form),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",(-950237169),null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)], 0));
} else {
return expr;
}
});
cljs.spec.alpha$macros.res = (function cljs$spec$alpha$macros$res(env,form){
if((form instanceof cljs.core.Keyword)){
return form;
} else {
if((form instanceof cljs.core.Symbol)){
var resolved = (function (){var or__22217__auto__ = cljs.spec.alpha$macros.__GT_sym(cljs.analyzer.api.resolve(env,form));
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
return form;
}
})();
var ns_name = cljs.core.namespace(resolved);
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_((function (){var and__22202__auto__ = ns_name;
if(cljs.core.truth_(and__22202__auto__)){
return clojure.string.ends_with_QMARK_(ns_name,"$macros");
} else {
return and__22202__auto__;
}
})())?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ns_name,(0),(cljs.core.count(ns_name) - (7))):ns_name),cljs.core.name(resolved));
} else {
if(cljs.core.sequential_QMARK_(form)){
return clojure.walk.postwalk((function (p1__9_SHARP_){
if((p1__9_SHARP_ instanceof cljs.core.Symbol)){
return (cljs.spec.alpha$macros.res.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha$macros.res.cljs$core$IFn$_invoke$arity$2(env,p1__9_SHARP_) : cljs.spec.alpha$macros.res(env,p1__9_SHARP_));
} else {
return p1__9_SHARP_;
}
}),cljs.spec.alpha$macros.unfn(form));
} else {
return form;

}
}
}
});
var ret__23352__auto___199 = /**
 * a compile time res, for use in cljs/spec/alpha.cljs
 */
cljs.spec.alpha$macros.mres = (function cljs$spec$alpha$macros$mres(_AMPERSAND_form,_AMPERSAND_env,form){
return cljs.spec.alpha$macros.res(_AMPERSAND_env,form);
});
cljs.spec.alpha$macros.mres.cljs$lang$macro = true;

/**
 * Qualify symbol s by resolving it or using the current *ns*.
 */
cljs.spec.alpha$macros.ns_qualify = (function cljs$spec$alpha$macros$ns_qualify(env,s){
if(cljs.core.truth_(cljs.core.namespace(s))){
return cljs.spec.alpha$macros.__GT_sym(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,s));
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''));
}
});
var ret__23352__auto___200 = /**
 * Given a namespace-qualified keyword or resolveable symbol k, and a spec,
 * spec-name, predicate or regex-op makes an entry in the registry mapping k to
 * the spec
 */
cljs.spec.alpha$macros.def = (function cljs$spec$alpha$macros$def(_AMPERSAND_form,_AMPERSAND_env,k,spec_form){
var k__$1 = (((k instanceof cljs.core.Symbol))?cljs.spec.alpha$macros.ns_qualify(_AMPERSAND_env,k):k);
var form = cljs.spec.alpha$macros.res(_AMPERSAND_env,spec_form);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.spec.alpha$macros.registry_ref,cljs.core.assoc,k__$1,form);

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","def-impl","cljs.spec.alpha/def-impl",(-940040760),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = k__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = spec_form;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
});
cljs.spec.alpha$macros.def.cljs$lang$macro = true;

var ret__23352__auto___208 = (function (){
/**
 * Takes a single predicate form, e.g. can be the name of a predicate,
 *   like even?, or a fn literal like #(< % 42). Note that it is not
 *   generally necessary to wrap predicates in spec when using the rest
 *   of the spec macros, only to attach a unique generator
 * 
 *   Can also be passed the result of one of the regex ops -
 *   cat, alt, *, +, ?, in which case it will return a regex-conforming
 *   spec, useful when nesting an independent regex.
 *   ---
 * 
 *   Optionally takes :gen generator-fn, which must be a fn of no args that
 *   returns a test.check generator.
 * 
 *   Returns a spec.
 */
cljs.spec.alpha$macros.spec = (function cljs$spec$alpha$macros$spec(var_args){
var args__23329__auto__ = [];
var len__23326__auto___209 = arguments.length;
var i__23327__auto___210 = (0);
while(true){
if((i__23327__auto___210 < len__23326__auto___209)){
args__23329__auto__.push((arguments[i__23327__auto___210]));

var G__211 = (i__23327__auto___210 + (1));
i__23327__auto___210 = G__211;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((3) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((3)),(0),null)):null);
return cljs.spec.alpha$macros.spec.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23330__auto__);
});

cljs.spec.alpha$macros.spec.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,form,p__205){
var map__206 = p__205;
var map__206__$1 = ((((!((map__206 == null)))?((((map__206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__206.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__206):map__206);
var gen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__206__$1,new cljs.core.Keyword(null,"gen","gen",(142575302)));
if(cljs.core.truth_(form)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","spec-impl","cljs.spec.alpha/spec-impl",(69764672),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = cljs.spec.alpha$macros.res(_AMPERSAND_env,form);
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = gen;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0)));
} else {
return null;
}
});

cljs.spec.alpha$macros.spec.cljs$lang$maxFixedArity = (3);

cljs.spec.alpha$macros.spec.cljs$lang$applyTo = (function (seq201){
var G__202 = cljs.core.first(seq201);
var seq201__$1 = cljs.core.next(seq201);
var G__203 = cljs.core.first(seq201__$1);
var seq201__$2 = cljs.core.next(seq201__$1);
var G__204 = cljs.core.first(seq201__$2);
var seq201__$3 = cljs.core.next(seq201__$2);
return cljs.spec.alpha$macros.spec.cljs$core$IFn$_invoke$arity$variadic(G__202,G__203,G__204,seq201__$3);
});

return null;
})()
;
cljs.spec.alpha$macros.spec.cljs$lang$macro = true;

var ret__23352__auto___212 = /**
 * Takes the name of a spec/predicate-returning multimethod and a
 *   tag-restoring keyword or fn (retag).  Returns a spec that when
 *   conforming or explaining data will pass it to the multimethod to get
 *   an appropriate spec. You can e.g. use multi-spec to dynamically and
 *   extensibly associate specs with 'tagged' data (i.e. data where one
 *   of the fields indicates the shape of the rest of the structure).
 * 
 *   (defmulti mspec :tag)
 * 
 *   The methods should ignore their argument and return a predicate/spec:
 *   (defmethod mspec :int [_] (s/keys :req-un [::tag ::i]))
 * 
 *   retag is used during generation to retag generated values with
 *   matching tags. retag can either be a keyword, at which key the
 *   dispatch-tag will be assoc'ed, or a fn of generated value and
 *   dispatch-tag that should return an appropriately retagged value.
 * 
 *   Note that because the tags themselves comprise an open set,
 *   the tag key spec cannot enumerate the values, but can e.g.
 *   test for keyword?.
 * 
 *   Note also that the dispatch values of the multimethod will be
 *   included in the path, i.e. in reporting and gen overrides, even
 *   though those values are not evident in the spec.
 */
cljs.spec.alpha$macros.multi_spec = (function cljs$spec$alpha$macros$multi_spec(_AMPERSAND_form,_AMPERSAND_env,mm,retag){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","multi-spec-impl","cljs.spec.alpha/multi-spec-impl",(-1581100244),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = cljs.spec.alpha$macros.res(_AMPERSAND_env,mm);
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",(870848730),null)),(function (){var x__23030__auto__ = mm;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = retag;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
});
cljs.spec.alpha$macros.multi_spec.cljs$lang$macro = true;

var ret__23352__auto___219 = (function (){
/**
 * Creates and returns a map validating spec. :req and :opt are both
 *   vectors of namespaced-qualified keywords. The validator will ensure
 *   the :req keys are present. The :opt keys serve as documentation and
 *   may be used by the generator.
 * 
 *   The :req key vector supports 'and' and 'or' for key groups:
 * 
 *   (s/keys :req [::x ::y (or ::secret (and ::user ::pwd))] :opt [::z])
 * 
 *   There are also -un versions of :req and :opt. These allow
 *   you to connect unqualified keys to specs.  In each case, fully
 *   qualfied keywords are passed, which name the specs, but unqualified
 *   keys (with the same name component) are expected and checked at
 *   conform-time, and generated during gen:
 * 
 *   (s/keys :req-un [:my.ns/x :my.ns/y])
 * 
 *   The above says keys :x and :y are required, and will be validated
 *   and generated by specs (if they exist) named :my.ns/x :my.ns/y
 *   respectively.
 * 
 *   In addition, the values of *all* namespace-qualified keys will be validated
 *   (and possibly destructured) by any registered specs. Note: there is
 *   no support for inline value specification, by design.
 * 
 *   Optionally takes :gen generator-fn, which must be a fn of no args that
 *   returns a test.check generator.
 */
cljs.spec.alpha$macros.keys = (function cljs$spec$alpha$macros$keys(var_args){
var args__23329__auto__ = [];
var len__23326__auto___220 = arguments.length;
var i__23327__auto___221 = (0);
while(true){
if((i__23327__auto___221 < len__23326__auto___220)){
args__23329__auto__.push((arguments[i__23327__auto___221]));

var G__222 = (i__23327__auto___221 + (1));
i__23327__auto___221 = G__222;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((2) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((2)),(0),null)):null);
return cljs.spec.alpha$macros.keys.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23330__auto__);
});

cljs.spec.alpha$macros.keys.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__216){
var map__217 = p__216;
var map__217__$1 = ((((!((map__217 == null)))?((((map__217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__217.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__217):map__217);
var req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__217__$1,new cljs.core.Keyword(null,"req","req",(-326448303)));
var req_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__217__$1,new cljs.core.Keyword(null,"req-un","req-un",(1074571008)));
var opt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__217__$1,new cljs.core.Keyword(null,"opt","opt",(-794706369)));
var opt_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__217__$1,new cljs.core.Keyword(null,"opt-un","opt-un",(883442496)));
var gen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__217__$1,new cljs.core.Keyword(null,"gen","gen",(142575302)));
var unk = ((function (map__217,map__217__$1,req,req_un,opt,opt_un,gen){
return (function (p1__10_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p1__10_SHARP_));
});})(map__217,map__217__$1,req,req_un,opt,opt_un,gen))
;
var req_keys = cljs.core.filterv(cljs.core.keyword_QMARK_,cljs.core.flatten(req));
var req_un_specs = cljs.core.filterv(cljs.core.keyword_QMARK_,cljs.core.flatten(req_un));
var _ = ((cljs.core.every_QMARK_(((function (unk,req_keys,req_un_specs,map__217,map__217__$1,req,req_un,opt,opt_un,gen){
return (function (p1__11_SHARP_){
var and__22202__auto__ = (p1__11_SHARP_ instanceof cljs.core.Keyword);
if(and__22202__auto__){
return cljs.core.namespace(p1__11_SHARP_);
} else {
return and__22202__auto__;
}
});})(unk,req_keys,req_un_specs,map__217,map__217__$1,req,req_un,opt,opt_un,gen))
,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(req_keys,req_un_specs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opt,opt_un], 0))))?null:(function(){throw (new Error(["Assert failed: ","all keys must be namespace-qualified keywords","\n","(every? (fn* [p1__11#] (clojure.core/and (keyword? p1__11#) (namespace p1__11#))) (concat req-keys req-un-specs opt opt-un))"].join('')))})());
var req_specs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(req_keys,req_un_specs);
var req_keys__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(req_keys,cljs.core.map.cljs$core$IFn$_invoke$arity$2(unk,req_un_specs));
var opt_keys = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(opt),cljs.core.map.cljs$core$IFn$_invoke$arity$2(unk,opt_un));
var opt_specs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(opt),opt_un);
var gx = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var parse_req = ((function (unk,req_keys,req_un_specs,_,req_specs,req_keys__$1,opt_keys,opt_specs,gx,map__217,map__217__$1,req,req_un,opt,opt_un,gen){
return (function (rk,f){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (unk,req_keys,req_un_specs,_,req_specs,req_keys__$1,opt_keys,opt_specs,gx,map__217,map__217__$1,req,req_un,opt,opt_un,gen){
return (function (x){
if((x instanceof cljs.core.Keyword)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",(-976526835),null)),(function (){var x__23030__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f(x));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
} else {
return clojure.walk.postwalk(((function (unk,req_keys,req_un_specs,_,req_specs,req_keys__$1,opt_keys,opt_specs,gx,map__217,map__217__$1,req,req_un,opt,opt_un,gen){
return (function (y){
if((y instanceof cljs.core.Keyword)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",(-976526835),null)),(function (){var x__23030__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(y) : f(y));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
} else {
return y;
}
});})(unk,req_keys,req_un_specs,_,req_specs,req_keys__$1,opt_keys,opt_specs,gx,map__217,map__217__$1,req,req_un,opt,opt_un,gen))
,x);
}
});})(unk,req_keys,req_un_specs,_,req_specs,req_keys__$1,opt_keys,opt_specs,gx,map__217,map__217__$1,req,req_un,opt,opt_un,gen))
,rk);
});})(unk,req_keys,req_un_specs,_,req_specs,req_keys__$1,opt_keys,opt_specs,gx,map__217,map__217__$1,req,req_un,opt,opt_un,gen))
;
var pred_exprs = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",(-1390345523),null)),(function (){var x__23030__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()))], null);
var pred_exprs__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(pred_exprs,parse_req(req,cljs.core.identity));
var pred_exprs__$2 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(pred_exprs__$1,parse_req(req_un,unk));
var keys_pred = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__23030__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null)),pred_exprs__$2));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
var pred_exprs__$3 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (unk,req_keys,req_un_specs,_,req_specs,req_keys__$1,opt_keys,opt_specs,gx,parse_req,pred_exprs,pred_exprs__$1,pred_exprs__$2,keys_pred,map__217,map__217__$1,req,req_un,opt,opt_un,gen){
return (function (e){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__23030__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = e;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
});})(unk,req_keys,req_un_specs,_,req_specs,req_keys__$1,opt_keys,opt_specs,gx,parse_req,pred_exprs,pred_exprs__$1,pred_exprs__$2,keys_pred,map__217,map__217__$1,req,req_un,opt,opt_un,gen))
,pred_exprs__$2);
var pred_forms = clojure.walk.postwalk(((function (unk,req_keys,req_un_specs,_,req_specs,req_keys__$1,opt_keys,opt_specs,gx,parse_req,pred_exprs,pred_exprs__$1,pred_exprs__$2,keys_pred,pred_exprs__$3,map__217,map__217__$1,req,req_un,opt,opt_un,gen){
return (function (p1__12_SHARP_){
return cljs.spec.alpha$macros.res(_AMPERSAND_env,p1__12_SHARP_);
});})(unk,req_keys,req_un_specs,_,req_specs,req_keys__$1,opt_keys,opt_specs,gx,parse_req,pred_exprs,pred_exprs__$1,pred_exprs__$2,keys_pred,pred_exprs__$3,map__217,map__217__$1,req,req_un,opt,opt_un,gen))
,pred_exprs__$3);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","map-spec-impl","cljs.spec.alpha/map-spec-impl",(1965627085),null)),(function (){var x__23030__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"req-un","req-un",(1074571008))),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = req_un;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"opt-un","opt-un",(883442496))),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = opt_un;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"gfn","gfn",(791517474))),(function (){var x__23030__auto__ = gen;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pred-exprs","pred-exprs",(1792271395))),(function (){var x__23030__auto__ = pred_exprs__$3;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"keys-pred","keys-pred",(858984739))),(function (){var x__23030__auto__ = keys_pred;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"opt-keys","opt-keys",(1262688261))),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = opt_keys;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"req-specs","req-specs",(553962313))),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = req_specs;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"req","req",(-326448303))),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = req;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"req-keys","req-keys",(514319221))),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = req_keys__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"opt-specs","opt-specs",(-384905450))),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = opt_specs;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pred-forms","pred-forms",(172611832))),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = pred_forms;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"opt","opt",(-794706369))),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = opt;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
});

cljs.spec.alpha$macros.keys.cljs$lang$maxFixedArity = (2);

cljs.spec.alpha$macros.keys.cljs$lang$applyTo = (function (seq213){
var G__214 = cljs.core.first(seq213);
var seq213__$1 = cljs.core.next(seq213);
var G__215 = cljs.core.first(seq213__$1);
var seq213__$2 = cljs.core.next(seq213__$1);
return cljs.spec.alpha$macros.keys.cljs$core$IFn$_invoke$arity$variadic(G__214,G__215,seq213__$2);
});

return null;
})()
;
cljs.spec.alpha$macros.keys.cljs$lang$macro = true;

var ret__23352__auto___226 = (function (){
/**
 * Takes key+pred pairs, e.g.
 * 
 *   (s/or :even even? :small #(< % 42))
 * 
 *   Returns a destructuring spec that returns a map entry containing the
 *   key of the first matching pred and the corresponding value. Thus the
 *   'key' and 'val' functions can be used to refer generically to the
 *   components of the tagged return.
 */
cljs.spec.alpha$macros.or = (function cljs$spec$alpha$macros$or(var_args){
var args__23329__auto__ = [];
var len__23326__auto___227 = arguments.length;
var i__23327__auto___228 = (0);
while(true){
if((i__23327__auto___228 < len__23326__auto___227)){
args__23329__auto__.push((arguments[i__23327__auto___228]));

var G__229 = (i__23327__auto___228 + (1));
i__23327__auto___228 = G__229;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((2) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((2)),(0),null)):null);
return cljs.spec.alpha$macros.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23330__auto__);
});

cljs.spec.alpha$macros.or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,key_pred_forms){
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),key_pred_forms);
var keys = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var pred_forms = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs);
var pf = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (pairs,keys,pred_forms){
return (function (p1__13_SHARP_){
return cljs.spec.alpha$macros.res(_AMPERSAND_env,p1__13_SHARP_);
});})(pairs,keys,pred_forms))
,pred_forms);
if((cljs.core.even_QMARK_(cljs.core.count(key_pred_forms))) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,keys))){
} else {
throw (new Error(["Assert failed: ","spec/or expects k1 p1 k2 p2..., where ks are keywords","\n","(clojure.core/and (even? (count key-pred-forms)) (every? keyword? keys))"].join('')));
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","or-spec-impl","cljs.spec.alpha/or-spec-impl",(174083152),null)),(function (){var x__23030__auto__ = keys;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = pf;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = pred_forms;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0)));
});

cljs.spec.alpha$macros.or.cljs$lang$maxFixedArity = (2);

cljs.spec.alpha$macros.or.cljs$lang$applyTo = (function (seq223){
var G__224 = cljs.core.first(seq223);
var seq223__$1 = cljs.core.next(seq223);
var G__225 = cljs.core.first(seq223__$1);
var seq223__$2 = cljs.core.next(seq223__$1);
return cljs.spec.alpha$macros.or.cljs$core$IFn$_invoke$arity$variadic(G__224,G__225,seq223__$2);
});

return null;
})()
;
cljs.spec.alpha$macros.or.cljs$lang$macro = true;

var ret__23352__auto___233 = (function (){
/**
 * Takes predicate/spec-forms, e.g.
 * 
 *   (s/and even? #(< % 42))
 * 
 *   Returns a spec that returns the conformed value. Successive
 *   conformed values propagate through rest of predicates.
 */
cljs.spec.alpha$macros.and = (function cljs$spec$alpha$macros$and(var_args){
var args__23329__auto__ = [];
var len__23326__auto___234 = arguments.length;
var i__23327__auto___235 = (0);
while(true){
if((i__23327__auto___235 < len__23326__auto___234)){
args__23329__auto__.push((arguments[i__23327__auto___235]));

var G__236 = (i__23327__auto___235 + (1));
i__23327__auto___235 = G__236;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((2) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((2)),(0),null)):null);
return cljs.spec.alpha$macros.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23330__auto__);
});

cljs.spec.alpha$macros.and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred_forms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","and-spec-impl","cljs.spec.alpha/and-spec-impl",(-492178340),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__14_SHARP_){
return cljs.spec.alpha$macros.res(_AMPERSAND_env,p1__14_SHARP_);
}),pred_forms);
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.vec(pred_forms);
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0)));
});

cljs.spec.alpha$macros.and.cljs$lang$maxFixedArity = (2);

cljs.spec.alpha$macros.and.cljs$lang$applyTo = (function (seq230){
var G__231 = cljs.core.first(seq230);
var seq230__$1 = cljs.core.next(seq230);
var G__232 = cljs.core.first(seq230__$1);
var seq230__$2 = cljs.core.next(seq230__$1);
return cljs.spec.alpha$macros.and.cljs$core$IFn$_invoke$arity$variadic(G__231,G__232,seq230__$2);
});

return null;
})()
;
cljs.spec.alpha$macros.and.cljs$lang$macro = true;

cljs.spec.alpha$macros.res_kind = (function cljs$spec$alpha$macros$res_kind(env,opts){
var map__237 = opts;
var map__237__$1 = ((((!((map__237 == null)))?((((map__237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__237.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__237):map__237);
var mopts = map__237__$1;
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__237__$1,new cljs.core.Keyword(null,"kind","kind",(-717265803)));
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(kind)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(mopts,new cljs.core.Keyword(null,"kind","kind",(-717265803)),cljs.spec.alpha$macros.res(env,kind)):mopts)], 0));
});
var ret__23352__auto___247 = (function (){
/**
 * takes a pred and validates collection elements against that pred.
 * 
 *   Note that 'every' does not do exhaustive checking, rather it samples
 *   *coll-check-limit* elements. Nor (as a result) does it do any
 *   conforming of elements. 'explain' will report at most *coll-error-limit*
 *   problems.  Thus 'every' should be suitable for potentially large
 *   collections.
 * 
 *   Takes several kwargs options that further constrain the collection:
 * 
 *   :kind - a pred/spec that the collection type must satisfy, e.g. vector?
 *        (default nil) Note that if :kind is specified and :into is
 *        not, this pred must generate in order for every to generate.
 *   :count - specifies coll has exactly this count (default nil)
 *   :min-count, :max-count - coll has count (<= min-count count max-count) (defaults nil)
 *   :distinct - all the elements are distinct (default nil)
 * 
 *   And additional args that control gen
 * 
 *   :gen-max - the maximum coll size to generate (default 20)
 *   :into - one of [], (), {}, #{} - the default collection to generate into
 *    (default same as :kind if supplied, else []
 * 
 *   Optionally takes :gen generator-fn, which must be a fn of no args that
 *   returns a test.check generator
 * 
 *   See also - coll-of, every-kv
 */
cljs.spec.alpha$macros.every = (function cljs$spec$alpha$macros$every(var_args){
var args__23329__auto__ = [];
var len__23326__auto___248 = arguments.length;
var i__23327__auto___249 = (0);
while(true){
if((i__23327__auto___249 < len__23326__auto___248)){
args__23329__auto__.push((arguments[i__23327__auto___249]));

var G__250 = (i__23327__auto___249 + (1));
i__23327__auto___249 = G__250;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((3) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((3)),(0),null)):null);
return cljs.spec.alpha$macros.every.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23330__auto__);
});

cljs.spec.alpha$macros.every.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,p__243){
var map__244 = p__243;
var map__244__$1 = ((((!((map__244 == null)))?((((map__244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__244.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__244):map__244);
var opts = map__244__$1;
var max_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__244__$1,new cljs.core.Keyword(null,"max-count","max-count",(1539185305)));
var gen_max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__244__$1,new cljs.core.Keyword(null,"gen-max","gen-max",(-793680445)));
var into = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__244__$1,new cljs.core.Keyword(null,"into","into",(-150836029)));
var gen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__244__$1,new cljs.core.Keyword(null,"gen","gen",(142575302)));
var distinct = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__244__$1,new cljs.core.Keyword(null,"distinct","distinct",(-1788879121)));
var gen_into = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__244__$1,new cljs.core.Keyword(null,"gen-into","gen-into",(-1047890542)));
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__244__$1,new cljs.core.Keyword(null,"count","count",(2139924085)));
var min_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__244__$1,new cljs.core.Keyword(null,"min-count","min-count",(1594709013)));
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__244__$1,new cljs.core.Keyword(null,"kind","kind",(-717265803)));
var desc = new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",(1883026911)).cljs$core$IFn$_invoke$arity$1(opts);
var nopts = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"gen","gen",(142575302)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",(1883026911))], 0)),new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",(-1047104697)),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = cljs.spec.alpha$macros.res(_AMPERSAND_env,new cljs.core.Keyword(null,"kind","kind",(-717265803)).cljs$core$IFn$_invoke$arity$1(opts));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})())),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",(1883026911)),(function (){var or__22217__auto__ = desc;
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",(123912744),null)),(function (){var x__23030__auto__ = cljs.spec.alpha$macros.res(_AMPERSAND_env,pred);
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.alpha$macros.res_kind(_AMPERSAND_env,opts)], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
}
})()], 0));
var gx = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var cpreds = (function (){var G__246 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__23030__auto__ = (function (){var or__22217__auto__ = kind;
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
return new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",(1208130522),null);
}
})();
return cljs.core._conj((function (){var x__23030__auto____$1 = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto____$1);
})(),x__23030__auto__);
})()], null);
var G__246__$1 = (cljs.core.truth_(count)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__246,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",(-1891498332),null)),(function (){var x__23030__auto__ = count;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","bounded-count","cljs.core/bounded-count",(355256728),null)),(function (){var x__23030__auto__ = count;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)))):G__246);
var G__246__$2 = (cljs.core.truth_((function (){var or__22217__auto__ = min_count;
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
return max_count;
}
})())?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__246__$1,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",(1677001748),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","or","cljs.core/or",(1201033885),null)),(function (){var x__23030__auto__ = min_count;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","bounded-count","cljs.core/bounded-count",(355256728),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),(function (){var x__23030__auto__ = max_count;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",(-879172610),null)),(function (){var x__23030__auto__ = max_count;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = min_count;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","or","cljs.core/or",(1201033885),null)),(function (){var x__23030__auto__ = max_count;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","MAX_INT","cljs.spec.alpha/MAX_INT",(1315428963),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)))):G__246__$1);
if(cljs.core.truth_(distinct)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__246__$2,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","or","cljs.core/or",(1201033885),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",(1866613644),null)),(function (){var x__23030__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",(1757277831),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","distinct?","cljs.core/distinct?",(-1285807788),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0))));
} else {
return G__246__$2;
}
})();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","every-impl","cljs.spec.alpha/every-impl",(30419907),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = pred;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = pred;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nopts,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",(-693471218)),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__23030__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null)),cpreds));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = gen;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
});

cljs.spec.alpha$macros.every.cljs$lang$maxFixedArity = (3);

cljs.spec.alpha$macros.every.cljs$lang$applyTo = (function (seq239){
var G__240 = cljs.core.first(seq239);
var seq239__$1 = cljs.core.next(seq239);
var G__241 = cljs.core.first(seq239__$1);
var seq239__$2 = cljs.core.next(seq239__$1);
var G__242 = cljs.core.first(seq239__$2);
var seq239__$3 = cljs.core.next(seq239__$2);
return cljs.spec.alpha$macros.every.cljs$core$IFn$_invoke$arity$variadic(G__240,G__241,G__242,seq239__$3);
});

return null;
})()
;
cljs.spec.alpha$macros.every.cljs$lang$macro = true;

var ret__23352__auto___256 = (function (){
/**
 * like 'every' but takes separate key and val preds and works on associative collections.
 * 
 *   Same options as 'every', :into defaults to {}
 * 
 *   See also - map-of
 */
cljs.spec.alpha$macros.every_kv = (function cljs$spec$alpha$macros$every_kv(var_args){
var args__23329__auto__ = [];
var len__23326__auto___257 = arguments.length;
var i__23327__auto___258 = (0);
while(true){
if((i__23327__auto___258 < len__23326__auto___257)){
args__23329__auto__.push((arguments[i__23327__auto___258]));

var G__259 = (i__23327__auto___258 + (1));
i__23327__auto___258 = G__259;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((4) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((4)),(0),null)):null);
return cljs.spec.alpha$macros.every_kv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__23330__auto__);
});

cljs.spec.alpha$macros.every_kv.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kpred,vpred,opts){
var desc = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","every-kv","cljs.spec.alpha/every-kv",(-133428374),null)),(function (){var x__23030__auto__ = cljs.spec.alpha$macros.res(_AMPERSAND_env,kpred);
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.spec.alpha$macros.res(_AMPERSAND_env,vpred);
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.spec.alpha$macros.res_kind(_AMPERSAND_env,opts)], 0)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",(123912744),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",(-415901908),null)),(function (){var x__23030__auto__ = kpred;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = vpred;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",(672643897))),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__15__auto__","i__15__auto__",(1867563244),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"v__16__auto__","v__16__auto__",(54820764),null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",(1961052085),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"v__16__auto__","v__16__auto__",(54820764),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"into","into",(-150836029))),(function (){var x__23030__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",(1883026911))),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = desc;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),opts], 0)));
});

cljs.spec.alpha$macros.every_kv.cljs$lang$maxFixedArity = (4);

cljs.spec.alpha$macros.every_kv.cljs$lang$applyTo = (function (seq251){
var G__252 = cljs.core.first(seq251);
var seq251__$1 = cljs.core.next(seq251);
var G__253 = cljs.core.first(seq251__$1);
var seq251__$2 = cljs.core.next(seq251__$1);
var G__254 = cljs.core.first(seq251__$2);
var seq251__$3 = cljs.core.next(seq251__$2);
var G__255 = cljs.core.first(seq251__$3);
var seq251__$4 = cljs.core.next(seq251__$3);
return cljs.spec.alpha$macros.every_kv.cljs$core$IFn$_invoke$arity$variadic(G__252,G__253,G__254,G__255,seq251__$4);
});

return null;
})()
;
cljs.spec.alpha$macros.every_kv.cljs$lang$macro = true;

var ret__23352__auto___264 = (function (){
/**
 * Returns a spec for a collection of items satisfying pred. Unlike
 *   generator will fill an empty init-coll.
 * 
 *   Same options as 'every'. conform will produce a collection
 *   corresponding to :into if supplied, else will match the input collection,
 *   avoiding rebuilding when possible.
 * 
 *   Same options as 'every'.
 * 
 *   See also - every, map-of
 */
cljs.spec.alpha$macros.coll_of = (function cljs$spec$alpha$macros$coll_of(var_args){
var args__23329__auto__ = [];
var len__23326__auto___265 = arguments.length;
var i__23327__auto___266 = (0);
while(true){
if((i__23327__auto___266 < len__23326__auto___265)){
args__23329__auto__.push((arguments[i__23327__auto___266]));

var G__267 = (i__23327__auto___266 + (1));
i__23327__auto___266 = G__267;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((3) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((3)),(0),null)):null);
return cljs.spec.alpha$macros.coll_of.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23330__auto__);
});

cljs.spec.alpha$macros.coll_of.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,opts){
var desc = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",(1019430407),null)),(function (){var x__23030__auto__ = cljs.spec.alpha$macros.res(_AMPERSAND_env,pred);
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.alpha$macros.res_kind(_AMPERSAND_env,opts)], 0)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",(123912744),null)),(function (){var x__23030__auto__ = pred;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",(45201917))),cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",(1883026911))),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = desc;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),opts], 0)));
});

cljs.spec.alpha$macros.coll_of.cljs$lang$maxFixedArity = (3);

cljs.spec.alpha$macros.coll_of.cljs$lang$applyTo = (function (seq260){
var G__261 = cljs.core.first(seq260);
var seq260__$1 = cljs.core.next(seq260);
var G__262 = cljs.core.first(seq260__$1);
var seq260__$2 = cljs.core.next(seq260__$1);
var G__263 = cljs.core.first(seq260__$2);
var seq260__$3 = cljs.core.next(seq260__$2);
return cljs.spec.alpha$macros.coll_of.cljs$core$IFn$_invoke$arity$variadic(G__261,G__262,G__263,seq260__$3);
});

return null;
})()
;
cljs.spec.alpha$macros.coll_of.cljs$lang$macro = true;

var ret__23352__auto___273 = (function (){
/**
 * Returns a spec for a map whose keys satisfy kpred and vals satisfy
 *   vpred. Unlike 'every-kv', map-of will exhaustively conform every
 *   value.
 * 
 *   Same options as 'every', :kind defaults to map?, with the addition of:
 * 
 *   :conform-keys - conform keys as well as values (default false)
 * 
 *   See also - every-kv
 */
cljs.spec.alpha$macros.map_of = (function cljs$spec$alpha$macros$map_of(var_args){
var args__23329__auto__ = [];
var len__23326__auto___274 = arguments.length;
var i__23327__auto___275 = (0);
while(true){
if((i__23327__auto___275 < len__23326__auto___274)){
args__23329__auto__.push((arguments[i__23327__auto___275]));

var G__276 = (i__23327__auto___275 + (1));
i__23327__auto___275 = G__276;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((4) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((4)),(0),null)):null);
return cljs.spec.alpha$macros.map_of.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__23330__auto__);
});

cljs.spec.alpha$macros.map_of.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kpred,vpred,opts){
var desc = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",(153715093),null)),(function (){var x__23030__auto__ = cljs.spec.alpha$macros.res(_AMPERSAND_env,kpred);
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.spec.alpha$macros.res(_AMPERSAND_env,vpred);
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.spec.alpha$macros.res_kind(_AMPERSAND_env,opts)], 0)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","every-kv","cljs.spec.alpha/every-kv",(-133428374),null)),(function (){var x__23030__auto__ = kpred;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = vpred;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",(45201917))),cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"kind","kind",(-717265803))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",(-1390345523),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",(1883026911))),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = desc;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),opts], 0)));
});

cljs.spec.alpha$macros.map_of.cljs$lang$maxFixedArity = (4);

cljs.spec.alpha$macros.map_of.cljs$lang$applyTo = (function (seq268){
var G__269 = cljs.core.first(seq268);
var seq268__$1 = cljs.core.next(seq268);
var G__270 = cljs.core.first(seq268__$1);
var seq268__$2 = cljs.core.next(seq268__$1);
var G__271 = cljs.core.first(seq268__$2);
var seq268__$3 = cljs.core.next(seq268__$2);
var G__272 = cljs.core.first(seq268__$3);
var seq268__$4 = cljs.core.next(seq268__$3);
return cljs.spec.alpha$macros.map_of.cljs$core$IFn$_invoke$arity$variadic(G__269,G__270,G__271,G__272,seq268__$4);
});

return null;
})()
;
cljs.spec.alpha$macros.map_of.cljs$lang$macro = true;

var ret__23352__auto___277 = /**
 * Returns a regex op that matches zero or more values matching
 *   pred. Produces a vector of matches iff there is at least one match
 */
cljs.spec.alpha$macros._STAR_ = (function cljs$spec$alpha$macros$_STAR_(_AMPERSAND_form,_AMPERSAND_env,pred_form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","rep-impl","cljs.spec.alpha/rep-impl",(272857093),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = cljs.spec.alpha$macros.res(_AMPERSAND_env,pred_form);
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = pred_form;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
});
cljs.spec.alpha$macros._STAR_.cljs$lang$macro = true;

var ret__23352__auto___278 = /**
 * Returns a regex op that matches one or more values matching
 *   pred. Produces a vector of matches
 */
cljs.spec.alpha$macros._PLUS_ = (function cljs$spec$alpha$macros$_PLUS_(_AMPERSAND_form,_AMPERSAND_env,pred_form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","rep+impl","cljs.spec.alpha/rep+impl",(1883292654),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = cljs.spec.alpha$macros.res(_AMPERSAND_env,pred_form);
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = pred_form;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
});
cljs.spec.alpha$macros._PLUS_.cljs$lang$macro = true;

var ret__23352__auto___279 = /**
 * Returns a regex op that matches zero or one value matching
 *   pred. Produces a single value (not a collection) if matched.
 */
cljs.spec.alpha$macros._QMARK_ = (function cljs$spec$alpha$macros$_QMARK_(_AMPERSAND_form,_AMPERSAND_env,pred_form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","maybe-impl","cljs.spec.alpha/maybe-impl",(1618854020),null)),(function (){var x__23030__auto__ = pred_form;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = cljs.spec.alpha$macros.res(_AMPERSAND_env,pred_form);
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
});
cljs.spec.alpha$macros._QMARK_.cljs$lang$macro = true;

var ret__23352__auto___283 = (function (){
/**
 * Takes key+pred pairs, e.g.
 * 
 *   (s/alt :even even? :small #(< % 42))
 * 
 *   Returns a regex op that returns a map entry containing the key of the
 *   first matching pred and the corresponding value. Thus the
 *   'key' and 'val' functions can be used to refer generically to the
 *   components of the tagged return.
 */
cljs.spec.alpha$macros.alt = (function cljs$spec$alpha$macros$alt(var_args){
var args__23329__auto__ = [];
var len__23326__auto___284 = arguments.length;
var i__23327__auto___285 = (0);
while(true){
if((i__23327__auto___285 < len__23326__auto___284)){
args__23329__auto__.push((arguments[i__23327__auto___285]));

var G__286 = (i__23327__auto___285 + (1));
i__23327__auto___285 = G__286;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((2) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((2)),(0),null)):null);
return cljs.spec.alpha$macros.alt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23330__auto__);
});

cljs.spec.alpha$macros.alt.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,key_pred_forms){
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),key_pred_forms);
var keys = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var pred_forms = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs);
var pf = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (pairs,keys,pred_forms){
return (function (p1__17_SHARP_){
return cljs.spec.alpha$macros.res(_AMPERSAND_env,p1__17_SHARP_);
});})(pairs,keys,pred_forms))
,pred_forms);
if((cljs.core.even_QMARK_(cljs.core.count(key_pred_forms))) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,keys))){
} else {
throw (new Error(["Assert failed: ","alt expects k1 p1 k2 p2..., where ks are keywords","\n","(clojure.core/and (even? (count key-pred-forms)) (every? keyword? keys))"].join('')));
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","alt-impl","cljs.spec.alpha/alt-impl",(1852741609),null)),(function (){var x__23030__auto__ = keys;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = pred_forms;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = pf;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
});

cljs.spec.alpha$macros.alt.cljs$lang$maxFixedArity = (2);

cljs.spec.alpha$macros.alt.cljs$lang$applyTo = (function (seq280){
var G__281 = cljs.core.first(seq280);
var seq280__$1 = cljs.core.next(seq280);
var G__282 = cljs.core.first(seq280__$1);
var seq280__$2 = cljs.core.next(seq280__$1);
return cljs.spec.alpha$macros.alt.cljs$core$IFn$_invoke$arity$variadic(G__281,G__282,seq280__$2);
});

return null;
})()
;
cljs.spec.alpha$macros.alt.cljs$lang$macro = true;

var ret__23352__auto___290 = (function (){
/**
 * Takes key+pred pairs, e.g.
 * 
 *   (s/cat :e even? :o odd?)
 * 
 *   Returns a regex op that matches (all) values in sequence, returning a map
 *   containing the keys of each pred and the corresponding value.
 */
cljs.spec.alpha$macros.cat = (function cljs$spec$alpha$macros$cat(var_args){
var args__23329__auto__ = [];
var len__23326__auto___291 = arguments.length;
var i__23327__auto___292 = (0);
while(true){
if((i__23327__auto___292 < len__23326__auto___291)){
args__23329__auto__.push((arguments[i__23327__auto___292]));

var G__293 = (i__23327__auto___292 + (1));
i__23327__auto___292 = G__293;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((2) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((2)),(0),null)):null);
return cljs.spec.alpha$macros.cat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23330__auto__);
});

cljs.spec.alpha$macros.cat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,key_pred_forms){
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),key_pred_forms);
var keys = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var pred_forms = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs);
var pf = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (pairs,keys,pred_forms){
return (function (p1__18_SHARP_){
return cljs.spec.alpha$macros.res(_AMPERSAND_env,p1__18_SHARP_);
});})(pairs,keys,pred_forms))
,pred_forms);
if((cljs.core.even_QMARK_(cljs.core.count(key_pred_forms))) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,keys))){
} else {
throw (new Error(["Assert failed: ","cat expects k1 p1 k2 p2..., where ks are keywords","\n","(clojure.core/and (even? (count key-pred-forms)) (every? keyword? keys))"].join('')));
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","cat-impl","cljs.spec.alpha/cat-impl",(1256350867),null)),(function (){var x__23030__auto__ = keys;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = pred_forms;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = pf;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
});

cljs.spec.alpha$macros.cat.cljs$lang$maxFixedArity = (2);

cljs.spec.alpha$macros.cat.cljs$lang$applyTo = (function (seq287){
var G__288 = cljs.core.first(seq287);
var seq287__$1 = cljs.core.next(seq287);
var G__289 = cljs.core.first(seq287__$1);
var seq287__$2 = cljs.core.next(seq287__$1);
return cljs.spec.alpha$macros.cat.cljs$core$IFn$_invoke$arity$variadic(G__288,G__289,seq287__$2);
});

return null;
})()
;
cljs.spec.alpha$macros.cat.cljs$lang$macro = true;

var ret__23352__auto___298 = (function (){
/**
 * takes a regex op re, and predicates. Returns a regex-op that consumes
 *   input as per re but subjects the resulting value to the
 *   conjunction of the predicates, and any conforming they might perform.
 */
cljs.spec.alpha$macros._AMPERSAND_ = (function cljs$spec$alpha$macros$_AMPERSAND_(var_args){
var args__23329__auto__ = [];
var len__23326__auto___299 = arguments.length;
var i__23327__auto___300 = (0);
while(true){
if((i__23327__auto___300 < len__23326__auto___299)){
args__23329__auto__.push((arguments[i__23327__auto___300]));

var G__301 = (i__23327__auto___300 + (1));
i__23327__auto___300 = G__301;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((3) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((3)),(0),null)):null);
return cljs.spec.alpha$macros._AMPERSAND_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23330__auto__);
});

cljs.spec.alpha$macros._AMPERSAND_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,re,preds){
var pv = cljs.core.vec(preds);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","amp-impl","cljs.spec.alpha/amp-impl",(1419577313),null)),(function (){var x__23030__auto__ = re;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = pv;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (pv){
return (function (p1__19_SHARP_){
return cljs.spec.alpha$macros.res(_AMPERSAND_env,p1__19_SHARP_);
});})(pv))
,pv);
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
});

cljs.spec.alpha$macros._AMPERSAND_.cljs$lang$maxFixedArity = (3);

cljs.spec.alpha$macros._AMPERSAND_.cljs$lang$applyTo = (function (seq294){
var G__295 = cljs.core.first(seq294);
var seq294__$1 = cljs.core.next(seq294);
var G__296 = cljs.core.first(seq294__$1);
var seq294__$2 = cljs.core.next(seq294__$1);
var G__297 = cljs.core.first(seq294__$2);
var seq294__$3 = cljs.core.next(seq294__$2);
return cljs.spec.alpha$macros._AMPERSAND_.cljs$core$IFn$_invoke$arity$variadic(G__295,G__296,G__297,seq294__$3);
});

return null;
})()
;
cljs.spec.alpha$macros._AMPERSAND_.cljs$lang$macro = true;

var ret__23352__auto___304 = (function (){
/**
 * takes a predicate function with the semantics of conform i.e. it should return either a
 *   (possibly converted) value or :cljs.spec.alpha/invalid, and returns a
 *   spec that uses it as a predicate/conformer. Optionally takes a
 *   second fn that does unform of result of first
 */
cljs.spec.alpha$macros.conformer = (function cljs$spec$alpha$macros$conformer(var_args){
var G__303 = arguments.length;
switch (G__303) {
case (3):
return cljs.spec.alpha$macros.conformer.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return cljs.spec.alpha$macros.conformer.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

cljs.spec.alpha$macros.conformer.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","spec-impl","cljs.spec.alpha/spec-impl",(69764672),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",(2140085535),null)),(function (){var x__23030__auto__ = cljs.spec.alpha$macros.res(_AMPERSAND_env,f);
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,true)], 0)));
});

cljs.spec.alpha$macros.conformer.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,f,unf){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","spec-impl","cljs.spec.alpha/spec-impl",(69764672),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",(2140085535),null)),(function (){var x__23030__auto__ = cljs.spec.alpha$macros.res(_AMPERSAND_env,f);
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.spec.alpha$macros.res(_AMPERSAND_env,unf);
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,true),(function (){var x__23030__auto__ = unf;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
});

cljs.spec.alpha$macros.conformer.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.spec.alpha$macros.conformer.cljs$lang$macro = true;

var ret__23352__auto___312 = (function (){
/**
 * takes :args :ret and (optional) :fn kwargs whose values are preds
 *   and returns a spec whose conform/explain take a fn and validates it
 *   using generative testing. The conformed value is always the fn itself.
 * 
 *   See 'fdef' for a single operation that creates an fspec and
 *   registers it, as well as a full description of :args, :ret and :fn
 * 
 *   fspecs can generate functions that validate the arguments and
 *   fabricate a return value compliant with the :ret spec, ignoring
 *   the :fn spec if present.
 * 
 *   Optionally takes :gen generator-fn, which must be a fn of no args
 *   that returns a test.check generator.
 */
cljs.spec.alpha$macros.fspec = (function cljs$spec$alpha$macros$fspec(var_args){
var args__23329__auto__ = [];
var len__23326__auto___313 = arguments.length;
var i__23327__auto___314 = (0);
while(true){
if((i__23327__auto___314 < len__23326__auto___313)){
args__23329__auto__.push((arguments[i__23327__auto___314]));

var G__315 = (i__23327__auto___314 + (1));
i__23327__auto___314 = G__315;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((2) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((2)),(0),null)):null);
return cljs.spec.alpha$macros.fspec.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23330__auto__);
});

cljs.spec.alpha$macros.fspec.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__309){
var map__310 = p__309;
var map__310__$1 = ((((!((map__310 == null)))?((((map__310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__310.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__310):map__310);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__310__$1,new cljs.core.Keyword(null,"args","args",(1315556576)));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__310__$1,new cljs.core.Keyword(null,"ret","ret",(-468222814)),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",(-2068111842),null));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__310__$1,new cljs.core.Keyword(null,"fn","fn",(-1175266204)));
var gen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__310__$1,new cljs.core.Keyword(null,"gen","gen",(142575302)));
var env = _AMPERSAND_env;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","fspec-impl","cljs.spec.alpha/fspec-impl",(-1748020611),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","spec","cljs.spec.alpha/spec",(-707298191),null)),(function (){var x__23030__auto__ = args;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = cljs.spec.alpha$macros.res(env,args);
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","spec","cljs.spec.alpha/spec",(-707298191),null)),(function (){var x__23030__auto__ = ret;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = cljs.spec.alpha$macros.res(env,ret);
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","spec","cljs.spec.alpha/spec",(-707298191),null)),(function (){var x__23030__auto__ = fn;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = cljs.spec.alpha$macros.res(env,fn);
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = gen;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
});

cljs.spec.alpha$macros.fspec.cljs$lang$maxFixedArity = (2);

cljs.spec.alpha$macros.fspec.cljs$lang$applyTo = (function (seq306){
var G__307 = cljs.core.first(seq306);
var seq306__$1 = cljs.core.next(seq306);
var G__308 = cljs.core.first(seq306__$1);
var seq306__$2 = cljs.core.next(seq306__$1);
return cljs.spec.alpha$macros.fspec.cljs$core$IFn$_invoke$arity$variadic(G__307,G__308,seq306__$2);
});

return null;
})()
;
cljs.spec.alpha$macros.fspec.cljs$lang$macro = true;

var ret__23352__auto___319 = (function (){
/**
 * takes one or more preds and returns a spec for a tuple, a vector
 *   where each element conforms to the corresponding pred. Each element
 *   will be referred to in paths using its ordinal.
 */
cljs.spec.alpha$macros.tuple = (function cljs$spec$alpha$macros$tuple(var_args){
var args__23329__auto__ = [];
var len__23326__auto___320 = arguments.length;
var i__23327__auto___321 = (0);
while(true){
if((i__23327__auto___321 < len__23326__auto___320)){
args__23329__auto__.push((arguments[i__23327__auto___321]));

var G__322 = (i__23327__auto___321 + (1));
i__23327__auto___321 = G__322;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((2) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((2)),(0),null)):null);
return cljs.spec.alpha$macros.tuple.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23330__auto__);
});

cljs.spec.alpha$macros.tuple.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,preds){
if(!(cljs.core.empty_QMARK_(preds))){
} else {
throw (new Error("Assert failed: (not (empty? preds))"));
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","tuple-impl","cljs.spec.alpha/tuple-impl",(113790282),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__20_SHARP_){
return cljs.spec.alpha$macros.res(_AMPERSAND_env,p1__20_SHARP_);
}),preds);
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.vec(preds);
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
});

cljs.spec.alpha$macros.tuple.cljs$lang$maxFixedArity = (2);

cljs.spec.alpha$macros.tuple.cljs$lang$applyTo = (function (seq316){
var G__317 = cljs.core.first(seq316);
var seq316__$1 = cljs.core.next(seq316);
var G__318 = cljs.core.first(seq316__$1);
var seq316__$2 = cljs.core.next(seq316__$1);
return cljs.spec.alpha$macros.tuple.cljs$core$IFn$_invoke$arity$variadic(G__317,G__318,seq316__$2);
});

return null;
})()
;
cljs.spec.alpha$macros.tuple.cljs$lang$macro = true;

cljs.spec.alpha$macros._speced_vars = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
cljs.spec.alpha$macros.speced_vars = (function cljs$spec$alpha$macros$speced_vars(){
return cljs.core.deref(cljs.spec.alpha$macros._speced_vars);
});
var ret__23352__auto___327 = (function (){
/**
 * Takes a symbol naming a function, and one or more of the following:
 * 
 *   :args A regex spec for the function arguments as they were a list to be
 *  passed to apply - in this way, a single spec can handle functions with
 *  multiple arities
 *   :ret A spec for the function's return value
 *   :fn A spec of the relationship between args and ret - the
 *  value passed is {:args conformed-args :ret conformed-ret} and is
 *  expected to contain predicates that relate those values
 * 
 *   Qualifies fn-sym with resolve, or using *ns* if no resolution found.
 *   Registers an fspec in the global registry, where it can be retrieved
 *   by calling get-spec with the var or full-qualified symbol.
 * 
 *   Once registered, function specs are included in doc, checked by
 *   instrument, tested by the runner cljs.spec.test.alpha/run-tests, and (if
 *   a macro) used to explain errors during macroexpansion.
 * 
 *   Note that :fn specs require the presence of :args and :ret specs to
 *   conform values, and so :fn specs will be ignored if :args or :ret
 *   are missing.
 * 
 *   Returns the qualified fn-sym.
 * 
 *   For example, to register function specs for the symbol function:
 * 
 *   (s/fdef cljs.core/symbol
 *  :args (s/alt :separate (s/cat :ns string? :n string?)
 *               :str string?
 *               :sym symbol?)
 *  :ret symbol?)
 */
cljs.spec.alpha$macros.fdef = (function cljs$spec$alpha$macros$fdef(var_args){
var args__23329__auto__ = [];
var len__23326__auto___328 = arguments.length;
var i__23327__auto___329 = (0);
while(true){
if((i__23327__auto___329 < len__23326__auto___328)){
args__23329__auto__.push((arguments[i__23327__auto___329]));

var G__330 = (i__23327__auto___329 + (1));
i__23327__auto___329 = G__330;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((3) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((3)),(0),null)):null);
return cljs.spec.alpha$macros.fdef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23330__auto__);
});

cljs.spec.alpha$macros.fdef.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fn_sym,specs){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha$macros._speced_vars,cljs.core.conj,cljs.spec.alpha$macros.ns_qualify(_AMPERSAND_env,fn_sym));

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","def","cljs.spec.alpha/def",(1122970404),null)),(function (){var x__23030__auto__ = fn_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",(-1289128341),null)),specs));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
});

cljs.spec.alpha$macros.fdef.cljs$lang$maxFixedArity = (3);

cljs.spec.alpha$macros.fdef.cljs$lang$applyTo = (function (seq323){
var G__324 = cljs.core.first(seq323);
var seq323__$1 = cljs.core.next(seq323);
var G__325 = cljs.core.first(seq323__$1);
var seq323__$2 = cljs.core.next(seq323__$1);
var G__326 = cljs.core.first(seq323__$2);
var seq323__$3 = cljs.core.next(seq323__$2);
return cljs.spec.alpha$macros.fdef.cljs$core$IFn$_invoke$arity$variadic(G__324,G__325,G__326,seq323__$3);
});

return null;
})()
;
cljs.spec.alpha$macros.fdef.cljs$lang$macro = true;

var ret__23352__auto___334 = (function (){
/**
 * takes the same arguments as spec/keys and returns a regex op that matches sequences of key/values,
 *   converts them into a map, and conforms that map with a corresponding
 *   spec/keys call:
 * 
 *   user=> (s/conform (s/keys :req-un [::a ::c]) {:a 1 :c 2})
 *   {:a 1, :c 2}
 *   user=> (s/conform (s/keys* :req-un [::a ::c]) [:a 1 :c 2])
 *   {:a 1, :c 2}
 * 
 *   the resulting regex op can be composed into a larger regex:
 * 
 *   user=> (s/conform (s/cat :i1 integer? :m (s/keys* :req-un [::a ::c]) :i2 integer?) [42 :a 1 :c 2 :d 4 99])
 *   {:i1 42, :m {:a 1, :c 2, :d 4}, :i2 99}
 */
cljs.spec.alpha$macros.keys_STAR_ = (function cljs$spec$alpha$macros$keys_STAR_(var_args){
var args__23329__auto__ = [];
var len__23326__auto___335 = arguments.length;
var i__23327__auto___336 = (0);
while(true){
if((i__23327__auto___336 < len__23326__auto___335)){
args__23329__auto__.push((arguments[i__23327__auto___336]));

var G__337 = (i__23327__auto___336 + (1));
i__23327__auto___336 = G__337;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((2) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((2)),(0),null)):null);
return cljs.spec.alpha$macros.keys_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23330__auto__);
});

cljs.spec.alpha$macros.keys_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kspecs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"mspec__21__auto__","mspec__21__auto__",(332731778),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",(1109346032),null)),kspecs));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","with-gen","cljs.spec.alpha/with-gen",(1999495028),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","&","cljs.spec.alpha/&",(1635809823),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",(-1238084288),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",(-1471398329),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",(-1602615178))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",(713156450),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",(552625740))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",(-2068111842),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kvs->map","cljs.spec.alpha/kvs->map",(579713455))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"mspec__21__auto__","mspec__21__auto__",(332731778),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.gen.alpha","fmap","cljs.spec.gen.alpha/fmap",(1863255061),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__22__auto__","m__22__auto__",(-1017374062),null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",(1757277831),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",(-1133584918),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__22__auto__","m__22__auto__",(-1017374062),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",(147877780),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"mspec__21__auto__","mspec__21__auto__",(332731778),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
});

cljs.spec.alpha$macros.keys_STAR_.cljs$lang$maxFixedArity = (2);

cljs.spec.alpha$macros.keys_STAR_.cljs$lang$applyTo = (function (seq331){
var G__332 = cljs.core.first(seq331);
var seq331__$1 = cljs.core.next(seq331);
var G__333 = cljs.core.first(seq331__$1);
var seq331__$2 = cljs.core.next(seq331__$1);
return cljs.spec.alpha$macros.keys_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__332,G__333,seq331__$2);
});

return null;
})()
;
cljs.spec.alpha$macros.keys_STAR_.cljs$lang$macro = true;

var ret__23352__auto___338 = /**
 * returns a spec that accepts nil and values satisfiying pred
 */
cljs.spec.alpha$macros.nilable = (function cljs$spec$alpha$macros$nilable(_AMPERSAND_form,_AMPERSAND_env,pred){
var pf = cljs.spec.alpha$macros.res(_AMPERSAND_env,pred);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","nilable-impl","cljs.spec.alpha/nilable-impl",(1785777257),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = pf;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = pred;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0)));
});
cljs.spec.alpha$macros.nilable.cljs$lang$macro = true;

var ret__23352__auto___339 = /**
 * Returns a spec that validates insts in the range from start
 *   (inclusive) to end (exclusive).
 */
cljs.spec.alpha$macros.inst_in = (function cljs$spec$alpha$macros$inst_in(_AMPERSAND_form,_AMPERSAND_env,start,end){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__24__auto__","st__24__auto__",(1346265228),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","inst-ms","cljs.core/inst-ms",(-515575156),null)),(function (){var x__23030__auto__ = start;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"et__25__auto__","et__25__auto__",(-1443859819),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","inst-ms","cljs.core/inst-ms",(-515575156),null)),(function (){var x__23030__auto__ = end;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"mkdate__26__auto__","mkdate__26__auto__",(-1450949221),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"d__27__auto__","d__27__auto__",(-1811005785),null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",(384205255),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"d__27__auto__","d__27__auto__",(-1811005785),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","spec","cljs.spec.alpha/spec",(-707298191),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",(-2060279705),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","inst?","cljs.core/inst?",(1216133710),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p1__23__28__auto__","p1__23__28__auto__",(1681876607),null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","inst-in-range?","cljs.spec.alpha/inst-in-range?",(-1154968958),null)),(function (){var x__23030__auto__ = start;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = end;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p1__23__28__auto__","p1__23__28__auto__",(1681876607),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"gen","gen",(142575302))),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.gen.alpha","fmap","cljs.spec.gen.alpha/fmap",(1863255061),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"mkdate__26__auto__","mkdate__26__auto__",(-1450949221),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.gen.alpha","large-integer*","cljs.spec.gen.alpha/large-integer*",(-227289663),null)),(function (){var x__23030__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"min","min",(444991522))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__24__auto__","st__24__auto__",(1346265228),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"max","max",(61366548))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"et__25__auto__","et__25__auto__",(-1443859819),null))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
});
cljs.spec.alpha$macros.inst_in.cljs$lang$macro = true;

var ret__23352__auto___340 = /**
 * Returns a spec that validates fixed precision integers in the
 *   range from start (inclusive) to end (exclusive).
 */
cljs.spec.alpha$macros.int_in = (function cljs$spec$alpha$macros$int_in(_AMPERSAND_form,_AMPERSAND_env,start,end){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","spec","cljs.spec.alpha/spec",(-707298191),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",(-2060279705),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",(50730120),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p1__29__30__auto__","p1__29__30__auto__",(-1548410461),null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","int-in-range?","cljs.spec.alpha/int-in-range?",(92650900),null)),(function (){var x__23030__auto__ = start;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = end;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p1__29__30__auto__","p1__29__30__auto__",(-1548410461),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"gen","gen",(142575302))),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.gen.alpha","large-integer*","cljs.spec.gen.alpha/large-integer*",(-227289663),null)),(function (){var x__23030__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"min","min",(444991522))),(function (){var x__23030__auto__ = start;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"max","max",(61366548))),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dec","cljs.core/dec",(-443230268),null)),(function (){var x__23030__auto__ = end;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
});
cljs.spec.alpha$macros.int_in.cljs$lang$macro = true;

var ret__23352__auto___347 = (function (){
/**
 * Specs a 64-bit floating point number. Options:
 * 
 *  :infinite? - whether +/- infinity allowed (default true)
 *  :NaN?      - whether NaN allowed (default true)
 *  :min       - minimum value (inclusive, default none)
 *  :max       - maximum value (inclusive, default none)
 */
cljs.spec.alpha$macros.double_in = (function cljs$spec$alpha$macros$double_in(var_args){
var args__23329__auto__ = [];
var len__23326__auto___348 = arguments.length;
var i__23327__auto___349 = (0);
while(true){
if((i__23327__auto___349 < len__23326__auto___348)){
args__23329__auto__.push((arguments[i__23327__auto___349]));

var G__350 = (i__23327__auto___349 + (1));
i__23327__auto___349 = G__350;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((2) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((2)),(0),null)):null);
return cljs.spec.alpha$macros.double_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23330__auto__);
});

cljs.spec.alpha$macros.double_in.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__344){
var map__345 = p__344;
var map__345__$1 = ((((!((map__345 == null)))?((((map__345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__345.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__345):map__345);
var m = map__345__$1;
var infinite_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__345__$1,new cljs.core.Keyword(null,"infinite?","infinite?",(-2017886608)),true);
var NaN_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__345__$1,new cljs.core.Keyword(null,"NaN?","NaN?",(-1917767651)),true);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__345__$1,new cljs.core.Keyword(null,"min","min",(444991522)));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__345__$1,new cljs.core.Keyword(null,"max","max",(61366548)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","spec","cljs.spec.alpha/spec",(-707298191),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",(-2060279705),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","double?","cljs.core/double?",(1757455529),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(infinite_QMARK_)?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__31#","p1__31#",(884848327),null)], null),cljs.core.list(new cljs.core.Symbol(null,"not","not",(1044554643),null),cljs.core.list(new cljs.core.Symbol(null,"infinite?","infinite?",(-377355081),null),new cljs.core.Symbol(null,"p1__31#","p1__31#",(884848327),null))))], null)),(cljs.core.truth_(NaN_QMARK_)?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__32#","p1__32#",(1287524234),null)], null),cljs.core.list(new cljs.core.Symbol(null,"not","not",(1044554643),null),cljs.core.list(new cljs.core.Symbol("js","isNaN","js/isNaN",(74901299),null),new cljs.core.Symbol(null,"p1__32#","p1__32#",(1287524234),null))))], null)),(cljs.core.truth_(max)?cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p1__33__34__auto__","p1__33__34__auto__",(1761325171),null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",(1677001748),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p1__33__34__auto__","p1__33__34__auto__",(1761325171),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = max;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()))):null),(cljs.core.truth_(min)?cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p1__35__36__auto__","p1__35__36__auto__",(-180265542),null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",(1677001748),null)),(function (){var x__23030__auto__ = min;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p1__35__36__auto__","p1__35__36__auto__",(-180265542),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()))):null)], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"gen","gen",(142575302))),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.gen.alpha","double*","cljs.spec.gen.alpha/double*",(416548942),null)),(function (){var x__23030__auto__ = m;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
});

cljs.spec.alpha$macros.double_in.cljs$lang$maxFixedArity = (2);

cljs.spec.alpha$macros.double_in.cljs$lang$applyTo = (function (seq341){
var G__342 = cljs.core.first(seq341);
var seq341__$1 = cljs.core.next(seq341);
var G__343 = cljs.core.first(seq341__$1);
var seq341__$2 = cljs.core.next(seq341__$1);
return cljs.spec.alpha$macros.double_in.cljs$core$IFn$_invoke$arity$variadic(G__342,G__343,seq341__$2);
});

return null;
})()
;
cljs.spec.alpha$macros.double_in.cljs$lang$macro = true;

var ret__23352__auto___354 = (function (){
/**
 * Takes map-validating specs (e.g. 'keys' specs) and
 *   returns a spec that returns a conformed map satisfying all of the
 *   specs.  Successive conformed values propagate through rest of
 *   predicates. Unlike 'and', merge can generate maps satisfying the
 *   union of the predicates.
 */
cljs.spec.alpha$macros.merge = (function cljs$spec$alpha$macros$merge(var_args){
var args__23329__auto__ = [];
var len__23326__auto___355 = arguments.length;
var i__23327__auto___356 = (0);
while(true){
if((i__23327__auto___356 < len__23326__auto___355)){
args__23329__auto__.push((arguments[i__23327__auto___356]));

var G__357 = (i__23327__auto___356 + (1));
i__23327__auto___356 = G__357;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((2) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((2)),(0),null)):null);
return cljs.spec.alpha$macros.merge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23330__auto__);
});

cljs.spec.alpha$macros.merge.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred_forms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","merge-spec-impl","cljs.spec.alpha/merge-spec-impl",(-1254890813),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__37_SHARP_){
return cljs.spec.alpha$macros.res(_AMPERSAND_env,p1__37_SHARP_);
}),pred_forms);
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.vec(pred_forms);
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0)));
});

cljs.spec.alpha$macros.merge.cljs$lang$maxFixedArity = (2);

cljs.spec.alpha$macros.merge.cljs$lang$applyTo = (function (seq351){
var G__352 = cljs.core.first(seq351);
var seq351__$1 = cljs.core.next(seq351);
var G__353 = cljs.core.first(seq351__$1);
var seq351__$2 = cljs.core.next(seq351__$1);
return cljs.spec.alpha$macros.merge.cljs$core$IFn$_invoke$arity$variadic(G__352,G__353,seq351__$2);
});

return null;
})()
;
cljs.spec.alpha$macros.merge.cljs$lang$macro = true;

var ret__23352__auto___361 = (function (){
/**
 * exercises the fn named by sym (a symbol) by applying it to
 *   n (default 10) generated samples of its args spec. When fspec is
 *   supplied its arg spec is used, and sym-or-f can be a fn.  Returns a
 *   sequence of tuples of [args ret]. 
 */
cljs.spec.alpha$macros.exercise_fn = (function cljs$spec$alpha$macros$exercise_fn(var_args){
var G__359 = arguments.length;
switch (G__359) {
case (3):
return cljs.spec.alpha$macros.exercise_fn.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return cljs.spec.alpha$macros.exercise_fn.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case (5):
return cljs.spec.alpha$macros.exercise_fn.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

cljs.spec.alpha$macros.exercise_fn.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,sym){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","exercise-fn","cljs.spec.alpha/exercise-fn",(295872941),null)),(function (){var x__23030__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,(10))], 0)));
});

cljs.spec.alpha$macros.exercise_fn.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,sym,n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","exercise-fn","cljs.spec.alpha/exercise-fn",(295872941),null)),(function (){var x__23030__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0)));
});

cljs.spec.alpha$macros.exercise_fn.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,sym,n,fspec){
var sym__$1 = (function (){var G__360 = sym;
if((cljs.core.sequential_QMARK_(sym)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(sym),new cljs.core.Symbol(null,"quote","quote",(1377916282),null)))){
return cljs.core.second(G__360);
} else {
return G__360;
}
})();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fspec__38__auto__","fspec__38__auto__",(-1232047661),null)),(function (){var x__23030__auto__ = ((cljs.core.not(fspec))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","get-spec","cljs.spec.alpha/get-spec",(785931985),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),(function (){var x__23030__auto__ = new cljs.core.Keyword(null,"name","name",(1843675177)).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.api.resolve(_AMPERSAND_env,sym__$1));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})())):fspec);
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f__39__auto__","f__39__auto__",(323357854),null)),(function (){var x__23030__auto__ = sym__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",(1346583165),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"arg-spec__40__auto__","arg-spec__40__auto__",(-1990146819),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fspec__38__auto__","fspec__38__auto__",(-1232047661),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"args","args",(1315556576))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fspec__38__auto__","fspec__38__auto__",(-1232047661),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","for","cljs.core/for",(-89947499),null)),(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__41__auto__","args__41__auto__",(1424629061),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.gen.alpha","sample","cljs.spec.gen.alpha/sample",(-2084840585),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",(147877780),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"arg-spec__40__auto__","arg-spec__40__auto__",(-1990146819),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__41__auto__","args__41__auto__",(1424629061),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",(1757277831),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f__39__auto__","f__39__auto__",(323357854),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__41__auto__","args__41__auto__",(1424629061),null))], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",(595905694),null)),(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",(750655924),null)),cljs.core._conj(cljs.core.List.EMPTY,"No :args spec found, can't generate")));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
});

cljs.spec.alpha$macros.exercise_fn.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.spec.alpha$macros.exercise_fn.cljs$lang$macro = true;

var ret__23352__auto___363 = cljs.spec.alpha$macros.init_compile_asserts = (function cljs$spec$alpha$macros$init_compile_asserts(_AMPERSAND_form,_AMPERSAND_env){
var compile_asserts = cljs.core.not(new cljs.core.Keyword(null,"elide-asserts","elide-asserts",(537063272)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",(99638489)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_))));
return compile_asserts;
});
cljs.spec.alpha$macros.init_compile_asserts.cljs$lang$macro = true;

var ret__23352__auto___364 = /**
 * spec-checking assert expression. Returns x if x is valid? according
 * to spec, else throws an error with explain-data plus ::failure of
 * :assertion-failed.
 * Can be disabled at either compile time or runtime:
 * If *compile-asserts* is false at compile time, compiles to x. Defaults
 * to the negation value of the ':elide-asserts' compiler option, or true if
 * not set.
 * If (check-asserts?) is false at runtime, always returns x. Defaults to
 * value of 'cljs.spec.alpha/*runtime-asserts*', or false if not set. You can
 * toggle check-asserts? with (check-asserts bool).
 */
cljs.spec.alpha$macros.assert = (function cljs$spec$alpha$macros$assert(_AMPERSAND_form,_AMPERSAND_env,spec,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","*compile-asserts*","cljs.spec.alpha/*compile-asserts*",(-1808061440),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",(-1060443587),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","assert*","cljs.spec.alpha/assert*",(464381070),null)),(function (){var x__23030__auto__ = spec;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__23030__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})()], 0)));
});
cljs.spec.alpha$macros.assert.cljs$lang$macro = true;

