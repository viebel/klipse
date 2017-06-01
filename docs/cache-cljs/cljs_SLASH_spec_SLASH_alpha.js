// Compiled by ClojureScript 1.9.542 {:static-fns true, :optimize-constants false}
goog.provide('cljs.spec.alpha');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('cljs.spec.gen.alpha');
goog.require('clojure.string');
cljs.spec.alpha.MAX_INT = (9007199254740991);
/**
 * A soft limit on how many times a branching spec (or/alt/* /opt-keys/multi-spec)
 *   can be recursed through during generation. After this a
 *   non-recursive branch will be chosen.
 */
cljs.spec.alpha._STAR_recursion_limit_STAR_ = (4);
/**
 * The number of times an anonymous fn specified by fspec will be (generatively) tested during conform
 */
cljs.spec.alpha._STAR_fspec_iterations_STAR_ = (21);
/**
 * The number of items validated in a collection spec'ed with 'every'
 */
cljs.spec.alpha._STAR_coll_check_limit_STAR_ = (101);
/**
 * The number of errors reported by explain in a collection spec'ed with 'every'
 */
cljs.spec.alpha._STAR_coll_error_limit_STAR_ = (20);

/**
 * @interface
 */
cljs.spec.alpha.Spec = function(){};

cljs.spec.alpha.conform_STAR_ = (function cljs$spec$alpha$conform_STAR_(spec,x){
if((!((spec == null))) && (!((spec.cljs$spec$alpha$Spec$conform_STAR_$arity$2 == null)))){
return spec.cljs$spec$alpha$Spec$conform_STAR_$arity$2(spec,x);
} else {
var x__10157__auto__ = (((spec == null))?null:spec);
var m__10158__auto__ = (cljs.spec.alpha.conform_STAR_[goog.typeOf(x__10157__auto__)]);
if(!((m__10158__auto__ == null))){
return (m__10158__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10158__auto__.cljs$core$IFn$_invoke$arity$2(spec,x) : m__10158__auto__.call(null,spec,x));
} else {
var m__10158__auto____$1 = (cljs.spec.alpha.conform_STAR_["_"]);
if(!((m__10158__auto____$1 == null))){
return (m__10158__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10158__auto____$1.cljs$core$IFn$_invoke$arity$2(spec,x) : m__10158__auto____$1.call(null,spec,x));
} else {
throw cljs.core.missing_protocol("Spec.conform*",spec);
}
}
}
});

cljs.spec.alpha.unform_STAR_ = (function cljs$spec$alpha$unform_STAR_(spec,y){
if((!((spec == null))) && (!((spec.cljs$spec$alpha$Spec$unform_STAR_$arity$2 == null)))){
return spec.cljs$spec$alpha$Spec$unform_STAR_$arity$2(spec,y);
} else {
var x__10157__auto__ = (((spec == null))?null:spec);
var m__10158__auto__ = (cljs.spec.alpha.unform_STAR_[goog.typeOf(x__10157__auto__)]);
if(!((m__10158__auto__ == null))){
return (m__10158__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10158__auto__.cljs$core$IFn$_invoke$arity$2(spec,y) : m__10158__auto__.call(null,spec,y));
} else {
var m__10158__auto____$1 = (cljs.spec.alpha.unform_STAR_["_"]);
if(!((m__10158__auto____$1 == null))){
return (m__10158__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10158__auto____$1.cljs$core$IFn$_invoke$arity$2(spec,y) : m__10158__auto____$1.call(null,spec,y));
} else {
throw cljs.core.missing_protocol("Spec.unform*",spec);
}
}
}
});

cljs.spec.alpha.explain_STAR_ = (function cljs$spec$alpha$explain_STAR_(spec,path,via,in$,x){
if((!((spec == null))) && (!((spec.cljs$spec$alpha$Spec$explain_STAR_$arity$5 == null)))){
return spec.cljs$spec$alpha$Spec$explain_STAR_$arity$5(spec,path,via,in$,x);
} else {
var x__10157__auto__ = (((spec == null))?null:spec);
var m__10158__auto__ = (cljs.spec.alpha.explain_STAR_[goog.typeOf(x__10157__auto__)]);
if(!((m__10158__auto__ == null))){
return (m__10158__auto__.cljs$core$IFn$_invoke$arity$5 ? m__10158__auto__.cljs$core$IFn$_invoke$arity$5(spec,path,via,in$,x) : m__10158__auto__.call(null,spec,path,via,in$,x));
} else {
var m__10158__auto____$1 = (cljs.spec.alpha.explain_STAR_["_"]);
if(!((m__10158__auto____$1 == null))){
return (m__10158__auto____$1.cljs$core$IFn$_invoke$arity$5 ? m__10158__auto____$1.cljs$core$IFn$_invoke$arity$5(spec,path,via,in$,x) : m__10158__auto____$1.call(null,spec,path,via,in$,x));
} else {
throw cljs.core.missing_protocol("Spec.explain*",spec);
}
}
}
});

cljs.spec.alpha.gen_STAR_ = (function cljs$spec$alpha$gen_STAR_(spec,overrides,path,rmap){
if((!((spec == null))) && (!((spec.cljs$spec$alpha$Spec$gen_STAR_$arity$4 == null)))){
return spec.cljs$spec$alpha$Spec$gen_STAR_$arity$4(spec,overrides,path,rmap);
} else {
var x__10157__auto__ = (((spec == null))?null:spec);
var m__10158__auto__ = (cljs.spec.alpha.gen_STAR_[goog.typeOf(x__10157__auto__)]);
if(!((m__10158__auto__ == null))){
return (m__10158__auto__.cljs$core$IFn$_invoke$arity$4 ? m__10158__auto__.cljs$core$IFn$_invoke$arity$4(spec,overrides,path,rmap) : m__10158__auto__.call(null,spec,overrides,path,rmap));
} else {
var m__10158__auto____$1 = (cljs.spec.alpha.gen_STAR_["_"]);
if(!((m__10158__auto____$1 == null))){
return (m__10158__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__10158__auto____$1.cljs$core$IFn$_invoke$arity$4(spec,overrides,path,rmap) : m__10158__auto____$1.call(null,spec,overrides,path,rmap));
} else {
throw cljs.core.missing_protocol("Spec.gen*",spec);
}
}
}
});

cljs.spec.alpha.with_gen_STAR_ = (function cljs$spec$alpha$with_gen_STAR_(spec,gfn){
if((!((spec == null))) && (!((spec.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 == null)))){
return spec.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2(spec,gfn);
} else {
var x__10157__auto__ = (((spec == null))?null:spec);
var m__10158__auto__ = (cljs.spec.alpha.with_gen_STAR_[goog.typeOf(x__10157__auto__)]);
if(!((m__10158__auto__ == null))){
return (m__10158__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10158__auto__.cljs$core$IFn$_invoke$arity$2(spec,gfn) : m__10158__auto__.call(null,spec,gfn));
} else {
var m__10158__auto____$1 = (cljs.spec.alpha.with_gen_STAR_["_"]);
if(!((m__10158__auto____$1 == null))){
return (m__10158__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10158__auto____$1.cljs$core$IFn$_invoke$arity$2(spec,gfn) : m__10158__auto____$1.call(null,spec,gfn));
} else {
throw cljs.core.missing_protocol("Spec.with-gen*",spec);
}
}
}
});

cljs.spec.alpha.describe_STAR_ = (function cljs$spec$alpha$describe_STAR_(spec){
if((!((spec == null))) && (!((spec.cljs$spec$alpha$Spec$describe_STAR_$arity$1 == null)))){
return spec.cljs$spec$alpha$Spec$describe_STAR_$arity$1(spec);
} else {
var x__10157__auto__ = (((spec == null))?null:spec);
var m__10158__auto__ = (cljs.spec.alpha.describe_STAR_[goog.typeOf(x__10157__auto__)]);
if(!((m__10158__auto__ == null))){
return (m__10158__auto__.cljs$core$IFn$_invoke$arity$1 ? m__10158__auto__.cljs$core$IFn$_invoke$arity$1(spec) : m__10158__auto__.call(null,spec));
} else {
var m__10158__auto____$1 = (cljs.spec.alpha.describe_STAR_["_"]);
if(!((m__10158__auto____$1 == null))){
return (m__10158__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__10158__auto____$1.cljs$core$IFn$_invoke$arity$1(spec) : m__10158__auto____$1.call(null,spec));
} else {
throw cljs.core.missing_protocol("Spec.describe*",spec);
}
}
}
});

if(typeof cljs.spec.alpha.registry_ref !== 'undefined'){
} else {
cljs.spec.alpha.registry_ref = (function (){var G__19779 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19779) : cljs.core.atom.call(null,G__19779));
})();
}
cljs.spec.alpha.deep_resolve = (function cljs$spec$alpha$deep_resolve(reg,k){
var spec = k;
while(true){
if(cljs.core.ident_QMARK_(spec)){
var G__19783 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reg,spec);
spec = G__19783;
continue;
} else {
return spec;
}
break;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, nil if not found, k if k not ident
 */
cljs.spec.alpha.reg_resolve = (function cljs$spec$alpha$reg_resolve(k){
if(cljs.core.ident_QMARK_(k)){
var reg = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.registry_ref) : cljs.core.deref.call(null,cljs.spec.alpha.registry_ref));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reg,k);
if(!(cljs.core.ident_QMARK_(spec))){
return spec;
} else {
return cljs.spec.alpha.deep_resolve(reg,spec);
}
} else {
return k;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, throws if not found, k if k not ident
 */
cljs.spec.alpha.reg_resolve_BANG_ = (function cljs$spec$alpha$reg_resolve_BANG_(k){
if(cljs.core.ident_QMARK_(k)){
var or__9439__auto__ = cljs.spec.alpha.reg_resolve(k);
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to resolve spec: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')));
}
} else {
return k;
}
});
/**
 * returns x if x is a spec object, else logical false
 */
cljs.spec.alpha.spec_QMARK_ = (function cljs$spec$alpha$spec_QMARK_(x){
if(((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$spec$alpha$Spec$)))?true:false):false)){
return x;
} else {
return null;
}
});
/**
 * returns x if x is a (clojure.spec) regex op, else logical false
 */
cljs.spec.alpha.regex_QMARK_ = (function cljs$spec$alpha$regex_QMARK_(x){
var and__9427__auto__ = new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(and__9427__auto__)){
return x;
} else {
return and__9427__auto__;
}
});
cljs.spec.alpha.with_name = (function cljs$spec$alpha$with_name(spec,name){
if(cljs.core.ident_QMARK_(spec)){
return spec;
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(spec))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570),name);
} else {
if(((!((spec == null)))?((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$)))?true:false):false)){
return cljs.core.with_meta(spec,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(spec),new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570),name));
} else {
return null;
}
}
}
});
cljs.spec.alpha.spec_name = (function cljs$spec$alpha$spec_name(spec){
if(cljs.core.ident_QMARK_(spec)){
return spec;
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(spec))){
return new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570).cljs$core$IFn$_invoke$arity$1(spec);
} else {
if(((!((spec == null)))?((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$)))?true:false):false)){
return new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(spec));
} else {
return null;
}
}
}
});
/**
 * spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.
 */
cljs.spec.alpha.maybe_spec = (function cljs$spec$alpha$maybe_spec(spec_or_k){
var s = (function (){var or__9439__auto__ = (function (){var and__9427__auto__ = cljs.core.ident_QMARK_(spec_or_k);
if(and__9427__auto__){
return cljs.spec.alpha.reg_resolve(spec_or_k);
} else {
return and__9427__auto__;
}
})();
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
var or__9439__auto____$1 = cljs.spec.alpha.spec_QMARK_(spec_or_k);
if(cljs.core.truth_(or__9439__auto____$1)){
return or__9439__auto____$1;
} else {
var or__9439__auto____$2 = cljs.spec.alpha.regex_QMARK_(spec_or_k);
if(cljs.core.truth_(or__9439__auto____$2)){
return or__9439__auto____$2;
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(s))){
return cljs.spec.alpha.with_name((cljs.spec.alpha.regex_spec_impl.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.regex_spec_impl.cljs$core$IFn$_invoke$arity$2(s,null) : cljs.spec.alpha.regex_spec_impl.call(null,s,null)),cljs.spec.alpha.spec_name(s));
} else {
return s;
}
});
/**
 * spec-or-k must be a spec, regex or kw/sym, else returns nil. Throws if unresolvable kw/sym
 */
cljs.spec.alpha.the_spec = (function cljs$spec$alpha$the_spec(spec_or_k){
var or__9439__auto__ = cljs.spec.alpha.maybe_spec(spec_or_k);
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
if(cljs.core.ident_QMARK_(spec_or_k)){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to resolve spec: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec_or_k)].join('')));
} else {
return null;
}
}
});

/**
 * @interface
 */
cljs.spec.alpha.Specize = function(){};

cljs.spec.alpha.specize_STAR_ = (function cljs$spec$alpha$specize_STAR_(var_args){
var args19792 = [];
var len__10660__auto___19795 = arguments.length;
var i__10661__auto___19796 = (0);
while(true){
if((i__10661__auto___19796 < len__10660__auto___19795)){
args19792.push((arguments[i__10661__auto___19796]));

var G__19797 = (i__10661__auto___19796 + (1));
i__10661__auto___19796 = G__19797;
continue;
} else {
}
break;
}

var G__19794 = args19792.length;
switch (G__19794) {
case 1:
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19792.length)].join('')));

}
});

cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.cljs$spec$alpha$Specize$specize_STAR_$arity$1 == null)))){
return _.cljs$spec$alpha$Specize$specize_STAR_$arity$1(_);
} else {
var x__10157__auto__ = (((_ == null))?null:_);
var m__10158__auto__ = (cljs.spec.alpha.specize_STAR_[goog.typeOf(x__10157__auto__)]);
if(!((m__10158__auto__ == null))){
return (m__10158__auto__.cljs$core$IFn$_invoke$arity$1 ? m__10158__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__10158__auto__.call(null,_));
} else {
var m__10158__auto____$1 = (cljs.spec.alpha.specize_STAR_["_"]);
if(!((m__10158__auto____$1 == null))){
return (m__10158__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__10158__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__10158__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Specize.specize*",_);
}
}
}
});

cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_,form){
if((!((_ == null))) && (!((_.cljs$spec$alpha$Specize$specize_STAR_$arity$2 == null)))){
return _.cljs$spec$alpha$Specize$specize_STAR_$arity$2(_,form);
} else {
var x__10157__auto__ = (((_ == null))?null:_);
var m__10158__auto__ = (cljs.spec.alpha.specize_STAR_[goog.typeOf(x__10157__auto__)]);
if(!((m__10158__auto__ == null))){
return (m__10158__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10158__auto__.cljs$core$IFn$_invoke$arity$2(_,form) : m__10158__auto__.call(null,_,form));
} else {
var m__10158__auto____$1 = (cljs.spec.alpha.specize_STAR_["_"]);
if(!((m__10158__auto____$1 == null))){
return (m__10158__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10158__auto____$1.cljs$core$IFn$_invoke$arity$2(_,form) : m__10158__auto____$1.call(null,_,form));
} else {
throw cljs.core.missing_protocol("Specize.specize*",_);
}
}
}
});

cljs.spec.alpha.specize_STAR_.cljs$lang$maxFixedArity = 2;


cljs.core.Keyword.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (k){
var k__$1 = this;
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.reg_resolve_BANG_(k__$1));
});

cljs.core.Keyword.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (k,_){
var k__$1 = this;
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.reg_resolve_BANG_(k__$1));
});

cljs.core.Symbol.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Symbol.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var s__$1 = this;
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.reg_resolve_BANG_(s__$1));
});

cljs.core.Symbol.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var s__$1 = this;
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.reg_resolve_BANG_(s__$1));
});

(cljs.spec.alpha.Specize["_"] = true);

(cljs.spec.alpha.specize_STAR_["_"] = (function() {
var G__19813 = null;
var G__19813__1 = (function (o){
var G__19807 = new cljs.core.Keyword("cljs.spec.alpha","unknown","cljs.spec.alpha/unknown",651034818);
var G__19808 = o;
var G__19809 = null;
var G__19810 = null;
return (cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4 ? cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(G__19807,G__19808,G__19809,G__19810) : cljs.spec.alpha.spec_impl.call(null,G__19807,G__19808,G__19809,G__19810));
});
var G__19813__2 = (function (o,form){
return (cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4 ? cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(form,o,null,null) : cljs.spec.alpha.spec_impl.call(null,form,o,null,null));
});
G__19813 = function(o,form){
switch(arguments.length){
case 1:
return G__19813__1.call(this,o);
case 2:
return G__19813__2.call(this,o,form);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__19813.cljs$core$IFn$_invoke$arity$1 = G__19813__1;
G__19813.cljs$core$IFn$_invoke$arity$2 = G__19813__2;
return G__19813;
})()
);
cljs.spec.alpha.specize = (function cljs$spec$alpha$specize(var_args){
var args19821 = [];
var len__10660__auto___19825 = arguments.length;
var i__10661__auto___19826 = (0);
while(true){
if((i__10661__auto___19826 < len__10660__auto___19825)){
args19821.push((arguments[i__10661__auto___19826]));

var G__19827 = (i__10661__auto___19826 + (1));
i__10661__auto___19826 = G__19827;
continue;
} else {
}
break;
}

var G__19824 = args19821.length;
switch (G__19824) {
case 1:
return cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19821.length)].join('')));

}
});

cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1 = (function (s){
var or__9439__auto__ = cljs.spec.alpha.spec_QMARK_(s);
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1(s);
}
});

cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$2 = (function (s,form){
var or__9439__auto__ = cljs.spec.alpha.spec_QMARK_(s);
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$2(s,form);
}
});

cljs.spec.alpha.specize.cljs$lang$maxFixedArity = 2;

/**
 * tests the validity of a conform return value
 */
cljs.spec.alpha.invalid_QMARK_ = (function cljs$spec$alpha$invalid_QMARK_(ret){
return cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119),ret);
});
/**
 * Given a spec and a value, returns :clojure.spec/invalid if value does not match spec,
 *   else the (possibly destructured) value.
 */
cljs.spec.alpha.conform = (function cljs$spec$alpha$conform(spec,x){
return cljs.spec.alpha.conform_STAR_(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec),x);
});
/**
 * Given a spec and a value created by or compliant with a call to
 *   'conform' with the same spec, returns a value with all conform
 * destructuring undone.
 */
cljs.spec.alpha.unform = (function cljs$spec$alpha$unform(spec,x){
return cljs.spec.alpha.unform_STAR_(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec),x);
});
/**
 * returns the spec as data
 */
cljs.spec.alpha.form = (function cljs$spec$alpha$form(spec){
return cljs.spec.alpha.describe_STAR_(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec));
});
cljs.spec.alpha.abbrev = (function cljs$spec$alpha$abbrev(form){
if(cljs.core.seq_QMARK_(form)){
return clojure.walk.postwalk((function (form__$1){
if(cljs.core.truth_((function (){var and__9427__auto__ = (form__$1 instanceof cljs.core.Symbol);
if(and__9427__auto__){
return cljs.core.namespace(form__$1);
} else {
return and__9427__auto__;
}
})())){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(form__$1));
} else {
if((cljs.core.seq_QMARK_(form__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.first(form__$1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.second(form__$1)))){
return cljs.core.last(form__$1);
} else {
return form__$1;

}
}
}),form);
} else {
if(cljs.core.truth_((function (){var and__9427__auto__ = (form instanceof cljs.core.Symbol);
if(and__9427__auto__){
return cljs.core.namespace(form);
} else {
return and__9427__auto__;
}
})())){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(form));
} else {
return form;

}
}
});
/**
 * returns an abbreviated description of the spec as data
 */
cljs.spec.alpha.describe = (function cljs$spec$alpha$describe(spec){
return cljs.spec.alpha.abbrev(cljs.spec.alpha.form(spec));
});
/**
 * Takes a spec and a no-arg, generator-returning fn and returns a version of that spec that uses that generator
 */
cljs.spec.alpha.with_gen = (function cljs$spec$alpha$with_gen(spec,gen_fn){
var spec__$1 = cljs.spec.alpha.reg_resolve(spec);
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(spec__$1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec__$1,new cljs.core.Keyword("cljs.spec.alpha","gfn","cljs.spec.alpha/gfn",-593120375),gen_fn);
} else {
return cljs.spec.alpha.with_gen_STAR_(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec__$1),gen_fn);
}
});
cljs.spec.alpha.explain_data_STAR_ = (function cljs$spec$alpha$explain_data_STAR_(spec,path,via,in$,x){
var temp__6738__auto__ = cljs.spec.alpha.explain_STAR_(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec),path,via,in$,x);
if(cljs.core.truth_(temp__6738__auto__)){
var probs = temp__6738__auto__;
if(cljs.core.empty_QMARK_(probs)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),probs], null);
}
} else {
return null;
}
});
/**
 * Given a spec and a value x which ought to conform, returns nil if x
 *   conforms, else a map with at least the key ::problems whose value is
 *   a collection of problem-maps, where problem-map has at least :path :pred and :val
 *   keys describing the predicate and the value that failed at that
 *   path.
 */
cljs.spec.alpha.explain_data = (function cljs$spec$alpha$explain_data(spec,x){
return cljs.spec.alpha.explain_data_STAR_(spec,cljs.core.PersistentVector.EMPTY,(function (){var temp__6736__auto__ = cljs.spec.alpha.spec_name(spec);
if(cljs.core.truth_(temp__6736__auto__)){
var name = temp__6736__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,x);
});
/**
 * Default printer for explain-data. nil indicates a successful validation.
 */
cljs.spec.alpha.explain_printer = (function cljs$spec$alpha$explain_printer(ed){
if(cljs.core.truth_(ed)){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var sb__10531__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_19882_19956 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_19883_19957 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_19882_19956,_STAR_print_fn_STAR_19883_19957,sb__10531__auto__){
return (function (x__10532__auto__){
return sb__10531__auto__.append(x__10532__auto__);
});})(_STAR_print_newline_STAR_19882_19956,_STAR_print_fn_STAR_19883_19957,sb__10531__auto__))
;

try{var seq__19884_19958 = cljs.core.seq(new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814).cljs$core$IFn$_invoke$arity$1(ed));
var chunk__19885_19959 = null;
var count__19886_19960 = (0);
var i__19887_19961 = (0);
while(true){
if((i__19887_19961 < count__19886_19960)){
var map__19888_19962 = chunk__19885_19959.cljs$core$IIndexed$_nth$arity$2(null,i__19887_19961);
var map__19888_19963__$1 = ((((!((map__19888_19962 == null)))?((((map__19888_19962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19888_19962.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19888_19962):map__19888_19962);
var prob_19964 = map__19888_19963__$1;
var path_19965 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19888_19963__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var pred_19966 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19888_19963__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_19967 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19888_19963__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_19968 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19888_19963__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_19969 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19888_19963__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_19970 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19888_19963__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_(in_19970)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["In:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([in_19970], 0)),""], 0));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["val: "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([val_19967], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" fails"], 0));

if(cljs.core.empty_QMARK_(via_19969)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" spec:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.last(via_19969)], 0))], 0));
}

if(cljs.core.empty_QMARK_(path_19965)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" at:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path_19965], 0))], 0));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" predicate: "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.spec.alpha.abbrev(pred_19966)], 0));

if(cljs.core.truth_(reason_19968)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([", ",reason_19968], 0));
} else {
}

var seq__19893_19971 = cljs.core.seq(prob_19964);
var chunk__19894_19972 = null;
var count__19895_19973 = (0);
var i__19896_19974 = (0);
while(true){
if((i__19896_19974 < count__19895_19973)){
var vec__19897_19975 = chunk__19894_19972.cljs$core$IIndexed$_nth$arity$2(null,i__19896_19974);
var k_19976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19897_19975,(0),null);
var v_19977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19897_19975,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_19976))){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k_19976], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v_19977], 0));
}

var G__19978 = seq__19893_19971;
var G__19979 = chunk__19894_19972;
var G__19980 = count__19895_19973;
var G__19981 = (i__19896_19974 + (1));
seq__19893_19971 = G__19978;
chunk__19894_19972 = G__19979;
count__19895_19973 = G__19980;
i__19896_19974 = G__19981;
continue;
} else {
var temp__6738__auto___19982 = cljs.core.seq(seq__19893_19971);
if(temp__6738__auto___19982){
var seq__19893_19983__$1 = temp__6738__auto___19982;
if(cljs.core.chunked_seq_QMARK_(seq__19893_19983__$1)){
var c__10350__auto___19984 = cljs.core.chunk_first(seq__19893_19983__$1);
var G__19985 = cljs.core.chunk_rest(seq__19893_19983__$1);
var G__19986 = c__10350__auto___19984;
var G__19987 = cljs.core.count(c__10350__auto___19984);
var G__19988 = (0);
seq__19893_19971 = G__19985;
chunk__19894_19972 = G__19986;
count__19895_19973 = G__19987;
i__19896_19974 = G__19988;
continue;
} else {
var vec__19900_19989 = cljs.core.first(seq__19893_19983__$1);
var k_19990 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19900_19989,(0),null);
var v_19991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19900_19989,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_19990))){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k_19990], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v_19991], 0));
}

var G__19992 = cljs.core.next(seq__19893_19983__$1);
var G__19993 = null;
var G__19994 = (0);
var G__19995 = (0);
seq__19893_19971 = G__19992;
chunk__19894_19972 = G__19993;
count__19895_19973 = G__19994;
i__19896_19974 = G__19995;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

var G__19996 = seq__19884_19958;
var G__19997 = chunk__19885_19959;
var G__19998 = count__19886_19960;
var G__19999 = (i__19887_19961 + (1));
seq__19884_19958 = G__19996;
chunk__19885_19959 = G__19997;
count__19886_19960 = G__19998;
i__19887_19961 = G__19999;
continue;
} else {
var temp__6738__auto___20000 = cljs.core.seq(seq__19884_19958);
if(temp__6738__auto___20000){
var seq__19884_20001__$1 = temp__6738__auto___20000;
if(cljs.core.chunked_seq_QMARK_(seq__19884_20001__$1)){
var c__10350__auto___20002 = cljs.core.chunk_first(seq__19884_20001__$1);
var G__20003 = cljs.core.chunk_rest(seq__19884_20001__$1);
var G__20004 = c__10350__auto___20002;
var G__20005 = cljs.core.count(c__10350__auto___20002);
var G__20006 = (0);
seq__19884_19958 = G__20003;
chunk__19885_19959 = G__20004;
count__19886_19960 = G__20005;
i__19887_19961 = G__20006;
continue;
} else {
var map__19903_20007 = cljs.core.first(seq__19884_20001__$1);
var map__19903_20008__$1 = ((((!((map__19903_20007 == null)))?((((map__19903_20007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19903_20007.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19903_20007):map__19903_20007);
var prob_20009 = map__19903_20008__$1;
var path_20010 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19903_20008__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var pred_20011 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19903_20008__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_20012 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19903_20008__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_20013 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19903_20008__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_20014 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19903_20008__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_20015 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19903_20008__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_(in_20015)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["In:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([in_20015], 0)),""], 0));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["val: "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([val_20012], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" fails"], 0));

if(cljs.core.empty_QMARK_(via_20014)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" spec:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.last(via_20014)], 0))], 0));
}

if(cljs.core.empty_QMARK_(path_20010)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" at:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path_20010], 0))], 0));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" predicate: "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.spec.alpha.abbrev(pred_20011)], 0));

if(cljs.core.truth_(reason_20013)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([", ",reason_20013], 0));
} else {
}

var seq__19915_20017 = cljs.core.seq(prob_20009);
var chunk__19916_20018 = null;
var count__19917_20019 = (0);
var i__19918_20020 = (0);
while(true){
if((i__19918_20020 < count__19917_20019)){
var vec__19928_20023 = chunk__19916_20018.cljs$core$IIndexed$_nth$arity$2(null,i__19918_20020);
var k_20024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19928_20023,(0),null);
var v_20025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19928_20023,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_20024))){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k_20024], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v_20025], 0));
}

var G__20028 = seq__19915_20017;
var G__20029 = chunk__19916_20018;
var G__20030 = count__19917_20019;
var G__20031 = (i__19918_20020 + (1));
seq__19915_20017 = G__20028;
chunk__19916_20018 = G__20029;
count__19917_20019 = G__20030;
i__19918_20020 = G__20031;
continue;
} else {
var temp__6738__auto___20034__$1 = cljs.core.seq(seq__19915_20017);
if(temp__6738__auto___20034__$1){
var seq__19915_20035__$1 = temp__6738__auto___20034__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19915_20035__$1)){
var c__10350__auto___20036 = cljs.core.chunk_first(seq__19915_20035__$1);
var G__20037 = cljs.core.chunk_rest(seq__19915_20035__$1);
var G__20038 = c__10350__auto___20036;
var G__20039 = cljs.core.count(c__10350__auto___20036);
var G__20040 = (0);
seq__19915_20017 = G__20037;
chunk__19916_20018 = G__20038;
count__19917_20019 = G__20039;
i__19918_20020 = G__20040;
continue;
} else {
var vec__19932_20041 = cljs.core.first(seq__19915_20035__$1);
var k_20042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19932_20041,(0),null);
var v_20043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19932_20041,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_20042))){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k_20042], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v_20043], 0));
}

var G__20052 = cljs.core.next(seq__19915_20035__$1);
var G__20053 = null;
var G__20054 = (0);
var G__20055 = (0);
seq__19915_20017 = G__20052;
chunk__19916_20018 = G__20053;
count__19917_20019 = G__20054;
i__19918_20020 = G__20055;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

var G__20056 = cljs.core.next(seq__19884_20001__$1);
var G__20057 = null;
var G__20058 = (0);
var G__20059 = (0);
seq__19884_19958 = G__20056;
chunk__19885_19959 = G__20057;
count__19886_19960 = G__20058;
i__19887_19961 = G__20059;
continue;
}
} else {
}
}
break;
}

var seq__19942_20060 = cljs.core.seq(ed);
var chunk__19943_20061 = null;
var count__19944_20062 = (0);
var i__19945_20063 = (0);
while(true){
if((i__19945_20063 < count__19944_20062)){
var vec__19946_20064 = chunk__19943_20061.cljs$core$IIndexed$_nth$arity$2(null,i__19945_20063);
var k_20065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19946_20064,(0),null);
var v_20066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19946_20064,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),null], null), null).call(null,k_20065))){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k_20065], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v_20066], 0));

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}

var G__20067 = seq__19942_20060;
var G__20068 = chunk__19943_20061;
var G__20069 = count__19944_20062;
var G__20070 = (i__19945_20063 + (1));
seq__19942_20060 = G__20067;
chunk__19943_20061 = G__20068;
count__19944_20062 = G__20069;
i__19945_20063 = G__20070;
continue;
} else {
var temp__6738__auto___20071 = cljs.core.seq(seq__19942_20060);
if(temp__6738__auto___20071){
var seq__19942_20072__$1 = temp__6738__auto___20071;
if(cljs.core.chunked_seq_QMARK_(seq__19942_20072__$1)){
var c__10350__auto___20073 = cljs.core.chunk_first(seq__19942_20072__$1);
var G__20074 = cljs.core.chunk_rest(seq__19942_20072__$1);
var G__20075 = c__10350__auto___20073;
var G__20076 = cljs.core.count(c__10350__auto___20073);
var G__20077 = (0);
seq__19942_20060 = G__20074;
chunk__19943_20061 = G__20075;
count__19944_20062 = G__20076;
i__19945_20063 = G__20077;
continue;
} else {
var vec__19953_20078 = cljs.core.first(seq__19942_20072__$1);
var k_20079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19953_20078,(0),null);
var v_20080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19953_20078,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),null], null), null).call(null,k_20079))){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k_20079], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v_20080], 0));

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}

var G__20083 = cljs.core.next(seq__19942_20072__$1);
var G__20084 = null;
var G__20085 = (0);
var G__20086 = (0);
seq__19942_20060 = G__20083;
chunk__19943_20061 = G__20084;
count__19944_20062 = G__20085;
i__19945_20063 = G__20086;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_19883_19957;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_19882_19956;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__10531__auto__)].join('');
})()], 0));
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Success!"], 0));
}
});
cljs.spec.alpha._STAR_explain_out_STAR_ = cljs.spec.alpha.explain_printer;
/**
 * Prints explanation data (per 'explain-data') to *out* using the printer in *explain-out*,
 *  by default explain-printer.
 */
cljs.spec.alpha.explain_out = (function cljs$spec$alpha$explain_out(ed){
return (cljs.spec.alpha._STAR_explain_out_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha._STAR_explain_out_STAR_.cljs$core$IFn$_invoke$arity$1(ed) : cljs.spec.alpha._STAR_explain_out_STAR_.call(null,ed));
});
/**
 * Given a spec and a value that fails to conform, prints an explanation to *out*.
 */
cljs.spec.alpha.explain = (function cljs$spec$alpha$explain(spec,x){
return cljs.spec.alpha.explain_out(cljs.spec.alpha.explain_data(spec,x));
});
/**
 * Given a spec and a value that fails to conform, returns an explanation as a string.
 */
cljs.spec.alpha.explain_str = (function cljs$spec$alpha$explain_str(spec,x){
var sb__10531__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_20089_20094 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_20090_20095 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_20089_20094,_STAR_print_fn_STAR_20090_20095,sb__10531__auto__){
return (function (x__10532__auto__){
return sb__10531__auto__.append(x__10532__auto__);
});})(_STAR_print_newline_STAR_20089_20094,_STAR_print_fn_STAR_20090_20095,sb__10531__auto__))
;

try{cljs.spec.alpha.explain(spec,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_20090_20095;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_20089_20094;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__10531__auto__)].join('');
});
cljs.spec.alpha.gensub = (function cljs$spec$alpha$gensub(spec,overrides,path,rmap,form){
var spec__$1 = cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec);
var temp__6736__auto__ = (function (){var or__9439__auto__ = (function (){var temp__6738__auto__ = (function (){var or__9439__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(overrides,(function (){var or__9439__auto__ = cljs.spec.alpha.spec_name(spec__$1);
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return spec__$1;
}
})());
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(overrides,path);
}
})();
if(cljs.core.truth_(temp__6738__auto__)){
var gfn = temp__6738__auto__;
return (gfn.cljs$core$IFn$_invoke$arity$0 ? gfn.cljs$core$IFn$_invoke$arity$0() : gfn.call(null));
} else {
return null;
}
})();
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return cljs.spec.alpha.gen_STAR_(spec__$1,overrides,path,rmap);
}
})();
if(cljs.core.truth_(temp__6736__auto__)){
var g = temp__6736__auto__;
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (g,temp__6736__auto__,spec__$1){
return (function (p1__20102_SHARP_){
return (cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec__$1,p1__20102_SHARP_) : cljs.spec.alpha.valid_QMARK_.call(null,spec__$1,p1__20102_SHARP_));
});})(g,temp__6736__auto__,spec__$1))
,g,(100)], 0));
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to construct gen at: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" for: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.abbrev(form))].join('')));
}
});
/**
 * Given a spec, returns the generator for it, or throws if none can
 *   be constructed. Optionally an overrides map can be provided which
 *   should map spec names or paths (vectors of keywords) to no-arg
 *   generator-creating fns. These will be used instead of the generators at those
 *   names/paths. Note that parent generator (in the spec or overrides
 *   map) will supersede those of any subtrees. A generator for a regex
 *   op must always return a sequential collection (i.e. a generator for
 *   s/? should return either an empty sequence/vector or a
 *   sequence/vector with one item in it)
 */
cljs.spec.alpha.gen = (function cljs$spec$alpha$gen(var_args){
var args20112 = [];
var len__10660__auto___20119 = arguments.length;
var i__10661__auto___20120 = (0);
while(true){
if((i__10661__auto___20120 < len__10660__auto___20119)){
args20112.push((arguments[i__10661__auto___20120]));

var G__20122 = (i__10661__auto___20120 + (1));
i__10661__auto___20120 = G__20122;
continue;
} else {
}
break;
}

var G__20114 = args20112.length;
switch (G__20114) {
case 1:
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20112.length)].join('')));

}
});

cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2(spec,null);
});

cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2 = (function (spec,overrides){
return cljs.spec.alpha.gensub(spec,overrides,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","recursion-limit","cljs.spec.alpha/recursion-limit",601284994),cljs.spec.alpha._STAR_recursion_limit_STAR_], null),spec);
});

cljs.spec.alpha.gen.cljs$lang$maxFixedArity = 2;

/**
 * Do not call this directly, use 'def'
 */
cljs.spec.alpha.def_impl = (function cljs$spec$alpha$def_impl(k,form,spec){
if(cljs.core.truth_((function (){var and__9427__auto__ = cljs.core.ident_QMARK_(k);
if(and__9427__auto__){
return cljs.core.namespace(k);
} else {
return and__9427__auto__;
}
})())){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("k must be namespaced keyword or resolveable symbol"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(c/and (ident? k) (namespace k))")].join('')));
}

var spec__$1 = (cljs.core.truth_((function (){var or__9439__auto__ = cljs.spec.alpha.spec_QMARK_(spec);
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
var or__9439__auto____$1 = cljs.spec.alpha.regex_QMARK_(spec);
if(cljs.core.truth_(or__9439__auto____$1)){
return or__9439__auto____$1;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.registry_ref) : cljs.core.deref.call(null,cljs.spec.alpha.registry_ref)),spec);
}
}
})())?spec:(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4 ? cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(form,spec,null,null) : cljs.spec.alpha.spec_impl.call(null,form,spec,null,null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.spec.alpha.registry_ref,cljs.core.assoc,k,cljs.spec.alpha.with_name(spec__$1,k));

return k;
});
/**
 * returns the registry map, prefer 'get-spec' to lookup a spec by name
 */
cljs.spec.alpha.registry = (function cljs$spec$alpha$registry(){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.registry_ref) : cljs.core.deref.call(null,cljs.spec.alpha.registry_ref));
});
/**
 * Returns a symbol from a symbol or var
 */
cljs.spec.alpha.__GT_sym = (function cljs$spec$alpha$__GT_sym(x){
if(cljs.core.var_QMARK_(x)){
return x.sym;
} else {
return x;
}
});
/**
 * Returns spec registered for keyword/symbol/var k, or nil.
 */
cljs.spec.alpha.get_spec = (function cljs$spec$alpha$get_spec(k){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.registry(),(((k instanceof cljs.core.Keyword))?k:cljs.spec.alpha.__GT_sym(k)));
});
cljs.spec.alpha.macroexpand_check = (function cljs$spec$alpha$macroexpand_check(v,args){
var specs = cljs.spec.alpha.get_spec(v);
var temp__6738__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(temp__6738__auto__)){
var arg_spec = temp__6738__auto__;
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.conform(arg_spec,args)))){
var ed = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.explain_data_STAR_(arg_spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576)], null),(function (){var temp__6736__auto__ = cljs.spec.alpha.spec_name(arg_spec);
if(cljs.core.truth_(temp__6736__auto__)){
var name = temp__6736__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,args),new cljs.core.Keyword("cljs.spec.alpha","args","cljs.spec.alpha/args",1870769783),args);
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Call to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.__GT_sym(v)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" did not conform to spec:\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__10531__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_20147_20149 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_20148_20150 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_20147_20149,_STAR_print_fn_STAR_20148_20150,sb__10531__auto__,ed,arg_spec,temp__6738__auto__,specs){
return (function (x__10532__auto__){
return sb__10531__auto__.append(x__10532__auto__);
});})(_STAR_print_newline_STAR_20147_20149,_STAR_print_fn_STAR_20148_20150,sb__10531__auto__,ed,arg_spec,temp__6738__auto__,specs))
;

try{cljs.spec.alpha.explain_out(ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_20148_20150;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_20147_20149;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__10531__auto__)].join('');
})())].join('')));
} else {
return null;
}
} else {
return null;
}
});
cljs.spec.alpha.recur_limit_QMARK_ = (function cljs$spec$alpha$recur_limit_QMARK_(rmap,id,path,k){
return ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(rmap,id) > new cljs.core.Keyword("cljs.spec.alpha","recursion-limit","cljs.spec.alpha/recursion-limit",601284994).cljs$core$IFn$_invoke$arity$1(rmap))) && (cljs.core.contains_QMARK_(cljs.core.set(path),k));
});
cljs.spec.alpha.inck = (function cljs$spec$alpha$inck(m,k){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,((function (){var or__9439__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return (0);
}
})() + (1)));
});
cljs.spec.alpha.dt = (function cljs$spec$alpha$dt(var_args){
var args20161 = [];
var len__10660__auto___20164 = arguments.length;
var i__10661__auto___20165 = (0);
while(true){
if((i__10661__auto___20165 < len__10660__auto___20164)){
args20161.push((arguments[i__10661__auto___20165]));

var G__20166 = (i__10661__auto___20165 + (1));
i__10661__auto___20165 = G__20166;
continue;
} else {
}
break;
}

var G__20163 = args20161.length;
switch (G__20163) {
case 3:
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20161.length)].join('')));

}
});

cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$4(pred,x,form,null);
});

cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$4 = (function (pred,x,form,cpred_QMARK_){
if(cljs.core.truth_(pred)){
var temp__6736__auto__ = cljs.spec.alpha.the_spec(pred);
if(cljs.core.truth_(temp__6736__auto__)){
var spec = temp__6736__auto__;
return cljs.spec.alpha.conform(spec,x);
} else {
if(cljs.core.ifn_QMARK_(pred)){
if(cljs.core.truth_(cpred_QMARK_)){
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x));
} else {
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return x;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is not a fn, expected predicate fn")].join('')));
}
}
} else {
return x;
}
});

cljs.spec.alpha.dt.cljs$lang$maxFixedArity = 4;

/**
 * Helper function that returns true when x is valid for spec.
 */
cljs.spec.alpha.valid_QMARK_ = (function cljs$spec$alpha$valid_QMARK_(var_args){
var args20176 = [];
var len__10660__auto___20185 = arguments.length;
var i__10661__auto___20186 = (0);
while(true){
if((i__10661__auto___20186 < len__10660__auto___20185)){
args20176.push((arguments[i__10661__auto___20186]));

var G__20187 = (i__10661__auto___20186 + (1));
i__10661__auto___20186 = G__20187;
continue;
} else {
}
break;
}

var G__20184 = args20176.length;
switch (G__20184) {
case 2:
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20176.length)].join('')));

}
});

cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (spec,x){
var spec__$1 = cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec);
return cljs.core.not(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.conform_STAR_(spec__$1,x)));
});

cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (spec,x,form){
var spec__$1 = cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$2(spec,form);
return cljs.core.not(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.conform_STAR_(spec__$1,x)));
});

cljs.spec.alpha.valid_QMARK_.cljs$lang$maxFixedArity = 3;

/**
 * internal helper function that returns true when x is valid for spec.
 */
cljs.spec.alpha.pvalid_QMARK_ = (function cljs$spec$alpha$pvalid_QMARK_(var_args){
var args20189 = [];
var len__10660__auto___20192 = arguments.length;
var i__10661__auto___20193 = (0);
while(true){
if((i__10661__auto___20193 < len__10660__auto___20192)){
args20189.push((arguments[i__10661__auto___20193]));

var G__20194 = (i__10661__auto___20193 + (1));
i__10661__auto___20193 = G__20194;
continue;
} else {
}
break;
}

var G__20191 = args20189.length;
switch (G__20191) {
case 2:
return cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20189.length)].join('')));

}
});

cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
return cljs.core.not(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(pred,x,new cljs.core.Keyword("cljs.spec.alpha","unknown","cljs.spec.alpha/unknown",651034818))));
});

cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.core.not(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(pred,x,form)));
});

cljs.spec.alpha.pvalid_QMARK_.cljs$lang$maxFixedArity = 3;

cljs.spec.alpha.explain_1 = (function cljs$spec$alpha$explain_1(form,pred,path,via,in$,v){
var pred__$1 = cljs.spec.alpha.maybe_spec(pred);
if(cljs.core.truth_(cljs.spec.alpha.spec_QMARK_(pred__$1))){
return cljs.spec.alpha.explain_STAR_(pred__$1,path,(function (){var temp__6736__auto__ = cljs.spec.alpha.spec_name(pred__$1);
if(cljs.core.truth_(temp__6736__auto__)){
var name = temp__6736__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,name);
} else {
return via;
}
})(),in$,v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.alpha.abbrev(form),new cljs.core.Keyword(null,"val","val",128701612),v,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});
/**
 * Do not call this directly, use 'spec' with a map argument
 */
cljs.spec.alpha.map_spec_impl = (function cljs$spec$alpha$map_spec_impl(p__20208){
var map__20250 = p__20208;
var map__20250__$1 = ((((!((map__20250 == null)))?((((map__20250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20250.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20250):map__20250);
var argm = map__20250__$1;
var opt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20250__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var req_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20250__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008));
var opt_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20250__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496));
var gfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20250__$1,new cljs.core.Keyword(null,"gfn","gfn",791517474));
var pred_exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20250__$1,new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395));
var keys_pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20250__$1,new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739));
var opt_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20250__$1,new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261));
var req_specs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20250__$1,new cljs.core.Keyword(null,"req-specs","req-specs",553962313));
var req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20250__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var req_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20250__$1,new cljs.core.Keyword(null,"req-keys","req-keys",514319221));
var opt_specs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20250__$1,new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450));
var pred_forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20250__$1,new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832));
var k__GT_s = cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_keys,opt_keys),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_specs,opt_specs));
var keys__GT_specnames = ((function (k__GT_s,map__20250,map__20250__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__20204_SHARP_){
var or__9439__auto__ = (k__GT_s.cljs$core$IFn$_invoke$arity$1 ? k__GT_s.cljs$core$IFn$_invoke$arity$1(p1__20204_SHARP_) : k__GT_s.call(null,p1__20204_SHARP_));
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return p1__20204_SHARP_;
}
});})(k__GT_s,map__20250,map__20250__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var id = cljs.core.random_uuid();
if(typeof cljs.spec.alpha.t_cljs$spec$alpha20262 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha20262 = (function (keys__GT_specnames,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,map__20250,opt_keys,req_specs,req,p__20208,id,req_keys,opt_specs,k__GT_s,pred_forms,meta20263){
this.keys__GT_specnames = keys__GT_specnames;
this.opt = opt;
this.req_un = req_un;
this.opt_un = opt_un;
this.gfn = gfn;
this.pred_exprs = pred_exprs;
this.keys_pred = keys_pred;
this.argm = argm;
this.map__20250 = map__20250;
this.opt_keys = opt_keys;
this.req_specs = req_specs;
this.req = req;
this.p__20208 = p__20208;
this.id = id;
this.req_keys = req_keys;
this.opt_specs = opt_specs;
this.k__GT_s = k__GT_s;
this.pred_forms = pred_forms;
this.meta20263 = meta20263;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.alpha.t_cljs$spec$alpha20262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__20250,map__20250__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_20264,meta20263__$1){
var self__ = this;
var _20264__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha20262(self__.keys__GT_specnames,self__.opt,self__.req_un,self__.opt_un,self__.gfn,self__.pred_exprs,self__.keys_pred,self__.argm,self__.map__20250,self__.opt_keys,self__.req_specs,self__.req,self__.p__20208,self__.id,self__.req_keys,self__.opt_specs,self__.k__GT_s,self__.pred_forms,meta20263__$1));
});})(k__GT_s,keys__GT_specnames,id,map__20250,map__20250__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha20262.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__20250,map__20250__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_20264){
var self__ = this;
var _20264__$1 = this;
return self__.meta20263;
});})(k__GT_s,keys__GT_specnames,id,map__20250,map__20250__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha20262.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha20262.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__20250,map__20250__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(k__GT_s,keys__GT_specnames,id,map__20250,map__20250__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha20262.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__20250,map__20250__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(k__GT_s,keys__GT_specnames,id,map__20250,map__20250__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha20262.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha20262.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__20250,map__20250__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.keys_pred.cljs$core$IFn$_invoke$arity$1 ? self__.keys_pred.cljs$core$IFn$_invoke$arity$1(m) : self__.keys_pred.call(null,m)))){
var reg = cljs.spec.alpha.registry();
var ret = m;
var G__20271 = m;
var vec__20272 = G__20271;
var seq__20273 = cljs.core.seq(vec__20272);
var first__20274 = cljs.core.first(seq__20273);
var seq__20273__$1 = cljs.core.next(seq__20273);
var vec__20275 = first__20274;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20275,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20275,(1),null);
var ks = seq__20273__$1;
var keys = vec__20272;
var ret__$1 = ret;
var G__20271__$1 = G__20271;
while(true){
var ret__$2 = ret__$1;
var vec__20278 = G__20271__$1;
var seq__20279 = cljs.core.seq(vec__20278);
var first__20280 = cljs.core.first(seq__20279);
var seq__20279__$1 = cljs.core.next(seq__20279);
var vec__20281 = first__20280;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20281,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20281,(1),null);
var ks__$1 = seq__20279__$1;
var keys__$1 = vec__20278;
if(cljs.core.truth_(keys__$1)){
var sname = (self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k__$1) : self__.keys__GT_specnames.call(null,k__$1));
var temp__6736__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reg,sname);
if(cljs.core.truth_(temp__6736__auto__)){
var s = temp__6736__auto__;
var cv = cljs.spec.alpha.conform(s,v__$1);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(cv))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var G__20329 = (((cv === v__$1))?ret__$2:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,k__$1,cv));
var G__20330 = ks__$1;
ret__$1 = G__20329;
G__20271__$1 = G__20330;
continue;
}
} else {
var G__20331 = ret__$2;
var G__20332 = ks__$1;
ret__$1 = G__20331;
G__20271__$1 = G__20332;
continue;
}
} else {
return ret__$2;
}
break;
}
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
});})(k__GT_s,keys__GT_specnames,id,map__20250,map__20250__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha20262.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__20250,map__20250__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
var reg = cljs.spec.alpha.registry();
var ret = m;
var G__20288 = cljs.core.keys(m);
var vec__20289 = G__20288;
var seq__20290 = cljs.core.seq(vec__20289);
var first__20291 = cljs.core.first(seq__20290);
var seq__20290__$1 = cljs.core.next(seq__20290);
var k = first__20291;
var ks = seq__20290__$1;
var keys = vec__20289;
var ret__$1 = ret;
var G__20288__$1 = G__20288;
while(true){
var ret__$2 = ret__$1;
var vec__20292 = G__20288__$1;
var seq__20293 = cljs.core.seq(vec__20292);
var first__20294 = cljs.core.first(seq__20293);
var seq__20293__$1 = cljs.core.next(seq__20293);
var k__$1 = first__20294;
var ks__$1 = seq__20293__$1;
var keys__$1 = vec__20292;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_(reg,(self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k__$1) : self__.keys__GT_specnames.call(null,k__$1)))){
var cv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k__$1);
var v = cljs.spec.alpha.unform((self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k__$1) : self__.keys__GT_specnames.call(null,k__$1)),cv);
var G__20349 = (((cv === v))?ret__$2:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,k__$1,v));
var G__20350 = ks__$1;
ret__$1 = G__20349;
G__20288__$1 = G__20350;
continue;
} else {
var G__20351 = ret__$2;
var G__20352 = ks__$1;
ret__$1 = G__20351;
G__20288__$1 = G__20352;
continue;
}
} else {
return ret__$2;
}
break;
}
});})(k__GT_s,keys__GT_specnames,id,map__20250,map__20250__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha20262.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (k__GT_s,keys__GT_specnames,id,map__20250,map__20250__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.map_QMARK_(x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
var reg = cljs.spec.alpha.registry();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.concat,(function (){var temp__6738__auto__ = cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (reg,___$1,k__GT_s,keys__GT_specnames,id,map__20250,map__20250__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (pred,form){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return null;
} else {
return cljs.spec.alpha.abbrev(form);
}
});})(reg,___$1,k__GT_s,keys__GT_specnames,id,map__20250,map__20250__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,self__.pred_exprs,self__.pred_forms)));
if(temp__6738__auto__){
var probs = temp__6738__auto__;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (probs,temp__6738__auto__,reg,___$1,k__GT_s,keys__GT_specnames,id,map__20250,map__20250__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__20206_SHARP_){
return cljs.core.identity(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),p1__20206_SHARP_,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null));
});})(probs,temp__6738__auto__,reg,___$1,k__GT_s,keys__GT_specnames,id,map__20250,map__20250__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,probs);
} else {
return null;
}
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (reg,___$1,k__GT_s,keys__GT_specnames,id,map__20250,map__20250__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p__20298){
var vec__20299 = p__20298;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20299,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20299,(1),null);
if(cljs.core.truth_((function (){var or__9439__auto__ = !(cljs.core.contains_QMARK_(reg,(self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specnames.call(null,k))));
if(or__9439__auto__){
return or__9439__auto__;
} else {
return cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3((self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specnames.call(null,k)),v,k);
}
})())){
return null;
} else {
return cljs.spec.alpha.explain_1((self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specnames.call(null,k)),(self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specnames.call(null,k)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,k),v);
}
});})(reg,___$1,k__GT_s,keys__GT_specnames,id,map__20250,map__20250__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,cljs.core.seq(x)));
}
});})(k__GT_s,keys__GT_specnames,id,map__20250,map__20250__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha20262.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (k__GT_s,keys__GT_specnames,id,map__20250,map__20250__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var rmap__$1 = cljs.spec.alpha.inck(rmap,self__.id);
var gen = ((function (rmap__$1,___$1,k__GT_s,keys__GT_specnames,id,map__20250,map__20250__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
return cljs.spec.alpha.gensub(s,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,k);
});})(rmap__$1,___$1,k__GT_s,keys__GT_specnames,id,map__20250,map__20250__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var ogen = ((function (rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__20250,map__20250__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
if(cljs.core.truth_(cljs.spec.alpha.recur_limit_QMARK_(rmap__$1,self__.id,path,k))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay(((function (rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__20250,map__20250__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return cljs.spec.alpha.gensub(s,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,k);
});})(rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__20250,map__20250__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,null)))], null);
}
});})(rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__20250,map__20250__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var req_gens = cljs.core.map.cljs$core$IFn$_invoke$arity$3(gen,self__.req_keys,self__.req_specs);
var opt_gens = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(ogen,self__.opt_keys,self__.opt_specs));
if(cljs.core.every_QMARK_(cljs.core.identity,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_gens,opt_gens))){
var reqs = cljs.core.zipmap(self__.req_keys,req_gens);
var opts = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,opt_gens);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(0),cljs.core.count(opts)], 0)),((function (reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,k__GT_s,keys__GT_specnames,id,map__20250,map__20250__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__20207_SHARP_){
var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(reqs),((cljs.core.seq(opts))?cljs.core.shuffle(cljs.core.seq(opts)):null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.hash_map,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.take.cljs$core$IFn$_invoke$arity$2((p1__20207_SHARP_ + cljs.core.count(reqs)),args)));
});})(reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,k__GT_s,keys__GT_specnames,id,map__20250,map__20250__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
], 0));
} else {
return null;
}
}
});})(k__GT_s,keys__GT_specnames,id,map__20250,map__20250__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha20262.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__20250,map__20250__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
var G__20309 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.argm,new cljs.core.Keyword(null,"gfn","gfn",791517474),gfn__$1);
return (cljs.spec.alpha.map_spec_impl.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.map_spec_impl.cljs$core$IFn$_invoke$arity$1(G__20309) : cljs.spec.alpha.map_spec_impl.call(null,G__20309));
});})(k__GT_s,keys__GT_specnames,id,map__20250,map__20250__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha20262.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__20250,map__20250__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),(function (){var G__20310 = cljs.core.PersistentVector.EMPTY;
var G__20310__$1 = (cljs.core.truth_(self__.req)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__20310,new cljs.core.Keyword(null,"req","req",-326448303),cljs.core.array_seq([self__.req], 0)):G__20310);
var G__20310__$2 = (cljs.core.truth_(self__.opt)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__20310__$1,new cljs.core.Keyword(null,"opt","opt",-794706369),cljs.core.array_seq([self__.opt], 0)):G__20310__$1);
var G__20310__$3 = (cljs.core.truth_(self__.req_un)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__20310__$2,new cljs.core.Keyword(null,"req-un","req-un",1074571008),cljs.core.array_seq([self__.req_un], 0)):G__20310__$2);
if(cljs.core.truth_(self__.opt_un)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__20310__$3,new cljs.core.Keyword(null,"opt-un","opt-un",883442496),cljs.core.array_seq([self__.opt_un], 0));
} else {
return G__20310__$3;
}
})());
});})(k__GT_s,keys__GT_specnames,id,map__20250,map__20250__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha20262.getBasis = ((function (k__GT_s,keys__GT_specnames,id,map__20250,map__20250__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys->specnames","keys->specnames",1791294693,null),new cljs.core.Symbol(null,"opt","opt",845825158,null),new cljs.core.Symbol(null,"req-un","req-un",-1579864761,null),new cljs.core.Symbol(null,"opt-un","opt-un",-1770993273,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"pred-exprs","pred-exprs",-862164374,null),new cljs.core.Symbol(null,"keys-pred","keys-pred",-1795451030,null),new cljs.core.Symbol(null,"argm","argm",-181546357,null),new cljs.core.Symbol(null,"map__20250","map__20250",1351302859,null),new cljs.core.Symbol(null,"opt-keys","opt-keys",-1391747508,null),new cljs.core.Symbol(null,"req-specs","req-specs",-2100473456,null),new cljs.core.Symbol(null,"req","req",1314083224,null),new cljs.core.Symbol(null,"p__20208","p__20208",-1664598407,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"req-keys","req-keys",-2140116548,null),new cljs.core.Symbol(null,"opt-specs","opt-specs",1255626077,null),new cljs.core.Symbol(null,"k->s","k->s",-1685112801,null),new cljs.core.Symbol(null,"pred-forms","pred-forms",1813143359,null),new cljs.core.Symbol(null,"meta20263","meta20263",-1401045598,null)], null);
});})(k__GT_s,keys__GT_specnames,id,map__20250,map__20250__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha20262.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha20262.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha20262";

cljs.spec.alpha.t_cljs$spec$alpha20262.cljs$lang$ctorPrWriter = ((function (k__GT_s,keys__GT_specnames,id,map__20250,map__20250__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (this__10096__auto__,writer__10097__auto__,opt__10098__auto__){
return cljs.core._write(writer__10097__auto__,"cljs.spec.alpha/t_cljs$spec$alpha20262");
});})(k__GT_s,keys__GT_specnames,id,map__20250,map__20250__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha20262 = ((function (k__GT_s,keys__GT_specnames,id,map__20250,map__20250__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function cljs$spec$alpha$map_spec_impl_$___GT_t_cljs$spec$alpha20262(keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,map__20250__$2,opt_keys__$1,req_specs__$1,req__$1,p__20208__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta20263){
return (new cljs.spec.alpha.t_cljs$spec$alpha20262(keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,map__20250__$2,opt_keys__$1,req_specs__$1,req__$1,p__20208__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta20263));
});})(k__GT_s,keys__GT_specnames,id,map__20250,map__20250__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha20262(keys__GT_specnames,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,map__20250__$1,opt_keys,req_specs,req,p__20208,id,req_keys,opt_specs,k__GT_s,pred_forms,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'spec'
 */
cljs.spec.alpha.spec_impl = (function cljs$spec$alpha$spec_impl(var_args){
var args20463 = [];
var len__10660__auto___20479 = arguments.length;
var i__10661__auto___20480 = (0);
while(true){
if((i__10661__auto___20480 < len__10660__auto___20479)){
args20463.push((arguments[i__10661__auto___20480]));

var G__20481 = (i__10661__auto___20480 + (1));
i__10661__auto___20480 = G__20481;
continue;
} else {
}
break;
}

var G__20471 = args20463.length;
switch (G__20471) {
case 4:
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20463.length)].join('')));

}
});

cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,gfn,cpred_QMARK_){
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5(form,pred,gfn,cpred_QMARK_,null);
});

cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5 = (function (form,pred,gfn,cpred_QMARK_,unc){
if(cljs.core.truth_(cljs.spec.alpha.spec_QMARK_(pred))){
var G__20472 = pred;
if(cljs.core.truth_(gfn)){
return cljs.spec.alpha.with_gen(G__20472,gfn);
} else {
return G__20472;
}
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(pred))){
return (cljs.spec.alpha.regex_spec_impl.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.regex_spec_impl.cljs$core$IFn$_invoke$arity$2(pred,gfn) : cljs.spec.alpha.regex_spec_impl.call(null,pred,gfn));
} else {
if(cljs.core.ident_QMARK_(pred)){
var G__20473 = cljs.spec.alpha.the_spec(pred);
if(cljs.core.truth_(gfn)){
return cljs.spec.alpha.with_gen(G__20473,gfn);
} else {
return G__20473;
}
} else {
if(typeof cljs.spec.alpha.t_cljs$spec$alpha20476 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha20476 = (function (form,pred,gfn,cpred_QMARK_,unc,meta20477){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.cpred_QMARK_ = cpred_QMARK_;
this.unc = unc;
this.meta20477 = meta20477;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.alpha.t_cljs$spec$alpha20476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20478,meta20477__$1){
var self__ = this;
var _20478__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha20476(self__.form,self__.pred,self__.gfn,self__.cpred_QMARK_,self__.unc,meta20477__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha20476.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20478){
var self__ = this;
var _20478__$1 = this;
return self__.meta20477;
});

cljs.spec.alpha.t_cljs$spec$alpha20476.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha20476.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha20476.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha20476.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha20476.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ret = (self__.pred.cljs$core$IFn$_invoke$arity$1 ? self__.pred.cljs$core$IFn$_invoke$arity$1(x) : self__.pred.call(null,x));
if(cljs.core.truth_(self__.cpred_QMARK_)){
return ret;
} else {
if(cljs.core.truth_(ret)){
return x;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}
});

cljs.spec.alpha.t_cljs$spec$alpha20476.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.cpred_QMARK_)){
if(cljs.core.truth_(self__.unc)){
return (self__.unc.cljs$core$IFn$_invoke$arity$1 ? self__.unc.cljs$core$IFn$_invoke$arity$1(x) : self__.unc.call(null,x));
} else {
throw (new Error("no unform fn for conformer"));
}
} else {
return x;
}
});

cljs.spec.alpha.t_cljs$spec$alpha20476.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$4(self__.pred,x,self__.form,self__.cpred_QMARK_)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.alpha.abbrev(self__.form),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return null;
}
});

cljs.spec.alpha.t_cljs$spec$alpha20476.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.gen.alpha.gen_for_pred(self__.pred);
}
});

cljs.spec.alpha.t_cljs$spec$alpha20476.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5(self__.form,self__.pred,gfn__$1,self__.cpred_QMARK_,self__.unc);
});

cljs.spec.alpha.t_cljs$spec$alpha20476.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.form;
});

cljs.spec.alpha.t_cljs$spec$alpha20476.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"cpred?","cpred?",35589515,null),new cljs.core.Symbol(null,"unc","unc",-465250751,null),new cljs.core.Symbol(null,"meta20477","meta20477",334941965,null)], null);
});

cljs.spec.alpha.t_cljs$spec$alpha20476.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha20476.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha20476";

cljs.spec.alpha.t_cljs$spec$alpha20476.cljs$lang$ctorPrWriter = (function (this__10096__auto__,writer__10097__auto__,opt__10098__auto__){
return cljs.core._write(writer__10097__auto__,"cljs.spec.alpha/t_cljs$spec$alpha20476");
});

cljs.spec.alpha.__GT_t_cljs$spec$alpha20476 = (function cljs$spec$alpha$__GT_t_cljs$spec$alpha20476(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta20477){
return (new cljs.spec.alpha.t_cljs$spec$alpha20476(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta20477));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha20476(form,pred,gfn,cpred_QMARK_,unc,cljs.core.PersistentArrayMap.EMPTY));

}
}
}
});

cljs.spec.alpha.spec_impl.cljs$lang$maxFixedArity = 5;

/**
 * Do not call this directly, use 'multi-spec'
 */
cljs.spec.alpha.multi_spec_impl = (function cljs$spec$alpha$multi_spec_impl(var_args){
var args20496 = [];
var len__10660__auto___20531 = arguments.length;
var i__10661__auto___20532 = (0);
while(true){
if((i__10661__auto___20532 < len__10660__auto___20531)){
args20496.push((arguments[i__10661__auto___20532]));

var G__20533 = (i__10661__auto___20532 + (1));
i__10661__auto___20532 = G__20533;
continue;
} else {
}
break;
}

var G__20506 = args20496.length;
switch (G__20506) {
case 3:
return cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20496.length)].join('')));

}
});

cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,mmvar,retag){
return cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$4(form,mmvar,retag,null);
});

cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,mmvar,retag,gfn){
var id = cljs.core.random_uuid();
var predx = ((function (id){
return (function (p1__20491_SHARP_){
var mm = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mmvar) : cljs.core.deref.call(null,mmvar));
var and__9427__auto__ = cljs.core._get_method(mm,cljs.core._dispatch_fn(mm).call(null,p1__20491_SHARP_));
if(cljs.core.truth_(and__9427__auto__)){
return (mm.cljs$core$IFn$_invoke$arity$1 ? mm.cljs$core$IFn$_invoke$arity$1(p1__20491_SHARP_) : mm.call(null,p1__20491_SHARP_));
} else {
return and__9427__auto__;
}
});})(id))
;
var dval = ((function (id,predx){
return (function (p1__20492_SHARP_){
return cljs.core._dispatch_fn((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mmvar) : cljs.core.deref.call(null,mmvar))).call(null,p1__20492_SHARP_);
});})(id,predx))
;
var tag = (((retag instanceof cljs.core.Keyword))?((function (id,predx,dval){
return (function (p1__20493_SHARP_,p2__20494_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__20493_SHARP_,retag,p2__20494_SHARP_);
});})(id,predx,dval))
:retag);
if(typeof cljs.spec.alpha.t_cljs$spec$alpha20515 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha20515 = (function (form,mmvar,retag,gfn,id,predx,dval,tag,meta20516){
this.form = form;
this.mmvar = mmvar;
this.retag = retag;
this.gfn = gfn;
this.id = id;
this.predx = predx;
this.dval = dval;
this.tag = tag;
this.meta20516 = meta20516;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.alpha.t_cljs$spec$alpha20515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,predx,dval,tag){
return (function (_20517,meta20516__$1){
var self__ = this;
var _20517__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha20515(self__.form,self__.mmvar,self__.retag,self__.gfn,self__.id,self__.predx,self__.dval,self__.tag,meta20516__$1));
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha20515.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,predx,dval,tag){
return (function (_20517){
var self__ = this;
var _20517__$1 = this;
return self__.meta20516;
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha20515.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha20515.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha20515.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha20515.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha20515.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__6736__auto__ = (self__.predx.cljs$core$IFn$_invoke$arity$1 ? self__.predx.cljs$core$IFn$_invoke$arity$1(x) : self__.predx.call(null,x));
if(cljs.core.truth_(temp__6736__auto__)){
var pred = temp__6736__auto__;
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(pred,x,self__.form);
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha20515.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__6736__auto__ = (self__.predx.cljs$core$IFn$_invoke$arity$1 ? self__.predx.cljs$core$IFn$_invoke$arity$1(x) : self__.predx.call(null,x));
if(cljs.core.truth_(temp__6736__auto__)){
var pred = temp__6736__auto__;
return cljs.spec.alpha.unform(pred,x);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No method of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.form),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" for dispatch value: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.dval.cljs$core$IFn$_invoke$arity$1 ? self__.dval.cljs$core$IFn$_invoke$arity$1(x) : self__.dval.call(null,x)))].join('')));
}
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha20515.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (id,predx,dval,tag){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var dv = (self__.dval.cljs$core$IFn$_invoke$arity$1 ? self__.dval.cljs$core$IFn$_invoke$arity$1(x) : self__.dval.call(null,x));
var path__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,dv);
var temp__6736__auto__ = (self__.predx.cljs$core$IFn$_invoke$arity$1 ? self__.predx.cljs$core$IFn$_invoke$arity$1(x) : self__.predx.call(null,x));
if(cljs.core.truth_(temp__6736__auto__)){
var pred = temp__6736__auto__;
return cljs.spec.alpha.explain_1(self__.form,pred,path__$1,via,in$,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.alpha.abbrev(self__.form),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"reason","reason",-2070751759),"no method",new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha20515.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (id,predx,dval,tag){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var gen = ((function (___$1,id,predx,dval,tag){
return (function (p__20518){
var vec__20519 = p__20518;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20519,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20519,(1),null);
var p = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(null) : f.call(null,null));
var rmap__$1 = cljs.spec.alpha.inck(rmap,self__.id);
if(cljs.core.truth_(cljs.spec.alpha.recur_limit_QMARK_(rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay(((function (rmap__$1,p,vec__20519,k,f,___$1,id,predx,dval,tag){
return (function (){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (rmap__$1,p,vec__20519,k,f,___$1,id,predx,dval,tag){
return (function (p1__20495_SHARP_){
return (self__.tag.cljs$core$IFn$_invoke$arity$2 ? self__.tag.cljs$core$IFn$_invoke$arity$2(p1__20495_SHARP_,k) : self__.tag.call(null,p1__20495_SHARP_,k));
});})(rmap__$1,p,vec__20519,k,f,___$1,id,predx,dval,tag))
,cljs.spec.alpha.gensub(p,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,cljs.core._conj((function (){var x__10373__auto__ = self__.form;
return cljs.core._conj((function (){var x__10373__auto____$1 = k;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto____$1);
})(),x__10373__auto__);
})(),new cljs.core.Symbol(null,"method","method",1696235119,null)))], 0));
});})(rmap__$1,p,vec__20519,k,f,___$1,id,predx,dval,tag))
,null)));
}
});})(___$1,id,predx,dval,tag))
;
var gs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(gen,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (gen,___$1,id,predx,dval,tag){
return (function (p__20523){
var vec__20524 = p__20523;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20524,(0),null);
return cljs.spec.alpha.invalid_QMARK_(k);
});})(gen,___$1,id,predx,dval,tag))
,cljs.core.methods$((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mmvar) : cljs.core.deref.call(null,self__.mmvar))))));
if(cljs.core.every_QMARK_(cljs.core.identity,gs)){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gs], 0));
} else {
return null;
}
}
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha20515.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$4(self__.form,self__.mmvar,self__.retag,gfn__$1);
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha20515.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","multi-spec","cljs.spec.alpha/multi-spec",175821274,null)),(function (){var x__10373__auto__ = self__.form;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = self__.retag;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha20515.getBasis = ((function (id,predx,dval,tag){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"mmvar","mmvar",-1714325675,null),new cljs.core.Symbol(null,"retag","retag",528972725,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"predx","predx",2063470948,null),new cljs.core.Symbol(null,"dval","dval",835211877,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta20516","meta20516",-770947046,null)], null);
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha20515.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha20515.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha20515";

cljs.spec.alpha.t_cljs$spec$alpha20515.cljs$lang$ctorPrWriter = ((function (id,predx,dval,tag){
return (function (this__10096__auto__,writer__10097__auto__,opt__10098__auto__){
return cljs.core._write(writer__10097__auto__,"cljs.spec.alpha/t_cljs$spec$alpha20515");
});})(id,predx,dval,tag))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha20515 = ((function (id,predx,dval,tag){
return (function cljs$spec$alpha$__GT_t_cljs$spec$alpha20515(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta20516){
return (new cljs.spec.alpha.t_cljs$spec$alpha20515(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta20516));
});})(id,predx,dval,tag))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha20515(form,mmvar,retag,gfn,id,predx,dval,tag,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.alpha.multi_spec_impl.cljs$lang$maxFixedArity = 4;

/**
 * Do not call this directly, use 'tuple'
 */
cljs.spec.alpha.tuple_impl = (function cljs$spec$alpha$tuple_impl(var_args){
var args20571 = [];
var len__10660__auto___20609 = arguments.length;
var i__10661__auto___20610 = (0);
while(true){
if((i__10661__auto___20610 < len__10660__auto___20609)){
args20571.push((arguments[i__10661__auto___20610]));

var G__20616 = (i__10661__auto___20610 + (1));
i__10661__auto___20610 = G__20616;
continue;
} else {
}
break;
}

var G__20583 = args20571.length;
switch (G__20583) {
case 2:
return cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20571.length)].join('')));

}
});

cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2 = (function (forms,preds){
return cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$3(forms,preds,null);
});

cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$3 = (function (forms,preds,gfn){
var specs = (new cljs.core.Delay((function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.specize,preds,forms);
}),null));
var cnt = cljs.core.count(preds);
if(typeof cljs.spec.alpha.t_cljs$spec$alpha20585 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha20585 = (function (forms,preds,gfn,specs,cnt,meta20586){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cnt = cnt;
this.meta20586 = meta20586;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.alpha.t_cljs$spec$alpha20585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs,cnt){
return (function (_20587,meta20586__$1){
var self__ = this;
var _20587__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha20585(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cnt,meta20586__$1));
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha20585.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs,cnt){
return (function (_20587){
var self__ = this;
var _20587__$1 = this;
return self__.meta20586;
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha20585.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha20585.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (specs,cnt){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha20585.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (specs,cnt){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha20585.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha20585.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (specs,cnt){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var specs__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.specs) : cljs.core.deref.call(null,self__.specs));
if(!((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),self__.cnt)))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,self__.cnt)){
return ret;
} else {
var v = (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(i) : x.call(null,i));
var cv = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1(i) : specs__$1.call(null,i)),v);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(cv))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var G__20620 = (((cv === v))?ret:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,i,cv));
var G__20621 = (i + (1));
ret = G__20620;
i = G__20621;
continue;
}
}
break;
}
}
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha20585.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (specs,cnt){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(self__.preds)))){
} else {
throw (new Error("Assert failed: (c/and (vector? x) (= (count x) (count preds)))"));
}

var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,cljs.core.count(x))){
return ret;
} else {
var cv = (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(i) : x.call(null,i));
var v = cljs.spec.alpha.unform((self__.preds.cljs$core$IFn$_invoke$arity$1 ? self__.preds.cljs$core$IFn$_invoke$arity$1(i) : self__.preds.call(null,i)),cv);
var G__20622 = (((cv === v))?ret:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,i,v));
var G__20623 = (i + (1));
ret = G__20622;
i = G__20623;
continue;
}
break;
}
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha20585.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (specs,cnt){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.vector_QMARK_(x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(self__.preds))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.count(self__.preds);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0)))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$4(((function (___$1,specs,cnt){
return (function (i,form,pred){
var v = (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(i) : x.call(null,i));
if(cljs.core.truth_(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(pred,v))){
return null;
} else {
return cljs.spec.alpha.explain_1(form,pred,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i),via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i),v);
}
});})(___$1,specs,cnt))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(self__.preds)),self__.forms,self__.preds));

}
}
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha20585.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (specs,cnt){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var gen = ((function (___$1,specs,cnt){
return (function (i,p,f){
return cljs.spec.alpha.gensub(p,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i),rmap,f);
});})(___$1,specs,cnt))
;
var gs = cljs.core.map.cljs$core$IFn$_invoke$arity$4(gen,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(self__.preds)),self__.preds,self__.forms);
if(cljs.core.every_QMARK_(cljs.core.identity,gs)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.tuple,gs);
} else {
return null;
}
}
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha20585.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (specs,cnt){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$3(self__.forms,self__.preds,gfn__$1);
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha20585.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (specs,cnt){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null)),self__.forms)));
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha20585.getBasis = ((function (specs,cnt){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.Symbol(null,"meta20586","meta20586",-885357440,null)], null);
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha20585.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha20585.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha20585";

cljs.spec.alpha.t_cljs$spec$alpha20585.cljs$lang$ctorPrWriter = ((function (specs,cnt){
return (function (this__10096__auto__,writer__10097__auto__,opt__10098__auto__){
return cljs.core._write(writer__10097__auto__,"cljs.spec.alpha/t_cljs$spec$alpha20585");
});})(specs,cnt))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha20585 = ((function (specs,cnt){
return (function cljs$spec$alpha$__GT_t_cljs$spec$alpha20585(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta20586){
return (new cljs.spec.alpha.t_cljs$spec$alpha20585(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta20586));
});})(specs,cnt))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha20585(forms,preds,gfn,specs,cnt,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.alpha.tuple_impl.cljs$lang$maxFixedArity = 3;

cljs.spec.alpha.tagged_ret = (function cljs$spec$alpha$tagged_ret(v){
var x20650 = v;
x20650.cljs$core$IMapEntry$ = cljs.core.PROTOCOL_SENTINEL;

x20650.cljs$core$IMapEntry$_key$arity$1 = ((function (x20650){
return (function (_){
var ___$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(v,(0));
});})(x20650))
;

x20650.cljs$core$IMapEntry$_val$arity$1 = ((function (x20650){
return (function (_){
var ___$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(v,(1));
});})(x20650))
;

return x20650;
});
/**
 * Do not call this directly, use 'or'
 */
cljs.spec.alpha.or_spec_impl = (function cljs$spec$alpha$or_spec_impl(keys,forms,preds,gfn){
var id = cljs.core.random_uuid();
var kps = cljs.core.zipmap(keys,preds);
var specs = (new cljs.core.Delay(((function (id,kps){
return (function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.specize,preds,forms);
});})(id,kps))
,null));
var cform = (function (){var G__20684 = cljs.core.count(preds);
switch (G__20684) {
case (2):
return ((function (G__20684,id,kps,specs){
return (function (x){
var specs__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(specs) : cljs.core.deref.call(null,specs));
var ret = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((0)) : specs__$1.call(null,(0))),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret))){
var ret__$1 = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((1)) : specs__$1.call(null,(1))),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret__$1))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.spec.alpha.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((1)) : keys.call(null,(1))),ret__$1], null));
}
} else {
return cljs.spec.alpha.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((0)) : keys.call(null,(0))),ret], null));
}
});
;})(G__20684,id,kps,specs))

break;
case (3):
return ((function (G__20684,id,kps,specs){
return (function (x){
var specs__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(specs) : cljs.core.deref.call(null,specs));
var ret = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((0)) : specs__$1.call(null,(0))),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret))){
var ret__$1 = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((1)) : specs__$1.call(null,(1))),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret__$1))){
var ret__$2 = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((2)) : specs__$1.call(null,(2))),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret__$2))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.spec.alpha.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((2)) : keys.call(null,(2))),ret__$2], null));
}
} else {
return cljs.spec.alpha.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((1)) : keys.call(null,(1))),ret__$1], null));
}
} else {
return cljs.spec.alpha.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((0)) : keys.call(null,(0))),ret], null));
}
});
;})(G__20684,id,kps,specs))

break;
default:
return ((function (G__20684,id,kps,specs){
return (function (x){
var specs__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(specs) : cljs.core.deref.call(null,specs));
var i = (0);
while(true){
if((i < cljs.core.count(specs__$1))){
var spec = (specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1(i) : specs__$1.call(null,i));
var ret = cljs.spec.alpha.conform_STAR_(spec,x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret))){
var G__20715 = (i + (1));
i = G__20715;
continue;
} else {
return cljs.spec.alpha.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1(i) : keys.call(null,i)),ret], null));
}
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
break;
}
});
;})(G__20684,id,kps,specs))

}
})();
if(typeof cljs.spec.alpha.t_cljs$spec$alpha20685 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha20685 = (function (keys,forms,preds,gfn,id,kps,specs,cform,meta20686){
this.keys = keys;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.id = id;
this.kps = kps;
this.specs = specs;
this.cform = cform;
this.meta20686 = meta20686;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.alpha.t_cljs$spec$alpha20685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,kps,specs,cform){
return (function (_20687,meta20686__$1){
var self__ = this;
var _20687__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha20685(self__.keys,self__.forms,self__.preds,self__.gfn,self__.id,self__.kps,self__.specs,self__.cform,meta20686__$1));
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha20685.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,kps,specs,cform){
return (function (_20687){
var self__ = this;
var _20687__$1 = this;
return self__.meta20686;
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha20685.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha20685.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (id,kps,specs,cform){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha20685.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha20685.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha20685.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return (self__.cform.cljs$core$IFn$_invoke$arity$1 ? self__.cform.cljs$core$IFn$_invoke$arity$1(x) : self__.cform.call(null,x));
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha20685.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,p__20688){
var self__ = this;
var vec__20689 = p__20688;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20689,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20689,(1),null);
var ___$1 = this;
return cljs.spec.alpha.unform((self__.kps.cljs$core$IFn$_invoke$arity$1 ? self__.kps.cljs$core$IFn$_invoke$arity$1(k) : self__.kps.call(null,k)),x);
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha20685.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (id,kps,specs,cform){
return (function (this$,path,via,in$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(this$__$1,x))){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$4(((function (this$__$1,id,kps,specs,cform){
return (function (k,form,pred){
if(cljs.core.truth_(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(pred,x))){
return null;
} else {
return cljs.spec.alpha.explain_1(form,pred,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),via,in$,x);
}
});})(this$__$1,id,kps,specs,cform))
,self__.keys,self__.forms,self__.preds));
}
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha20685.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (id,kps,specs,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var gen = ((function (___$1,id,kps,specs,cform){
return (function (k,p,f){
var rmap__$1 = cljs.spec.alpha.inck(rmap,self__.id);
if(cljs.core.truth_(cljs.spec.alpha.recur_limit_QMARK_(rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay(((function (rmap__$1,___$1,id,kps,specs,cform){
return (function (){
return cljs.spec.alpha.gensub(p,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,f);
});})(rmap__$1,___$1,id,kps,specs,cform))
,null)));
}
});})(___$1,id,kps,specs,cform))
;
var gs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$4(gen,self__.keys,self__.preds,self__.forms));
if(cljs.core.empty_QMARK_(gs)){
return null;
} else {
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gs], 0));
}
}
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha20685.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.or_spec_impl.cljs$core$IFn$_invoke$arity$4 ? cljs.spec.alpha.or_spec_impl.cljs$core$IFn$_invoke$arity$4(self__.keys,self__.forms,self__.preds,gfn__$1) : cljs.spec.alpha.or_spec_impl.call(null,self__.keys,self__.forms,self__.preds,gfn__$1));
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha20685.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (id,kps,specs,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.array_seq([self__.keys,self__.forms], 0)))));
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha20685.getBasis = ((function (id,kps,specs,cform){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"kps","kps",-1157342767,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"cform","cform",1319506748,null),new cljs.core.Symbol(null,"meta20686","meta20686",1887001154,null)], null);
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha20685.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha20685.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha20685";

cljs.spec.alpha.t_cljs$spec$alpha20685.cljs$lang$ctorPrWriter = ((function (id,kps,specs,cform){
return (function (this__10096__auto__,writer__10097__auto__,opt__10098__auto__){
return cljs.core._write(writer__10097__auto__,"cljs.spec.alpha/t_cljs$spec$alpha20685");
});})(id,kps,specs,cform))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha20685 = ((function (id,kps,specs,cform){
return (function cljs$spec$alpha$or_spec_impl_$___GT_t_cljs$spec$alpha20685(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta20686){
return (new cljs.spec.alpha.t_cljs$spec$alpha20685(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta20686));
});})(id,kps,specs,cform))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha20685(keys,forms,preds,gfn,id,kps,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.and_preds = (function cljs$spec$alpha$and_preds(x,preds,forms){
var ret = x;
var G__20757 = preds;
var vec__20759 = G__20757;
var seq__20760 = cljs.core.seq(vec__20759);
var first__20761 = cljs.core.first(seq__20760);
var seq__20760__$1 = cljs.core.next(seq__20760);
var pred = first__20761;
var preds__$1 = seq__20760__$1;
var G__20758 = forms;
var vec__20762 = G__20758;
var seq__20763 = cljs.core.seq(vec__20762);
var first__20764 = cljs.core.first(seq__20763);
var seq__20763__$1 = cljs.core.next(seq__20763);
var form = first__20764;
var forms__$1 = seq__20763__$1;
var ret__$1 = ret;
var G__20757__$1 = G__20757;
var G__20758__$1 = G__20758;
while(true){
var ret__$2 = ret__$1;
var vec__20765 = G__20757__$1;
var seq__20766 = cljs.core.seq(vec__20765);
var first__20767 = cljs.core.first(seq__20766);
var seq__20766__$1 = cljs.core.next(seq__20766);
var pred__$1 = first__20767;
var preds__$2 = seq__20766__$1;
var vec__20768 = G__20758__$1;
var seq__20769 = cljs.core.seq(vec__20768);
var first__20770 = cljs.core.first(seq__20769);
var seq__20769__$1 = cljs.core.next(seq__20769);
var form__$1 = first__20770;
var forms__$2 = seq__20769__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(pred__$1,ret__$2,form__$1);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(nret))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var G__20781 = nret;
var G__20782 = preds__$2;
var G__20783 = forms__$2;
ret__$1 = G__20781;
G__20757__$1 = G__20782;
G__20758__$1 = G__20783;
continue;
}
} else {
return ret__$2;
}
break;
}
});
cljs.spec.alpha.explain_pred_list = (function cljs$spec$alpha$explain_pred_list(forms,preds,path,via,in$,x){
var ret = x;
var G__20818 = forms;
var vec__20820 = G__20818;
var seq__20821 = cljs.core.seq(vec__20820);
var first__20822 = cljs.core.first(seq__20821);
var seq__20821__$1 = cljs.core.next(seq__20821);
var form = first__20822;
var forms__$1 = seq__20821__$1;
var G__20819 = preds;
var vec__20823 = G__20819;
var seq__20824 = cljs.core.seq(vec__20823);
var first__20825 = cljs.core.first(seq__20824);
var seq__20824__$1 = cljs.core.next(seq__20824);
var pred = first__20825;
var preds__$1 = seq__20824__$1;
var ret__$1 = ret;
var G__20818__$1 = G__20818;
var G__20819__$1 = G__20819;
while(true){
var ret__$2 = ret__$1;
var vec__20826 = G__20818__$1;
var seq__20827 = cljs.core.seq(vec__20826);
var first__20828 = cljs.core.first(seq__20827);
var seq__20827__$1 = cljs.core.next(seq__20827);
var form__$1 = first__20828;
var forms__$2 = seq__20827__$1;
var vec__20829 = G__20819__$1;
var seq__20830 = cljs.core.seq(vec__20829);
var first__20831 = cljs.core.first(seq__20830);
var seq__20830__$1 = cljs.core.next(seq__20830);
var pred__$1 = first__20831;
var preds__$2 = seq__20830__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(pred__$1,ret__$2,form__$1);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(nret))){
return cljs.spec.alpha.explain_1(form__$1,pred__$1,path,via,in$,ret__$2);
} else {
var G__20842 = nret;
var G__20843 = forms__$2;
var G__20844 = preds__$2;
ret__$1 = G__20842;
G__20818__$1 = G__20843;
G__20819__$1 = G__20844;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Do not call this directly, use 'and'
 */
cljs.spec.alpha.and_spec_impl = (function cljs$spec$alpha$and_spec_impl(forms,preds,gfn){
var specs = (new cljs.core.Delay((function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.specize,preds,forms);
}),null));
var cform = (function (){var G__20881 = cljs.core.count(preds);
switch (G__20881) {
case (2):
return ((function (G__20881,specs){
return (function (x){
var specs__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(specs) : cljs.core.deref.call(null,specs));
var ret = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((0)) : specs__$1.call(null,(0))),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((1)) : specs__$1.call(null,(1))),ret);
}
});
;})(G__20881,specs))

break;
case (3):
return ((function (G__20881,specs){
return (function (x){
var specs__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(specs) : cljs.core.deref.call(null,specs));
var ret = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((0)) : specs__$1.call(null,(0))),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var ret__$1 = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((1)) : specs__$1.call(null,(1))),ret);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret__$1))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((2)) : specs__$1.call(null,(2))),ret__$1);
}
}
});
;})(G__20881,specs))

break;
default:
return ((function (G__20881,specs){
return (function (x){
var specs__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(specs) : cljs.core.deref.call(null,specs));
var ret = x;
var i = (0);
while(true){
if((i < cljs.core.count(specs__$1))){
var nret = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1(i) : specs__$1.call(null,i)),ret);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(nret))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var G__20888 = nret;
var G__20889 = (i + (1));
ret = G__20888;
i = G__20889;
continue;
}
} else {
return ret;
}
break;
}
});
;})(G__20881,specs))

}
})();
if(typeof cljs.spec.alpha.t_cljs$spec$alpha20882 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha20882 = (function (forms,preds,gfn,specs,cform,meta20883){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cform = cform;
this.meta20883 = meta20883;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.alpha.t_cljs$spec$alpha20882.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs,cform){
return (function (_20884,meta20883__$1){
var self__ = this;
var _20884__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha20882(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cform,meta20883__$1));
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha20882.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs,cform){
return (function (_20884){
var self__ = this;
var _20884__$1 = this;
return self__.meta20883;
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha20882.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha20882.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (specs,cform){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha20882.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (specs,cform){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha20882.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha20882.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return (self__.cform.cljs$core$IFn$_invoke$arity$1 ? self__.cform.cljs$core$IFn$_invoke$arity$1(x) : self__.cform.call(null,x));
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha20882.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (___$1,specs,cform){
return (function (p1__20848_SHARP_,p2__20847_SHARP_){
return cljs.spec.alpha.unform(p2__20847_SHARP_,p1__20848_SHARP_);
});})(___$1,specs,cform))
,x,cljs.core.reverse(self__.preds));
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha20882.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (specs,cform){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.explain_pred_list(self__.forms,self__.preds,path,via,in$,x);
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha20882.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (specs,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.alpha.gensub(cljs.core.first(self__.preds),overrides,path,rmap,cljs.core.first(self__.forms));
}
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha20882.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (specs,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.and_spec_impl.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.alpha.and_spec_impl.cljs$core$IFn$_invoke$arity$3(self__.forms,self__.preds,gfn__$1) : cljs.spec.alpha.and_spec_impl.call(null,self__.forms,self__.preds,gfn__$1));
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha20882.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (specs,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null)),self__.forms)));
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha20882.getBasis = ((function (specs,cform){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"cform","cform",1319506748,null),new cljs.core.Symbol(null,"meta20883","meta20883",972537198,null)], null);
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha20882.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha20882.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha20882";

cljs.spec.alpha.t_cljs$spec$alpha20882.cljs$lang$ctorPrWriter = ((function (specs,cform){
return (function (this__10096__auto__,writer__10097__auto__,opt__10098__auto__){
return cljs.core._write(writer__10097__auto__,"cljs.spec.alpha/t_cljs$spec$alpha20882");
});})(specs,cform))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha20882 = ((function (specs,cform){
return (function cljs$spec$alpha$and_spec_impl_$___GT_t_cljs$spec$alpha20882(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta20883){
return (new cljs.spec.alpha.t_cljs$spec$alpha20882(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta20883));
});})(specs,cform))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha20882(forms,preds,gfn,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.coll_prob = (function cljs$spec$alpha$coll_prob(x,kfn,kform,distinct,count,min_count,max_count,path,via,in$){
var pred = (function (){var or__9439__auto__ = kfn;
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return cljs.core.coll_QMARK_;
}
})();
var kform__$1 = (function (){var or__9439__auto__ = kform;
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null);
}
})();
if(cljs.core.not(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(pred,x))){
return cljs.spec.alpha.explain_1(kform__$1,pred,path,via,in$,x);
} else {
if(cljs.core.truth_((function (){var and__9427__auto__ = count;
if(cljs.core.truth_(and__9427__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(count,cljs.core.bounded_count(count,x));
} else {
return and__9427__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__10373__auto__ = count;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0)))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__9427__auto__ = (function (){var or__9439__auto__ = min_count;
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return max_count;
}
})();
if(cljs.core.truth_(and__9427__auto__)){
return !((((function (){var or__9439__auto__ = min_count;
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count((cljs.core.truth_(max_count)?(max_count + (1)):min_count),x))) && ((cljs.core.bounded_count((cljs.core.truth_(max_count)?(max_count + (1)):min_count),x) <= (function (){var or__9439__auto__ = max_count;
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return cljs.spec.alpha.MAX_INT;
}
})())));
} else {
return and__9427__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null)),(function (){var x__10373__auto__ = (function (){var or__9439__auto__ = min_count;
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return (0);
}
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = (function (){var or__9439__auto__ = max_count;
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return cljs.spec.alpha.MAX_INT;
}
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0)))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__9427__auto__ = distinct;
if(cljs.core.truth_(and__9427__auto__)){
return (!(cljs.core.empty_QMARK_(x))) && (cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,x)));
} else {
return and__9427__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"distinct?","distinct?",-1684357959,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return null;
}
}
}
}
});
/**
 * Do not call this directly, use 'merge'
 */
cljs.spec.alpha.merge_spec_impl = (function cljs$spec$alpha$merge_spec_impl(forms,preds,gfn){
if(typeof cljs.spec.alpha.t_cljs$spec$alpha20910 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha20910 = (function (forms,preds,gfn,meta20911){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta20911 = meta20911;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.alpha.t_cljs$spec$alpha20910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20912,meta20911__$1){
var self__ = this;
var _20912__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha20910(self__.forms,self__.preds,self__.gfn,meta20911__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha20910.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20912){
var self__ = this;
var _20912__$1 = this;
return self__.meta20911;
});

cljs.spec.alpha.t_cljs$spec$alpha20910.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha20910.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha20910.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha20910.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha20910.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ms = cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (___$1){
return (function (p1__20892_SHARP_,p2__20893_SHARP_){
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(p1__20892_SHARP_,x,p2__20893_SHARP_);
});})(___$1))
,self__.preds,self__.forms);
if(cljs.core.truth_(cljs.core.some(cljs.spec.alpha.invalid_QMARK_,ms))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,ms);
}
});

cljs.spec.alpha.t_cljs$spec$alpha20910.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__20894_SHARP_){
return cljs.spec.alpha.unform(p1__20894_SHARP_,x);
});})(___$1))
,cljs.core.reverse(self__.preds)));
});

cljs.spec.alpha.t_cljs$spec$alpha20910.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (___$1){
return (function (p1__20895_SHARP_,p2__20896_SHARP_){
return cljs.spec.alpha.explain_1(p1__20895_SHARP_,p2__20896_SHARP_,path,via,in$,x);
});})(___$1))
,self__.forms,self__.preds));
});

cljs.spec.alpha.t_cljs$spec$alpha20910.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (___$1){
return (function (p1__20897_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,p1__20897_SHARP_);
});})(___$1))
,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.tuple,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (___$1){
return (function (p1__20898_SHARP_,p2__20899_SHARP_){
return cljs.spec.alpha.gensub(p1__20898_SHARP_,overrides,path,rmap,p2__20899_SHARP_);
});})(___$1))
,self__.preds,self__.forms))], 0));
}
});

cljs.spec.alpha.t_cljs$spec$alpha20910.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.merge_spec_impl.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.alpha.merge_spec_impl.cljs$core$IFn$_invoke$arity$3(self__.forms,self__.preds,gfn__$1) : cljs.spec.alpha.merge_spec_impl.call(null,self__.forms,self__.preds,gfn__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha20910.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","merge","cljs.spec.alpha/merge",1420080689,null)),self__.forms)));
});

cljs.spec.alpha.t_cljs$spec$alpha20910.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta20911","meta20911",-908918382,null)], null);
});

cljs.spec.alpha.t_cljs$spec$alpha20910.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha20910.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha20910";

cljs.spec.alpha.t_cljs$spec$alpha20910.cljs$lang$ctorPrWriter = (function (this__10096__auto__,writer__10097__auto__,opt__10098__auto__){
return cljs.core._write(writer__10097__auto__,"cljs.spec.alpha/t_cljs$spec$alpha20910");
});

cljs.spec.alpha.__GT_t_cljs$spec$alpha20910 = (function cljs$spec$alpha$merge_spec_impl_$___GT_t_cljs$spec$alpha20910(forms__$1,preds__$1,gfn__$1,meta20911){
return (new cljs.spec.alpha.t_cljs$spec$alpha20910(forms__$1,preds__$1,gfn__$1,meta20911));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha20910(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'every', 'every-kv', 'coll-of' or 'map-of'
 */
cljs.spec.alpha.every_impl = (function cljs$spec$alpha$every_impl(var_args){
var args20940 = [];
var len__10660__auto___20974 = arguments.length;
var i__10661__auto___20975 = (0);
while(true){
if((i__10661__auto___20975 < len__10660__auto___20974)){
args20940.push((arguments[i__10661__auto___20975]));

var G__20976 = (i__10661__auto___20975 + (1));
i__10661__auto___20975 = G__20976;
continue;
} else {
}
break;
}

var G__20942 = args20940.length;
switch (G__20942) {
case 3:
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20940.length)].join('')));

}
});

cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,pred,opts){
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(form,pred,opts,null);
});

cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,p__20943,gfn){
var map__20944 = p__20943;
var map__20944__$1 = ((((!((map__20944 == null)))?((((map__20944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20944.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20944):map__20944);
var opts = map__20944__$1;
var max_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20944__$1,new cljs.core.Keyword(null,"max-count","max-count",1539185305));
var kind_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20944__$1,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697));
var gen_max = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20944__$1,new cljs.core.Keyword(null,"gen-max","gen-max",-793680445),(20));
var cpred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20944__$1,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218));
var conform_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20944__$1,new cljs.core.Keyword(null,"conform-keys","conform-keys",-1800041814));
var describe_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20944__$1,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911));
var distinct = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20944__$1,new cljs.core.Keyword(null,"distinct","distinct",-1788879121));
var kfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20944__$1,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897));
var gen_into = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20944__$1,new cljs.core.Keyword(null,"into","into",-150836029));
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20944__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var min_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20944__$1,new cljs.core.Keyword(null,"min-count","min-count",1594709013));
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20944__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var conform_all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20944__$1,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917));
var conform_into = gen_into;
var spec = (new cljs.core.Delay(((function (conform_into,map__20944,map__20944__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (){
return cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(pred);
});})(conform_into,map__20944,map__20944__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,null));
var check_QMARK_ = ((function (conform_into,spec,map__20944,map__20944__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (p1__20936_SHARP_){
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(spec) : cljs.core.deref.call(null,spec)),p1__20936_SHARP_);
});})(conform_into,spec,map__20944,map__20944__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;
var kfn__$1 = (function (){var or__9439__auto__ = kfn;
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return ((function (or__9439__auto__,conform_into,spec,check_QMARK_,map__20944,map__20944__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (i,v){
return i;
});
;})(or__9439__auto__,conform_into,spec,check_QMARK_,map__20944,map__20944__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
}
})();
var addcv = ((function (conform_into,spec,check_QMARK_,kfn__$1,map__20944,map__20944__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (ret,i,v,cv){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cv);
});})(conform_into,spec,check_QMARK_,kfn__$1,map__20944,map__20944__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;
var cfns = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__20944,map__20944__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (x){
if((cljs.core.vector_QMARK_(x)) && ((cljs.core.not(conform_into)) || (cljs.core.vector_QMARK_(conform_into)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.identity,((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__20944,map__20944__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (ret,i,v,cv){
if((v === cv)){
return ret;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,i,cv);
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__20944,map__20944__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,cljs.core.identity], null);
} else {
if(cljs.core.truth_((function (){var and__9427__auto__ = cljs.core.map_QMARK_(x);
if(and__9427__auto__){
var or__9439__auto__ = (function (){var and__9427__auto____$1 = kind;
if(cljs.core.truth_(and__9427__auto____$1)){
return cljs.core.not(conform_into);
} else {
return and__9427__auto____$1;
}
})();
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return cljs.core.map_QMARK_(conform_into);
}
} else {
return and__9427__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(conform_keys)?cljs.core.empty:cljs.core.identity),((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__20944,map__20944__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (ret,i,v,cv){
if(((v === cv)) && (cljs.core.not(conform_keys))){
return ret;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.nth.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(conform_keys)?cv:v),(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cv,(1)));
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__20944,map__20944__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,cljs.core.identity], null);
} else {
if((cljs.core.list_QMARK_(conform_into)) || (cljs.core.seq_QMARK_(conform_into)) || ((cljs.core.not(conform_into)) && ((cljs.core.list_QMARK_(x)) || (cljs.core.seq_QMARK_(x))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.empty,addcv,cljs.core.reverse], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__20944,map__20944__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (p1__20937_SHARP_){
return cljs.core.empty((function (){var or__9439__auto__ = conform_into;
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return p1__20937_SHARP_;
}
})());
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__20944,map__20944__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,addcv,cljs.core.identity], null);

}
}
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__20944,map__20944__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;
if(typeof cljs.spec.alpha.t_cljs$spec$alpha20948 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha20948 = (function (form,max_count,map__20944,check_QMARK_,gfn,gen_max,pred,cpred,conform_keys,kind_form,addcv,cfns,describe_form,distinct,spec,kfn,gen_into,p__20943,count,min_count,opts,kind,conform_all,conform_into,meta20949){
this.form = form;
this.max_count = max_count;
this.map__20944 = map__20944;
this.check_QMARK_ = check_QMARK_;
this.gfn = gfn;
this.gen_max = gen_max;
this.pred = pred;
this.cpred = cpred;
this.conform_keys = conform_keys;
this.kind_form = kind_form;
this.addcv = addcv;
this.cfns = cfns;
this.describe_form = describe_form;
this.distinct = distinct;
this.spec = spec;
this.kfn = kfn;
this.gen_into = gen_into;
this.p__20943 = p__20943;
this.count = count;
this.min_count = min_count;
this.opts = opts;
this.kind = kind;
this.conform_all = conform_all;
this.conform_into = conform_into;
this.meta20949 = meta20949;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.alpha.t_cljs$spec$alpha20948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__20944,map__20944__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_20950,meta20949__$1){
var self__ = this;
var _20950__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha20948(self__.form,self__.max_count,self__.map__20944,self__.check_QMARK_,self__.gfn,self__.gen_max,self__.pred,self__.cpred,self__.conform_keys,self__.kind_form,self__.addcv,self__.cfns,self__.describe_form,self__.distinct,self__.spec,self__.kfn,self__.gen_into,self__.p__20943,self__.count,self__.min_count,self__.opts,self__.kind,self__.conform_all,self__.conform_into,meta20949__$1));
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__20944,map__20944__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha20948.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__20944,map__20944__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_20950){
var self__ = this;
var _20950__$1 = this;
return self__.meta20949;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__20944,map__20944__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha20948.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha20948.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__20944,map__20944__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__20944,map__20944__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha20948.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__20944,map__20944__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__20944,map__20944__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha20948.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha20948.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__20944,map__20944__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var spec__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.spec) : cljs.core.deref.call(null,self__.spec));
if(cljs.core.not((self__.cpred.cljs$core$IFn$_invoke$arity$1 ? self__.cpred.cljs$core$IFn$_invoke$arity$1(x) : self__.cpred.call(null,x)))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
if(cljs.core.truth_(self__.conform_all)){
var vec__20951 = (self__.cfns.cljs$core$IFn$_invoke$arity$1 ? self__.cfns.cljs$core$IFn$_invoke$arity$1(x) : self__.cfns.call(null,x));
var init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20951,(0),null);
var add = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20951,(1),null);
var complete = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20951,(2),null);
var ret = (init.cljs$core$IFn$_invoke$arity$1 ? init.cljs$core$IFn$_invoke$arity$1(x) : init.call(null,x));
var i = (0);
var G__20957 = cljs.core.seq(x);
var vec__20958 = G__20957;
var seq__20959 = cljs.core.seq(vec__20958);
var first__20960 = cljs.core.first(seq__20959);
var seq__20959__$1 = cljs.core.next(seq__20959);
var v = first__20960;
var vs = seq__20959__$1;
var vseq = vec__20958;
var ret__$1 = ret;
var i__$1 = i;
var G__20957__$1 = G__20957;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__20961 = G__20957__$1;
var seq__20962 = cljs.core.seq(vec__20961);
var first__20963 = cljs.core.first(seq__20962);
var seq__20962__$1 = cljs.core.next(seq__20962);
var v__$1 = first__20963;
var vs__$1 = seq__20962__$1;
var vseq__$1 = vec__20961;
if(vseq__$1){
var cv = cljs.spec.alpha.conform_STAR_(spec__$1,v__$1);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(cv))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var G__21010 = (add.cljs$core$IFn$_invoke$arity$4 ? add.cljs$core$IFn$_invoke$arity$4(ret__$2,i__$2,v__$1,cv) : add.call(null,ret__$2,i__$2,v__$1,cv));
var G__21011 = (i__$2 + (1));
var G__21012 = vs__$1;
ret__$1 = G__21010;
i__$1 = G__21011;
G__20957__$1 = G__21012;
continue;
}
} else {
return (complete.cljs$core$IFn$_invoke$arity$1 ? complete.cljs$core$IFn$_invoke$arity$1(ret__$2) : complete.call(null,ret__$2));
}
break;
}
} else {
if(cljs.core.indexed_QMARK_(x)){
var step = (function (){var x__9777__auto__ = (1);
var y__9778__auto__ = cljs.core.long$((cljs.core.count(x) / cljs.spec.alpha._STAR_coll_check_limit_STAR_));
return ((x__9777__auto__ > y__9778__auto__) ? x__9777__auto__ : y__9778__auto__);
})();
var i = (0);
while(true){
if((i >= cljs.core.count(x))){
return x;
} else {
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec__$1,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(x,i)))){
var G__21017 = (i + step);
i = G__21017;
continue;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}
break;
}
} else {
var limit = cljs.spec.alpha._STAR_coll_check_limit_STAR_;
var i = (0);
var G__20967 = cljs.core.seq(x);
var vec__20968 = G__20967;
var seq__20969 = cljs.core.seq(vec__20968);
var first__20970 = cljs.core.first(seq__20969);
var seq__20969__$1 = cljs.core.next(seq__20969);
var v = first__20970;
var vs = seq__20969__$1;
var vseq = vec__20968;
var i__$1 = i;
var G__20967__$1 = G__20967;
while(true){
var i__$2 = i__$1;
var vec__20971 = G__20967__$1;
var seq__20972 = cljs.core.seq(vec__20971);
var first__20973 = cljs.core.first(seq__20972);
var seq__20972__$1 = cljs.core.next(seq__20972);
var v__$1 = first__20973;
var vs__$1 = seq__20972__$1;
var vseq__$1 = vec__20971;
if(((vseq__$1 == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i__$2,limit))){
return x;
} else {
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec__$1,v__$1))){
var G__21026 = (i__$2 + (1));
var G__21027 = vs__$1;
i__$1 = G__21026;
G__20967__$1 = G__21027;
continue;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);

}
}
break;
}
}

}
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__20944,map__20944__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha20948.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__20944,map__20944__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return x;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__20944,map__20944__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha20948.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__20944,map__20944__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var or__9439__auto__ = cljs.spec.alpha.coll_prob(x,self__.kind,self__.kind_form,self__.distinct,self__.count,self__.min_count,self__.max_count,path,via,in$);
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(cljs.core.truth_(self__.conform_all)?cljs.core.identity:cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.take,cljs.spec.alpha._STAR_coll_error_limit_STAR_)).call(null,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (or__9439__auto__,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__20944,map__20944__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (i,v){
var k = (self__.kfn.cljs$core$IFn$_invoke$arity$2 ? self__.kfn.cljs$core$IFn$_invoke$arity$2(i,v) : self__.kfn.call(null,i,v));
if(cljs.core.truth_((self__.check_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.check_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : self__.check_QMARK_.call(null,v)))){
return null;
} else {
var prob = cljs.spec.alpha.explain_1(self__.form,self__.pred,path,via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,k),v);
return prob;
}
});})(or__9439__auto__,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__20944,map__20944__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),x))));
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__20944,map__20944__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha20948.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__20944,map__20944__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var pgen = cljs.spec.alpha.gensub(self__.pred,overrides,path,rmap,self__.form);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.truth_(self__.gen_into)?cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.empty(self__.gen_into)], 0)):(cljs.core.truth_(self__.kind)?cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__20944,map__20944__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (p1__20938_SHARP_){
if(cljs.core.empty_QMARK_(p1__20938_SHARP_)){
return p1__20938_SHARP_;
} else {
return cljs.core.empty(p1__20938_SHARP_);
}
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__20944,map__20944__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,cljs.spec.alpha.gensub(self__.kind,overrides,path,rmap,self__.form)], 0)):cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentVector.EMPTY], 0))
)),((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__20944,map__20944__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (init){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__20944,map__20944__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (p1__20939_SHARP_){
if(cljs.core.vector_QMARK_(init)){
return p1__20939_SHARP_;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(init,p1__20939_SHARP_);
}
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__20944,map__20944__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,(cljs.core.truth_(self__.distinct)?(cljs.core.truth_(self__.count)?cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pgen,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"num-elements","num-elements",1960422107),self__.count,new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null)], 0)):cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pgen,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-elements","min-elements",949370780),(function (){var or__9439__auto__ = self__.min_count;
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"max-elements","max-elements",433034073),(function (){var or__9439__auto__ = self__.max_count;
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
var x__9777__auto__ = self__.gen_max;
var y__9778__auto__ = ((2) * (function (){var or__9439__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__9439__auto____$1)){
return or__9439__auto____$1;
} else {
return (0);
}
})());
return ((x__9777__auto__ > y__9778__auto__) ? x__9777__auto__ : y__9778__auto__);
}
})(),new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null)], 0))):(cljs.core.truth_(self__.count)?cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pgen,self__.count], 0)):(cljs.core.truth_((function (){var or__9439__auto__ = self__.min_count;
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return self__.max_count;
}
})())?cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pgen,(function (){var or__9439__auto__ = self__.min_count;
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return (0);
}
})(),(function (){var or__9439__auto__ = self__.max_count;
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
var x__9777__auto__ = self__.gen_max;
var y__9778__auto__ = ((2) * (function (){var or__9439__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__9439__auto____$1)){
return or__9439__auto____$1;
} else {
return (0);
}
})());
return ((x__9777__auto__ > y__9778__auto__) ? x__9777__auto__ : y__9778__auto__);
}
})()], 0)):cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pgen,(0),self__.gen_max], 0))
)))], 0));
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__20944,map__20944__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
], 0));
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__20944,map__20944__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha20948.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__20944,map__20944__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(self__.form,self__.pred,self__.opts,gfn__$1);
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__20944,map__20944__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha20948.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__20944,map__20944__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_){
var self__ = this;
var ___$1 = this;
var or__9439__auto__ = self__.describe_form;
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",123912744,null)),(function (){var x__10373__auto__ = self__.form;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core.array_seq([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.array_seq([self__.opts], 0))], 0))));
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__20944,map__20944__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha20948.getBasis = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__20944,map__20944__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (){
return new cljs.core.PersistentVector(null, 25, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"max-count","max-count",-1115250464,null),new cljs.core.Symbol(null,"map__20944","map__20944",-1076553822,null),new cljs.core.Symbol(null,"check?","check?",409539557,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"gen-max","gen-max",846851082,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"cpred","cpred",-540353554,null),new cljs.core.Symbol(null,"conform-keys","conform-keys",-159510287,null),new cljs.core.Symbol(null,"kind-form","kind-form",1155997457,null),new cljs.core.Symbol(null,"addcv","addcv",-1552991247,null),new cljs.core.Symbol(null,"cfns","cfns",1335482066,null),new cljs.core.Symbol(null,"describe-form","describe-form",-1410156588,null),new cljs.core.Symbol(null,"distinct","distinct",-148347594,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"kfn","kfn",729311001,null),new cljs.core.Symbol(null,"gen-into","gen-into",592640985,null),new cljs.core.Symbol(null,"p__20943","p__20943",-655987333,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"min-count","min-count",-1059726756,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"conform-all","conform-all",-980179459,null),new cljs.core.Symbol(null,"conform-into","conform-into",-1039113729,null),new cljs.core.Symbol(null,"meta20949","meta20949",-1249288428,null)], null);
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__20944,map__20944__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha20948.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha20948.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha20948";

cljs.spec.alpha.t_cljs$spec$alpha20948.cljs$lang$ctorPrWriter = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__20944,map__20944__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (this__10096__auto__,writer__10097__auto__,opt__10098__auto__){
return cljs.core._write(writer__10097__auto__,"cljs.spec.alpha/t_cljs$spec$alpha20948");
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__20944,map__20944__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha20948 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__20944,map__20944__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function cljs$spec$alpha$__GT_t_cljs$spec$alpha20948(form__$1,max_count__$1,map__20944__$2,check_QMARK___$1,gfn__$1,gen_max__$1,pred__$1,cpred__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,describe_form__$1,distinct__$1,spec__$1,kfn__$2,gen_into__$1,p__20943__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta20949){
return (new cljs.spec.alpha.t_cljs$spec$alpha20948(form__$1,max_count__$1,map__20944__$2,check_QMARK___$1,gfn__$1,gen_max__$1,pred__$1,cpred__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,describe_form__$1,distinct__$1,spec__$1,kfn__$2,gen_into__$1,p__20943__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta20949));
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__20944,map__20944__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha20948(form,max_count,map__20944__$1,check_QMARK_,gfn,gen_max,pred,cpred,conform_keys,kind_form,addcv,cfns,describe_form,distinct,spec,kfn__$1,gen_into,p__20943,count,min_count,opts,kind,conform_all,conform_into,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.alpha.every_impl.cljs$lang$maxFixedArity = 4;

cljs.spec.alpha.accept = (function cljs$spec$alpha$accept(x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),new cljs.core.Keyword(null,"ret","ret",-468222814),x], null);
});
cljs.spec.alpha.accept_QMARK_ = (function cljs$spec$alpha$accept_QMARK_(p__21056){
var map__21059 = p__21056;
var map__21059__$1 = ((((!((map__21059 == null)))?((((map__21059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21059.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21059):map__21059);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21059__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),op);
});
cljs.spec.alpha.pcat_STAR_ = (function cljs$spec$alpha$pcat_STAR_(p__21061){
var map__21074 = p__21061;
var map__21074__$1 = ((((!((map__21074 == null)))?((((map__21074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21074.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21074):map__21074);
var vec__21075 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21074__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__21076 = cljs.core.seq(vec__21075);
var first__21077 = cljs.core.first(seq__21076);
var seq__21076__$1 = cljs.core.next(seq__21076);
var p1 = first__21077;
var pr = seq__21076__$1;
var ps = vec__21075;
var vec__21078 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21074__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__21079 = cljs.core.seq(vec__21078);
var first__21080 = cljs.core.first(seq__21079);
var seq__21079__$1 = cljs.core.next(seq__21079);
var k1 = first__21080;
var kr = seq__21079__$1;
var ks = vec__21078;
var vec__21081 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21074__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var seq__21082 = cljs.core.seq(vec__21081);
var first__21083 = cljs.core.first(seq__21082);
var seq__21082__$1 = cljs.core.next(seq__21082);
var f1 = first__21083;
var fr = seq__21082__$1;
var forms = vec__21081;
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21074__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21074__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
if(cljs.core.every_QMARK_(cljs.core.identity,ps)){
if(cljs.core.truth_(cljs.spec.alpha.accept_QMARK_(p1))){
var rp = new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1);
var ret__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(cljs.core.truth_(ks)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,rp]):rp));
if(pr){
var G__21085 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),fr,new cljs.core.Keyword(null,"ret","ret",-468222814),ret__$1], null);
return (cljs.spec.alpha.pcat_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.pcat_STAR_.cljs$core$IFn$_invoke$arity$1(G__21085) : cljs.spec.alpha.pcat_STAR_.call(null,G__21085));
} else {
return cljs.spec.alpha.accept(ret__$1);
}
} else {
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),ret,new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"rep+","rep+",-281382396),rep_PLUS_], null);
}
} else {
return null;
}
});
cljs.spec.alpha.pcat = (function cljs$spec$alpha$pcat(var_args){
var args__10667__auto__ = [];
var len__10660__auto___21093 = arguments.length;
var i__10661__auto___21094 = (0);
while(true){
if((i__10661__auto___21094 < len__10660__auto___21093)){
args__10667__auto__.push((arguments[i__10661__auto___21094]));

var G__21095 = (i__10661__auto___21094 + (1));
i__10661__auto___21094 = G__21095;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((0) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((0)),(0),null)):null);
return cljs.spec.alpha.pcat.cljs$core$IFn$_invoke$arity$variadic(argseq__10668__auto__);
});

cljs.spec.alpha.pcat.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alpha.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY], null));
});

cljs.spec.alpha.pcat.cljs$lang$maxFixedArity = (0);

cljs.spec.alpha.pcat.cljs$lang$applyTo = (function (seq21092){
return cljs.spec.alpha.pcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21092));
});

/**
 * Do not call this directly, use 'cat'
 */
cljs.spec.alpha.cat_impl = (function cljs$spec$alpha$cat_impl(ks,ps,forms){
return cljs.spec.alpha.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.spec.alpha.rep_STAR_ = (function cljs$spec$alpha$rep_STAR_(p1,p2,ret,splice,form){
if(cljs.core.truth_(p1)){
var r = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),new cljs.core.Keyword(null,"p2","p2",905500641),p2,new cljs.core.Keyword(null,"splice","splice",449588165),splice,new cljs.core.Keyword(null,"forms","forms",2045992350),form,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid()], null);
if(cljs.core.truth_(cljs.spec.alpha.accept_QMARK_(p1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(r,new cljs.core.Keyword(null,"p1","p1",-936759954),p2,cljs.core.array_seq([new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(r,new cljs.core.Keyword(null,"p1","p1",-936759954),p1,cljs.core.array_seq([new cljs.core.Keyword(null,"ret","ret",-468222814),ret], 0));
}
} else {
return null;
}
});
/**
 * Do not call this directly, use '*'
 */
cljs.spec.alpha.rep_impl = (function cljs$spec$alpha$rep_impl(form,p){
return cljs.spec.alpha.rep_STAR_(p,p,cljs.core.PersistentVector.EMPTY,false,form);
});
/**
 * Do not call this directly, use '+'
 */
cljs.spec.alpha.rep_PLUS_impl = (function cljs$spec$alpha$rep_PLUS_impl(form,p){
return cljs.spec.alpha.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.alpha.rep_STAR_(p,p,cljs.core.PersistentVector.EMPTY,true,form)], null),new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__10373__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),(function (){var x__10373__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null)),(function (){var x__10373__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())))),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"rep+","rep+",-281382396),form], null));
});
/**
 * Do not call this directly, use '&'
 */
cljs.spec.alpha.amp_impl = (function cljs$spec$alpha$amp_impl(re,preds,pred_forms){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),new cljs.core.Keyword(null,"p1","p1",-936759954),re,new cljs.core.Keyword(null,"ps","ps",292358046),preds,new cljs.core.Keyword(null,"forms","forms",2045992350),pred_forms], null);
});
cljs.spec.alpha.filter_alt = (function cljs$spec$alpha$filter_alt(ps,ks,forms,f){
if(cljs.core.truth_((function (){var or__9439__auto__ = ks;
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return forms;
}
})())){
var pks = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__21101_SHARP_){
var G__21108 = cljs.core.first(p1__21101_SHARP_);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__21108) : f.call(null,G__21108));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,ps,(function (){var or__9439__auto__ = cljs.core.seq(ks);
if(or__9439__auto__){
return or__9439__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__9439__auto__ = cljs.core.seq(forms);
if(or__9439__auto__){
return or__9439__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pks)),(cljs.core.truth_(ks)?cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pks)):null),(cljs.core.truth_(forms)?cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pks){
return (function (p1__21102_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__21102_SHARP_,(2));
});})(pks))
,pks)):null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(f,ps)),ks,forms], null);
}
});
cljs.spec.alpha.alt_STAR_ = (function cljs$spec$alpha$alt_STAR_(ps,ks,forms){
var vec__21119 = cljs.spec.alpha.filter_alt(ps,ks,forms,cljs.core.identity);
var vec__21122 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21119,(0),null);
var seq__21123 = cljs.core.seq(vec__21122);
var first__21124 = cljs.core.first(seq__21123);
var seq__21123__$1 = cljs.core.next(seq__21123);
var p1 = first__21124;
var pr = seq__21123__$1;
var ps__$1 = vec__21122;
var vec__21125 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21119,(1),null);
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21125,(0),null);
var ks__$1 = vec__21125;
var forms__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21119,(2),null);
if(cljs.core.truth_(ps__$1)){
var ret = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),new cljs.core.Keyword(null,"ps","ps",292358046),ps__$1,new cljs.core.Keyword(null,"ks","ks",1900203942),ks__$1,new cljs.core.Keyword(null,"forms","forms",2045992350),forms__$1], null);
if((pr == null)){
if(cljs.core.truth_(k1)){
if(cljs.core.truth_(cljs.spec.alpha.accept_QMARK_(p1))){
return cljs.spec.alpha.accept(cljs.spec.alpha.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)], null)));
} else {
return ret;
}
} else {
return p1;
}
} else {
return ret;
}
} else {
return null;
}
});
cljs.spec.alpha.alts = (function cljs$spec$alpha$alts(var_args){
var args__10667__auto__ = [];
var len__10660__auto___21144 = arguments.length;
var i__10661__auto___21145 = (0);
while(true){
if((i__10661__auto___21145 < len__10660__auto___21144)){
args__10667__auto__.push((arguments[i__10661__auto___21145]));

var G__21146 = (i__10661__auto___21145 + (1));
i__10661__auto___21145 = G__21146;
continue;
} else {
}
break;
}

var argseq__10668__auto__ = ((((0) < args__10667__auto__.length))?(new cljs.core.IndexedSeq(args__10667__auto__.slice((0)),(0),null)):null);
return cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__10668__auto__);
});

cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alpha.alt_STAR_(ps,null,null);
});

cljs.spec.alpha.alts.cljs$lang$maxFixedArity = (0);

cljs.spec.alpha.alts.cljs$lang$applyTo = (function (seq21143){
return cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21143));
});

cljs.spec.alpha.alt2 = (function cljs$spec$alpha$alt2(p1,p2){
if(cljs.core.truth_((function (){var and__9427__auto__ = p1;
if(cljs.core.truth_(and__9427__auto__)){
return p2;
} else {
return and__9427__auto__;
}
})())){
return cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1,p2], 0));
} else {
var or__9439__auto__ = p1;
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return p2;
}
}
});
/**
 * Do not call this directly, use 'alt'
 */
cljs.spec.alpha.alt_impl = (function cljs$spec$alpha$alt_impl(ks,ps,forms){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.alt_STAR_(ps,ks,forms),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid());
});
/**
 * Do not call this directly, use '?'
 */
cljs.spec.alpha.maybe_impl = (function cljs$spec$alpha$maybe_impl(p,form){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.alt_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.alpha.accept(new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950)], null)),new cljs.core.Keyword(null,"maybe","maybe",-314397560),form);
});
cljs.spec.alpha.noret_QMARK_ = (function cljs$spec$alpha$noret_QMARK_(p1,pret){
var or__9439__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950));
if(or__9439__auto__){
return or__9439__auto__;
} else {
var or__9439__auto____$1 = (function (){var and__9427__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),null], null), null).call(null,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252).cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.reg_resolve_BANG_(p1)));
if(cljs.core.truth_(and__9427__auto__)){
return cljs.core.empty_QMARK_(pret);
} else {
return and__9427__auto__;
}
})();
if(cljs.core.truth_(or__9439__auto____$1)){
return or__9439__auto____$1;
} else {
return null;
}
}
});
cljs.spec.alpha.accept_nil_QMARK_ = (function cljs$spec$alpha$accept_nil_QMARK_(p){
var map__21175 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__21175__$1 = ((((!((map__21175 == null)))?((((map__21175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21175.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21175):map__21175);
var p__$1 = map__21175__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21175__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21175__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21175__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21175__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21175__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__21177 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__21177)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__21177)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__21177)){
var and__9427__auto__ = (cljs.spec.alpha.accept_nil_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.accept_nil_QMARK_.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.alpha.accept_nil_QMARK_.call(null,p1));
if(cljs.core.truth_(and__9427__auto__)){
var or__9439__auto__ = cljs.spec.alpha.noret_QMARK_(p1,(cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.alpha.preturn.call(null,p1)));
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
var ret = cljs.spec.alpha.and_preds((cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.alpha.preturn.call(null,p1)),ps,cljs.core.next(forms));
return cljs.core.not(cljs.spec.alpha.invalid_QMARK_(ret));
}
} else {
return and__9427__auto__;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__21177)){
var or__9439__auto__ = (p1 === p2);
if(or__9439__auto__){
return or__9439__auto__;
} else {
return (cljs.spec.alpha.accept_nil_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.accept_nil_QMARK_.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.alpha.accept_nil_QMARK_.call(null,p1));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__21177)){
return cljs.core.every_QMARK_(cljs.spec.alpha.accept_nil_QMARK_,ps);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__21177)){
return cljs.core.some(cljs.spec.alpha.accept_nil_QMARK_,ps);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.preturn = (function cljs$spec$alpha$preturn(p){
var map__21198 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__21198__$1 = ((((!((map__21198 == null)))?((((map__21198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21198.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21198):map__21198);
var p__$1 = map__21198__$1;
var vec__21199 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21198__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__21200 = cljs.core.seq(vec__21199);
var first__21201 = cljs.core.first(seq__21200);
var seq__21200__$1 = cljs.core.next(seq__21200);
var p0 = first__21201;
var pr = seq__21200__$1;
var ps = vec__21199;
var vec__21202 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21198__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21202,(0),null);
var ks = vec__21202;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21198__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21198__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21198__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21198__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__21207 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__21207)){
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__21207)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__21207)){
var pret = (cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.alpha.preturn.call(null,p1));
if(cljs.core.truth_(cljs.spec.alpha.noret_QMARK_(p1,pret))){
return new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950);
} else {
return cljs.spec.alpha.and_preds(pret,ps,forms);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__21207)){
return (cljs.spec.alpha.add_ret.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.alpha.add_ret.cljs$core$IFn$_invoke$arity$3(p1,ret,k) : cljs.spec.alpha.add_ret.call(null,p1,ret,k));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__21207)){
return (cljs.spec.alpha.add_ret.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.alpha.add_ret.cljs$core$IFn$_invoke$arity$3(p0,ret,k) : cljs.spec.alpha.add_ret.call(null,p0,ret,k));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__21207)){
var vec__21209 = cljs.spec.alpha.filter_alt(ps,ks,forms,cljs.spec.alpha.accept_nil_QMARK_);
var vec__21212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21209,(0),null);
var p0__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21212,(0),null);
var vec__21215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21209,(1),null);
var k0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21215,(0),null);
var r = (((p0__$1 == null))?new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950):(cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1(p0__$1) : cljs.spec.alpha.preturn.call(null,p0__$1)));
if(cljs.core.truth_(k0)){
return cljs.spec.alpha.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k0,r], null));
} else {
return r;
}
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.op_unform = (function cljs$spec$alpha$op_unform(p,x){
var map__21244 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__21244__$1 = ((((!((map__21244 == null)))?((((map__21244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21244.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21244):map__21244);
var p__$1 = map__21244__$1;
var vec__21245 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21244__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__21246 = cljs.core.seq(vec__21245);
var first__21247 = cljs.core.first(seq__21246);
var seq__21246__$1 = cljs.core.next(seq__21246);
var p0 = first__21247;
var pr = seq__21246__$1;
var ps = vec__21245;
var vec__21248 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21244__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21248,(0),null);
var ks = vec__21248;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21244__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21244__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21244__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21244__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21244__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21244__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
var kps = cljs.core.zipmap(ks,ps);
var G__21252 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__21252)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__21252)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.unform(p__$1,x)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__21252)){
var px = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (G__21252,map__21244,map__21244__$1,p__$1,vec__21245,seq__21246,first__21247,seq__21246__$1,p0,pr,ps,vec__21248,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__21225_SHARP_,p2__21224_SHARP_){
return cljs.spec.alpha.unform(p2__21224_SHARP_,p1__21225_SHARP_);
});})(G__21252,map__21244,map__21244__$1,p__$1,vec__21245,seq__21246,first__21247,seq__21246__$1,p0,pr,ps,vec__21248,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x,cljs.core.reverse(ps));
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(p1,px) : cljs.spec.alpha.op_unform.call(null,p1,px));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__21252)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (G__21252,map__21244,map__21244__$1,p__$1,vec__21245,seq__21246,first__21247,seq__21246__$1,p0,pr,ps,vec__21248,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__21226_SHARP_){
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(p1,p1__21226_SHARP_) : cljs.spec.alpha.op_unform.call(null,p1,p1__21226_SHARP_));
});})(G__21252,map__21244,map__21244__$1,p__$1,vec__21245,seq__21246,first__21247,seq__21246__$1,p0,pr,ps,vec__21248,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,cljs.core.array_seq([x], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__21252)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (G__21252,map__21244,map__21244__$1,p__$1,vec__21245,seq__21246,first__21247,seq__21246__$1,p0,pr,ps,vec__21248,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__21227_SHARP_){
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(p0,p1__21227_SHARP_) : cljs.spec.alpha.op_unform.call(null,p0,p1__21227_SHARP_));
});})(G__21252,map__21244,map__21244__$1,p__$1,vec__21245,seq__21246,first__21247,seq__21246__$1,p0,pr,ps,vec__21248,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,cljs.core.array_seq([x], 0));
} else {
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (G__21252,map__21244,map__21244__$1,p__$1,vec__21245,seq__21246,first__21247,seq__21246__$1,p0,pr,ps,vec__21248,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (k__$1){
if(cljs.core.contains_QMARK_(x,k__$1)){
var G__21253 = (kps.cljs$core$IFn$_invoke$arity$1 ? kps.cljs$core$IFn$_invoke$arity$1(k__$1) : kps.call(null,k__$1));
var G__21254 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,k__$1);
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(G__21253,G__21254) : cljs.spec.alpha.op_unform.call(null,G__21253,G__21254));
} else {
return null;
}
});})(G__21252,map__21244,map__21244__$1,p__$1,vec__21245,seq__21246,first__21247,seq__21246__$1,p0,pr,ps,vec__21248,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,cljs.core.array_seq([ks], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__21252)){
if(cljs.core.truth_(maybe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.unform(p0,x)], null);
} else {
var vec__21255 = x;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21255,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21255,(1),null);
var G__21258 = (kps.cljs$core$IFn$_invoke$arity$1 ? kps.cljs$core$IFn$_invoke$arity$1(k__$1) : kps.call(null,k__$1));
var G__21259 = v;
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(G__21258,G__21259) : cljs.spec.alpha.op_unform.call(null,G__21258,G__21259));
}
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.add_ret = (function cljs$spec$alpha$add_ret(p,r,k){
var map__21265 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__21265__$1 = ((((!((map__21265 == null)))?((((map__21265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21265.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21265):map__21265);
var p__$1 = map__21265__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21265__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21265__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21265__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var prop = ((function (map__21265,map__21265__$1,p__$1,op,ps,splice){
return (function (){
var ret = cljs.spec.alpha.preturn(p__$1);
if(cljs.core.empty_QMARK_(ret)){
return r;
} else {
return (cljs.core.truth_(splice)?cljs.core.into:cljs.core.conj).call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
});})(map__21265,map__21265__$1,p__$1,op,ps,splice))
;
var G__21267 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__21267)){
return r;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__21267)){
var ret = cljs.spec.alpha.preturn(p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return r;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__21267)){
var ret = cljs.spec.alpha.preturn(p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return r;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__21267)){
var ret = cljs.spec.alpha.preturn(p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return r;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__21267)){
return prop();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__21267)){
return prop();
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.deriv = (function cljs$spec$alpha$deriv(p,x){
var map__21291 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__21291__$1 = ((((!((map__21291 == null)))?((((map__21291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21291.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21291):map__21291);
var p__$1 = map__21291__$1;
var vec__21292 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21291__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__21293 = cljs.core.seq(vec__21292);
var first__21294 = cljs.core.first(seq__21293);
var seq__21293__$1 = cljs.core.next(seq__21293);
var p0 = first__21294;
var pr = seq__21293__$1;
var ps = vec__21292;
var vec__21295 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21291__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__21296 = cljs.core.seq(vec__21295);
var first__21297 = cljs.core.first(seq__21296);
var seq__21296__$1 = cljs.core.next(seq__21296);
var k0 = first__21297;
var kr = seq__21296__$1;
var ks = vec__21295;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21291__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21291__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21291__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21291__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21291__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21291__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
if(cljs.core.truth_(p__$1)){
var G__21301 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__21301)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__21301)){
var ret__$1 = cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(p__$1,x,p__$1);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret__$1))){
return null;
} else {
return cljs.spec.alpha.accept(ret__$1);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__21301)){
var temp__6738__auto__ = (cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(p1,x) : cljs.spec.alpha.deriv.call(null,p1,x));
if(cljs.core.truth_(temp__6738__auto__)){
var p1__$1 = temp__6738__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252).cljs$core$IFn$_invoke$arity$1(p1__$1))){
var ret__$1 = cljs.spec.alpha.and_preds(cljs.spec.alpha.preturn(p1__$1),ps,cljs.core.next(forms));
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret__$1))){
return null;
} else {
return cljs.spec.alpha.accept(ret__$1);
}
} else {
return cljs.spec.alpha.amp_impl(p1__$1,ps,forms);
}
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__21301)){
return cljs.spec.alpha.alt2(cljs.spec.alpha.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.cons((cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(p0,x) : cljs.spec.alpha.deriv.call(null,p0,x)),pr),new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),ret], null)),(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_(p0))?(function (){var G__21302 = cljs.spec.alpha.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.next(forms),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.spec.alpha.add_ret(p0,ret,k0)], null));
var G__21303 = x;
return (cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(G__21302,G__21303) : cljs.spec.alpha.deriv.call(null,G__21302,G__21303));
})():null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__21301)){
return cljs.spec.alpha.alt_STAR_(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__21301,map__21291,map__21291__$1,p__$1,vec__21292,seq__21293,first__21294,seq__21293__$1,p0,pr,ps,vec__21295,seq__21296,first__21297,seq__21296__$1,k0,kr,ks,op,p1,p2,ret,splice,forms){
return (function (p1__21272_SHARP_){
return (cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(p1__21272_SHARP_,x) : cljs.spec.alpha.deriv.call(null,p1__21272_SHARP_,x));
});})(G__21301,map__21291,map__21291__$1,p__$1,vec__21292,seq__21293,first__21294,seq__21293__$1,p0,pr,ps,vec__21295,seq__21296,first__21297,seq__21296__$1,k0,kr,ks,op,p1,p2,ret,splice,forms))
,ps),ks,forms);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__21301)){
return cljs.spec.alpha.alt2(cljs.spec.alpha.rep_STAR_((cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(p1,x) : cljs.spec.alpha.deriv.call(null,p1,x)),p2,ret,splice,forms),(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_(p1))?(function (){var G__21304 = cljs.spec.alpha.rep_STAR_(p2,p2,cljs.spec.alpha.add_ret(p1,ret,null),splice,forms);
var G__21305 = x;
return (cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(G__21304,G__21305) : cljs.spec.alpha.deriv.call(null,G__21304,G__21305));
})():null));
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.alpha.op_describe = (function cljs$spec$alpha$op_describe(p){
var map__21316 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__21316__$1 = ((((!((map__21316 == null)))?((((map__21316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21316.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21316):map__21316);
var p__$1 = map__21316__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21316__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21316__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21316__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21316__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21316__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21316__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21316__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21316__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
if(cljs.core.truth_(p__$1)){
var G__21321 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__21321)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__21321)){
return p__$1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__21321)){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("clojure.spec","&","clojure.spec/&",-770935491,null),(cljs.spec.alpha.op_describe.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.op_describe.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.alpha.op_describe.call(null,p1)),forms);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__21321)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core._conj((function (){var x__10373__auto__ = rep_PLUS_;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null));
} else {
return cljs.core.cons(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.array_seq([(function (){var or__9439__auto__ = cljs.core.seq(ks);
if(or__9439__auto__){
return or__9439__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"_","_",1453416199));
}
})(),forms], 0)));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__21321)){
if(cljs.core.truth_(maybe)){
return cljs.core._conj((function (){var x__10373__auto__ = maybe;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null));
} else {
return cljs.core.cons(new cljs.core.Symbol("cljs.spec.alpha","alt","cljs.spec.alpha/alt",-2130750332,null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.array_seq([ks,forms], 0)));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__21321)){
var x__10373__auto__ = (cljs.core.truth_(splice)?new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null):new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null));
return cljs.core._conj((function (){var x__10373__auto____$1 = forms;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto____$1);
})(),x__10373__auto__);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.alpha.op_explain = (function cljs$spec$alpha$op_explain(form,p,path,via,in$,input){
var vec__21367 = input;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21367,(0),null);
var input__$1 = vec__21367;
var map__21370 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__21370__$1 = ((((!((map__21370 == null)))?((((map__21370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21370.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21370):map__21370);
var p__$1 = map__21370__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21370__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21370__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21370__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21370__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21370__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21370__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21370__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var via__$1 = (function (){var temp__6736__auto__ = cljs.spec.alpha.spec_name(p__$1);
if(cljs.core.truth_(temp__6736__auto__)){
var name = temp__6736__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,name);
} else {
return via;
}
})();
var insufficient = ((function (vec__21367,x,input__$1,map__21370,map__21370__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1){
return (function (path__$1,form__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Insufficient input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.alpha.abbrev(form__$1),new cljs.core.Keyword(null,"val","val",128701612),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"via","via",-1904457336),via__$1,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
});})(vec__21367,x,input__$1,map__21370,map__21370__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1))
;
if(cljs.core.truth_(p__$1)){
var G__21374 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__21374)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__21374)){
if(cljs.core.empty_QMARK_(input__$1)){
return insufficient(path,form);
} else {
return cljs.spec.alpha.explain_1(form,p__$1,path,via__$1,in$,x);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__21374)){
if(cljs.core.empty_QMARK_(input__$1)){
if(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_(p1))){
return cljs.spec.alpha.explain_pred_list(forms,ps,path,via__$1,in$,cljs.spec.alpha.preturn(p1));
} else {
return insufficient(path,cljs.spec.alpha.op_describe(p1));
}
} else {
var temp__6736__auto__ = cljs.spec.alpha.deriv(p1,x);
if(cljs.core.truth_(temp__6736__auto__)){
var p1__$1 = temp__6736__auto__;
return cljs.spec.alpha.explain_pred_list(forms,ps,path,via__$1,in$,cljs.spec.alpha.preturn(p1__$1));
} else {
var G__21377 = cljs.spec.alpha.op_describe(p1);
var G__21378 = p1;
var G__21379 = path;
var G__21380 = via__$1;
var G__21381 = in$;
var G__21382 = input__$1;
return (cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6(G__21377,G__21378,G__21379,G__21380,G__21381,G__21382) : cljs.spec.alpha.op_explain.call(null,G__21377,G__21378,G__21379,G__21380,G__21381,G__21382));
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__21374)){
var pkfs = cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,ps,(function (){var or__9439__auto__ = cljs.core.seq(ks);
if(or__9439__auto__){
return or__9439__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__9439__auto__ = cljs.core.seq(forms);
if(or__9439__auto__){
return or__9439__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})());
var vec__21384 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(pkfs)))?cljs.core.first(pkfs):cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (pkfs,G__21374,vec__21367,x,input__$1,map__21370,map__21370__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (p__21387){
var vec__21388 = p__21387;
var p__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21388,(0),null);
return cljs.spec.alpha.accept_nil_QMARK_(p__$2);
});})(pkfs,G__21374,vec__21367,x,input__$1,map__21370,map__21370__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,pkfs)));
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21384,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21384,(1),null);
var form__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21384,(2),null);
var path__$1 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var form__$2 = (function (){var or__9439__auto__ = form__$1;
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return cljs.spec.alpha.op_describe(pred);
}
})();
if((cljs.core.empty_QMARK_(input__$1)) && (cljs.core.not(pred))){
return insufficient(path__$1,form__$2);
} else {
return (cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6(form__$2,pred,path__$1,via__$1,in$,input__$1) : cljs.spec.alpha.op_explain.call(null,form__$2,pred,path__$1,via__$1,in$,input__$1));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__21374)){
if(cljs.core.empty_QMARK_(input__$1)){
return insufficient(path,cljs.spec.alpha.op_describe(p__$1));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$4(((function (G__21374,vec__21367,x,input__$1,map__21370,map__21370__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (k,form__$1,pred){
var G__21391 = (function (){var or__9439__auto__ = form__$1;
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return cljs.spec.alpha.op_describe(pred);
}
})();
var G__21392 = pred;
var G__21393 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var G__21394 = via__$1;
var G__21395 = in$;
var G__21396 = input__$1;
return (cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6(G__21391,G__21392,G__21393,G__21394,G__21395,G__21396) : cljs.spec.alpha.op_explain.call(null,G__21391,G__21392,G__21393,G__21394,G__21395,G__21396));
});})(G__21374,vec__21367,x,input__$1,map__21370,map__21370__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,(function (){var or__9439__auto__ = cljs.core.seq(ks);
if(or__9439__auto__){
return or__9439__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__9439__auto__ = cljs.core.seq(forms);
if(or__9439__auto__){
return or__9439__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),ps));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__21374)){
var G__21397 = (((p1 === p2))?forms:cljs.spec.alpha.op_describe(p1));
var G__21398 = p1;
var G__21399 = path;
var G__21400 = via__$1;
var G__21401 = in$;
var G__21402 = input__$1;
return (cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6(G__21397,G__21398,G__21399,G__21400,G__21401,G__21402) : cljs.spec.alpha.op_explain.call(null,G__21397,G__21398,G__21399,G__21400,G__21401,G__21402));
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.alpha.re_gen = (function cljs$spec$alpha$re_gen(p,overrides,path,rmap,f){
var map__21437 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__21437__$1 = ((((!((map__21437 == null)))?((((map__21437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21437.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21437):map__21437);
var p__$1 = map__21437__$1;
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21437__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21437__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21437__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21437__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var gfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21437__$1,new cljs.core.Keyword("cljs.spec.alpha","gfn","cljs.spec.alpha/gfn",-593120375));
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21437__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21437__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21437__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21437__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21437__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var rmap__$1 = (cljs.core.truth_(id)?cljs.spec.alpha.inck(rmap,id):rmap);
var ggens = ((function (map__21437,map__21437__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1){
return (function (ps__$1,ks__$1,forms__$1){
var gen = ((function (map__21437,map__21437__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1){
return (function (p__$2,k,f__$1){
if(cljs.core.truth_((function (){var and__9427__auto__ = rmap__$1;
if(cljs.core.truth_(and__9427__auto__)){
var and__9427__auto____$1 = id;
if(cljs.core.truth_(and__9427__auto____$1)){
var and__9427__auto____$2 = k;
if(cljs.core.truth_(and__9427__auto____$2)){
return cljs.spec.alpha.recur_limit_QMARK_(rmap__$1,id,path,k);
} else {
return and__9427__auto____$2;
}
} else {
return and__9427__auto____$1;
}
} else {
return and__9427__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_(id)){
return cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay(((function (map__21437,map__21437__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1){
return (function (){
var G__21439 = p__$2;
var G__21440 = overrides;
var G__21441 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var G__21442 = rmap__$1;
var G__21443 = (function (){var or__9439__auto__ = f__$1;
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return p__$2;
}
})();
return (cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5(G__21439,G__21440,G__21441,G__21442,G__21443) : cljs.spec.alpha.re_gen.call(null,G__21439,G__21440,G__21441,G__21442,G__21443));
});})(map__21437,map__21437__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1))
,null)));
} else {
var G__21444 = p__$2;
var G__21445 = overrides;
var G__21446 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var G__21447 = rmap__$1;
var G__21448 = (function (){var or__9439__auto__ = f__$1;
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return p__$2;
}
})();
return (cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5(G__21444,G__21445,G__21446,G__21447,G__21448) : cljs.spec.alpha.re_gen.call(null,G__21444,G__21445,G__21446,G__21447,G__21448));
}
}
});})(map__21437,map__21437__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1))
;
return cljs.core.map.cljs$core$IFn$_invoke$arity$4(gen,ps__$1,(function (){var or__9439__auto__ = cljs.core.seq(ks__$1);
if(or__9439__auto__){
return or__9439__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__9439__auto__ = cljs.core.seq(forms__$1);
if(or__9439__auto__){
return or__9439__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(map__21437,map__21437__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1))
;
var or__9439__auto__ = (function (){var temp__6738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(overrides,path);
if(cljs.core.truth_(temp__6738__auto__)){
var g = temp__6738__auto__;
var G__21450 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"accept","accept",1874130431),G__21450)){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.vector,g], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__21450)){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.vector,g], 0));
} else {
return g;

}
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
var or__9439__auto____$1 = (cljs.core.truth_(gfn)?(gfn.cljs$core$IFn$_invoke$arity$0 ? gfn.cljs$core$IFn$_invoke$arity$0() : gfn.call(null)):null);
if(cljs.core.truth_(or__9439__auto____$1)){
return or__9439__auto____$1;
} else {
if(cljs.core.truth_(p__$1)){
var G__21452 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__21452)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentVector.EMPTY], 0));
} else {
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null)], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__21452)){
var temp__6738__auto__ = cljs.spec.alpha.gensub(p__$1,overrides,path,rmap__$1,f);
if(cljs.core.truth_(temp__6738__auto__)){
var g = temp__6738__auto__;
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.vector,g], 0));
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__21452)){
var G__21454 = p1;
var G__21455 = overrides;
var G__21456 = path;
var G__21457 = rmap__$1;
var G__21458 = cljs.spec.alpha.op_describe(p1);
return (cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5(G__21454,G__21455,G__21456,G__21457,G__21458) : cljs.spec.alpha.re_gen.call(null,G__21454,G__21455,G__21456,G__21457,G__21458));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__21452)){
var gens = ggens(ps,ks,forms);
if(cljs.core.every_QMARK_(cljs.core.identity,gens)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.cat,gens);
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__21452)){
var gens = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,ggens(ps,ks,forms));
if(cljs.core.empty_QMARK_(gens)){
return null;
} else {
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gens], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__21452)){
if(cljs.core.truth_(cljs.spec.alpha.recur_limit_QMARK_(rmap__$1,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),id))){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentVector.EMPTY], 0));
} else {
var temp__6738__auto__ = (cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5(p2,overrides,path,rmap__$1,forms) : cljs.spec.alpha.re_gen.call(null,p2,overrides,path,rmap__$1,forms));
if(cljs.core.truth_(temp__6738__auto__)){
var g = temp__6738__auto__;
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (g,temp__6738__auto__,G__21452,or__9439__auto____$1,or__9439__auto__,map__21437,map__21437__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1,ggens){
return (function (p1__21415_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__21415_SHARP_);
});})(g,temp__6738__auto__,G__21452,or__9439__auto____$1,or__9439__auto__,map__21437,map__21437__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1,ggens))
,cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([g], 0))], 0));
} else {
return null;
}
}
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
}
}
});
cljs.spec.alpha.re_conform = (function cljs$spec$alpha$re_conform(p,p__21481){
while(true){
var vec__21485 = p__21481;
var seq__21486 = cljs.core.seq(vec__21485);
var first__21487 = cljs.core.first(seq__21486);
var seq__21486__$1 = cljs.core.next(seq__21486);
var x = first__21487;
var xs = seq__21486__$1;
var data = vec__21485;
if(cljs.core.empty_QMARK_(data)){
if(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_(p))){
var ret = cljs.spec.alpha.preturn(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return null;
} else {
return ret;
}
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
} else {
var temp__6736__auto__ = cljs.spec.alpha.deriv(p,x);
if(cljs.core.truth_(temp__6736__auto__)){
var dp = temp__6736__auto__;
var G__21488 = dp;
var G__21489 = xs;
p = G__21488;
p__21481 = G__21489;
continue;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}
break;
}
});
cljs.spec.alpha.re_explain = (function cljs$spec$alpha$re_explain(path,via,in$,re,input){
var p = re;
var G__21503 = input;
var vec__21504 = G__21503;
var seq__21505 = cljs.core.seq(vec__21504);
var first__21506 = cljs.core.first(seq__21505);
var seq__21505__$1 = cljs.core.next(seq__21505);
var x = first__21506;
var xs = seq__21505__$1;
var data = vec__21504;
var i = (0);
var p__$1 = p;
var G__21503__$1 = G__21503;
var i__$1 = i;
while(true){
var p__$2 = p__$1;
var vec__21507 = G__21503__$1;
var seq__21508 = cljs.core.seq(vec__21507);
var first__21509 = cljs.core.first(seq__21508);
var seq__21508__$1 = cljs.core.next(seq__21508);
var x__$1 = first__21509;
var xs__$1 = seq__21508__$1;
var data__$1 = vec__21507;
var i__$2 = i__$1;
if(cljs.core.empty_QMARK_(data__$1)){
if(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_(p__$2))){
return null;
} else {
return cljs.spec.alpha.op_explain(cljs.spec.alpha.op_describe(p__$2),p__$2,path,via,in$,null);
}
} else {
var temp__6736__auto__ = cljs.spec.alpha.deriv(p__$2,x__$1);
if(cljs.core.truth_(temp__6736__auto__)){
var dp = temp__6736__auto__;
var G__21510 = dp;
var G__21511 = xs__$1;
var G__21512 = (i__$2 + (1));
p__$1 = G__21510;
G__21503__$1 = G__21511;
i__$1 = G__21512;
continue;
} else {
if(cljs.core.truth_(cljs.spec.alpha.accept_QMARK_(p__$2))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252).cljs$core$IFn$_invoke$arity$1(p__$2),new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623))){
return cljs.spec.alpha.op_explain(cljs.spec.alpha.op_describe(p__$2),p__$2,path,via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2),cljs.core.seq(data__$1));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.alpha.abbrev(cljs.spec.alpha.op_describe(re)),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2)], null)], null);
}
} else {
var or__9439__auto__ = cljs.spec.alpha.op_explain(cljs.spec.alpha.op_describe(p__$2),p__$2,path,via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2),cljs.core.seq(data__$1));
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.alpha.abbrev(cljs.spec.alpha.op_describe(p__$2)),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2)], null)], null);
}
}
}
}
break;
}
});
/**
 * Do not call this directly, use 'spec' with a regex op argument
 */
cljs.spec.alpha.regex_spec_impl = (function cljs$spec$alpha$regex_spec_impl(re,gfn){
if(typeof cljs.spec.alpha.t_cljs$spec$alpha21516 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha21516 = (function (re,gfn,meta21517){
this.re = re;
this.gfn = gfn;
this.meta21517 = meta21517;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.alpha.t_cljs$spec$alpha21516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21518,meta21517__$1){
var self__ = this;
var _21518__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha21516(self__.re,self__.gfn,meta21517__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha21516.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21518){
var self__ = this;
var _21518__$1 = this;
return self__.meta21517;
});

cljs.spec.alpha.t_cljs$spec$alpha21516.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha21516.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha21516.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha21516.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha21516.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_(x))){
return cljs.spec.alpha.re_conform(self__.re,cljs.core.seq(x));
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
});

cljs.spec.alpha.t_cljs$spec$alpha21516.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.op_unform(self__.re,x);
});

cljs.spec.alpha.t_cljs$spec$alpha21516.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_(x))){
return cljs.spec.alpha.re_explain(path,via,in$,self__.re,cljs.core.seq(x));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.alpha.abbrev(cljs.spec.alpha.op_describe(self__.re)),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});

cljs.spec.alpha.t_cljs$spec$alpha21516.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.alpha.re_gen(self__.re,overrides,path,rmap,cljs.spec.alpha.op_describe(self__.re));
}
});

cljs.spec.alpha.t_cljs$spec$alpha21516.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.regex_spec_impl.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.regex_spec_impl.cljs$core$IFn$_invoke$arity$2(self__.re,gfn__$1) : cljs.spec.alpha.regex_spec_impl.call(null,self__.re,gfn__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha21516.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.op_describe(self__.re);
});

cljs.spec.alpha.t_cljs$spec$alpha21516.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta21517","meta21517",-2042866122,null)], null);
});

cljs.spec.alpha.t_cljs$spec$alpha21516.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha21516.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha21516";

cljs.spec.alpha.t_cljs$spec$alpha21516.cljs$lang$ctorPrWriter = (function (this__10096__auto__,writer__10097__auto__,opt__10098__auto__){
return cljs.core._write(writer__10097__auto__,"cljs.spec.alpha/t_cljs$spec$alpha21516");
});

cljs.spec.alpha.__GT_t_cljs$spec$alpha21516 = (function cljs$spec$alpha$regex_spec_impl_$___GT_t_cljs$spec$alpha21516(re__$1,gfn__$1,meta21517){
return (new cljs.spec.alpha.t_cljs$spec$alpha21516(re__$1,gfn__$1,meta21517));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha21516(re,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.call_valid_QMARK_ = (function cljs$spec$alpha$call_valid_QMARK_(f,specs,args){
var cargs = cljs.spec.alpha.conform(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs),args);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(cargs))){
return null;
} else {
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
var cret = cljs.spec.alpha.conform(new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs),ret);
var and__9427__auto__ = cljs.core.not(cljs.spec.alpha.invalid_QMARK_(cret));
if(and__9427__auto__){
if(cljs.core.truth_(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs))){
return cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return true;
}
} else {
return and__9427__auto__;
}
}
});
/**
 * returns f if valid, else smallest
 */
cljs.spec.alpha.validate_fn = (function cljs$spec$alpha$validate_fn(f,specs,iters){
var g = cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs));
var prop = cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null),((function (g){
return (function (p1__21531_SHARP_){
return cljs.spec.alpha.call_valid_QMARK_(f,specs,p1__21531_SHARP_);
});})(g))
], 0));
var ret = cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([iters,prop], 0));
var temp__6736__auto__ = new cljs.core.Keyword(null,"smallest","smallest",-152623883).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(ret));
if(cljs.core.truth_(temp__6736__auto__)){
var vec__21541 = temp__6736__auto__;
var smallest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21541,(0),null);
return smallest;
} else {
return f;
}
});
/**
 * Do not call this directly, use 'fspec'
 */
cljs.spec.alpha.fspec_impl = (function cljs$spec$alpha$fspec_impl(argspec,aform,retspec,rform,fnspec,fform,gfn){
var specs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),argspec,new cljs.core.Keyword(null,"ret","ret",-468222814),retspec,new cljs.core.Keyword(null,"fn","fn",-1175266204),fnspec], null);
if(typeof cljs.spec.alpha.t_cljs$spec$alpha21566 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
cljs.spec.alpha.t_cljs$spec$alpha21566 = (function (argspec,aform,retspec,rform,fnspec,fform,gfn,specs,meta21567){
this.argspec = argspec;
this.aform = aform;
this.retspec = retspec;
this.rform = rform;
this.fnspec = fnspec;
this.fform = fform;
this.gfn = gfn;
this.specs = specs;
this.meta21567 = meta21567;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.alpha.t_cljs$spec$alpha21566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs){
return (function (_21568,meta21567__$1){
var self__ = this;
var _21568__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha21566(self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,self__.gfn,self__.specs,meta21567__$1));
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha21566.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs){
return (function (_21568){
var self__ = this;
var _21568__$1 = this;
return self__.meta21567;
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha21566.prototype.cljs$core$ILookup$_lookup$arity$2 = ((function (specs){
return (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.specs,k);
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha21566.prototype.cljs$core$ILookup$_lookup$arity$3 = ((function (specs){
return (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.specs,k,not_found);
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha21566.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha21566.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (specs){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha21566.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (specs){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha21566.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha21566.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_(f)){
if((f === cljs.spec.alpha.validate_fn(f,self__.specs,cljs.spec.alpha._STAR_fspec_iterations_STAR_))){
return f;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha21566.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
return f;
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha21566.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (specs){
return (function (_,path,via,in$,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_(f)){
var args = cljs.spec.alpha.validate_fn(f,self__.specs,(100));
if((f === args)){
return null;
} else {
var ret = (function (){try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}catch (e21571){if((e21571 instanceof Error)){
var t = e21571;
return t;
} else {
throw e21571;

}
}})();
if((ret instanceof Error)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"fn","fn",465265323,null)),new cljs.core.Keyword(null,"val","val",128701612),args,new cljs.core.Keyword(null,"reason","reason",-2070751759),ret.message,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
var cret = cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(self__.retspec,ret,self__.rform);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(cret))){
return cljs.spec.alpha.explain_1(self__.rform,self__.retspec,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"ret","ret",-468222814)),via,in$,ret);
} else {
if(cljs.core.truth_(self__.fnspec)){
var cargs = cljs.spec.alpha.conform(self__.argspec,args);
return cljs.spec.alpha.explain_1(self__.fform,self__.fnspec,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"fn","fn",-1175266204)),via,in$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return null;
}
}
}
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Keyword(null,"val","val",128701612),f,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha21566.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (specs){
return (function (_,overrides,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (___$3,specs){
return (function() { 
var G__21592__delegate = function (args){
if(cljs.core.truth_(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(self__.argspec,args))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__10531__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_21576_21593 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_21577_21594 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_21576_21593,_STAR_print_fn_STAR_21577_21594,sb__10531__auto__,___$3,specs){
return (function (x__10532__auto__){
return sb__10531__auto__.append(x__10532__auto__);
});})(_STAR_print_newline_STAR_21576_21593,_STAR_print_fn_STAR_21577_21594,sb__10531__auto__,___$3,specs))
;

try{cljs.spec.alpha.explain(self__.argspec,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_21577_21594;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_21576_21593;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__10531__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(pvalid? argspec args)")].join('')));
}

return cljs.spec.gen.alpha.generate(cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2(self__.retspec,overrides));
};
var G__21592 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21595__i = 0, G__21595__a = new Array(arguments.length -  0);
while (G__21595__i < G__21595__a.length) {G__21595__a[G__21595__i] = arguments[G__21595__i + 0]; ++G__21595__i;}
  args = new cljs.core.IndexedSeq(G__21595__a,0,null);
} 
return G__21592__delegate.call(this,args);};
G__21592.cljs$lang$maxFixedArity = 0;
G__21592.cljs$lang$applyTo = (function (arglist__21596){
var args = cljs.core.seq(arglist__21596);
return G__21592__delegate(args);
});
G__21592.cljs$core$IFn$_invoke$arity$variadic = G__21592__delegate;
return G__21592;
})()
;})(___$3,specs))
], 0));
}
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha21566.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (specs){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.fspec_impl.cljs$core$IFn$_invoke$arity$7 ? cljs.spec.alpha.fspec_impl.cljs$core$IFn$_invoke$arity$7(self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1) : cljs.spec.alpha.fspec_impl.call(null,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1));
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha21566.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (specs){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"args","args",1315556576)),cljs.core.array_seq([(function (){var x__10373__auto__ = self__.aform;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ret","ret",-468222814)),(function (){var x__10373__auto__ = self__.rform;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"fn","fn",-1175266204)),(function (){var x__10373__auto__ = self__.fform;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})()], 0))));
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha21566.getBasis = ((function (specs){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"argspec","argspec",-1207762746,null),new cljs.core.Symbol(null,"aform","aform",531303525,null),new cljs.core.Symbol(null,"retspec","retspec",-920025354,null),new cljs.core.Symbol(null,"rform","rform",-1420499912,null),new cljs.core.Symbol(null,"fnspec","fnspec",-1865712406,null),new cljs.core.Symbol(null,"fform","fform",-176049972,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"meta21567","meta21567",-1883481943,null)], null);
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha21566.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha21566.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha21566";

cljs.spec.alpha.t_cljs$spec$alpha21566.cljs$lang$ctorPrWriter = ((function (specs){
return (function (this__10096__auto__,writer__10097__auto__,opt__10098__auto__){
return cljs.core._write(writer__10097__auto__,"cljs.spec.alpha/t_cljs$spec$alpha21566");
});})(specs))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha21566 = ((function (specs){
return (function cljs$spec$alpha$fspec_impl_$___GT_t_cljs$spec$alpha21566(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta21567){
return (new cljs.spec.alpha.t_cljs$spec$alpha21566(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta21567));
});})(specs))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha21566(argspec,aform,retspec,rform,fnspec,fform,gfn,specs,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("cljs.spec.alpha","kvs->map","cljs.spec.alpha/kvs->map",579713455),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__21600#","p1__21600#",1461901771,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"p1__21600#","p1__21600#",1461901771,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"p1__21600#","p1__21600#",1461901771,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__21601#","p1__21601#",-511063296,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),new cljs.core.Symbol(null,"p1__21601#","p1__21601#",-511063296,null)))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"%","%",-950237169,null)))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),new cljs.core.Symbol(null,"%","%",-950237169,null)))),(function (p1__21600_SHARP_){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),p1__21600_SHARP_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),p1__21600_SHARP_));
}),null,true,(function (p1__21601_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__21615){
var vec__21616 = p__21615;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21616,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21616,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),k,new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),v], null);
}),p1__21601_SHARP_);
})));
/**
 * takes a spec and returns a spec that has the same properties except
 *   'conform' returns the original (not the conformed) value. Note, will specize regex ops.
 */
cljs.spec.alpha.nonconforming = (function cljs$spec$alpha$nonconforming(spec){
var spec__$1 = cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec);
if(typeof cljs.spec.alpha.t_cljs$spec$alpha21647 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha21647 = (function (spec,meta21648){
this.spec = spec;
this.meta21648 = meta21648;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.alpha.t_cljs$spec$alpha21647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (spec__$1){
return (function (_21649,meta21648__$1){
var self__ = this;
var _21649__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha21647(self__.spec,meta21648__$1));
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha21647.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (spec__$1){
return (function (_21649){
var self__ = this;
var _21649__$1 = this;
return self__.meta21648;
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha21647.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha21647.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (spec__$1){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha21647.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (spec__$1){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha21647.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha21647.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (spec__$1){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var ret = cljs.spec.alpha.conform_STAR_(self__.spec,x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return x;
}
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha21647.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (spec__$1){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.unform_STAR_(self__.spec,x);
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha21647.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (spec__$1){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.explain_STAR_(self__.spec,path,via,in$,x);
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha21647.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (spec__$1){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.gen_STAR_(self__.spec,overrides,path,rmap);
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha21647.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (spec__$1){
return (function (_,gfn){
var self__ = this;
var ___$1 = this;
var G__21655 = cljs.spec.alpha.with_gen_STAR_(self__.spec,gfn);
return (cljs.spec.alpha.nonconforming.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.nonconforming.cljs$core$IFn$_invoke$arity$1(G__21655) : cljs.spec.alpha.nonconforming.call(null,G__21655));
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha21647.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (spec__$1){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","nonconforming","cljs.spec.alpha/nonconforming",-1009218508,null)),(function (){var x__10373__auto__ = cljs.spec.alpha.describe_STAR_(self__.spec);
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha21647.getBasis = ((function (spec__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"meta21648","meta21648",-2013638574,null)], null);
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha21647.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha21647.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha21647";

cljs.spec.alpha.t_cljs$spec$alpha21647.cljs$lang$ctorPrWriter = ((function (spec__$1){
return (function (this__10096__auto__,writer__10097__auto__,opt__10098__auto__){
return cljs.core._write(writer__10097__auto__,"cljs.spec.alpha/t_cljs$spec$alpha21647");
});})(spec__$1))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha21647 = ((function (spec__$1){
return (function cljs$spec$alpha$nonconforming_$___GT_t_cljs$spec$alpha21647(spec__$2,meta21648){
return (new cljs.spec.alpha.t_cljs$spec$alpha21647(spec__$2,meta21648));
});})(spec__$1))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha21647(spec__$1,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'nilable'
 */
cljs.spec.alpha.nilable_impl = (function cljs$spec$alpha$nilable_impl(form,pred,gfn){
var spec = cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$2(pred,form);
if(typeof cljs.spec.alpha.t_cljs$spec$alpha21682 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha21682 = (function (form,pred,gfn,spec,meta21683){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.spec = spec;
this.meta21683 = meta21683;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.alpha.t_cljs$spec$alpha21682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (spec){
return (function (_21684,meta21683__$1){
var self__ = this;
var _21684__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha21682(self__.form,self__.pred,self__.gfn,self__.spec,meta21683__$1));
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha21682.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (spec){
return (function (_21684){
var self__ = this;
var _21684__$1 = this;
return self__.meta21683;
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha21682.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha21682.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (spec){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha21682.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (spec){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha21682.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha21682.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (spec){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if((x == null)){
return null;
} else {
return cljs.spec.alpha.conform_STAR_(self__.spec,x);
}
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha21682.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (spec){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if((x == null)){
return null;
} else {
return cljs.spec.alpha.unform_STAR_(self__.spec,x);
}
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha21682.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (spec){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var or__9439__auto__ = cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(self__.spec,x);
if(cljs.core.truth_(or__9439__auto__)){
return or__9439__auto__;
} else {
return (x == null);
}
})())){
return null;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.explain_1(self__.form,self__.pred,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword("cljs.spec.alpha","pred","cljs.spec.alpha/pred",-798342594)),via,in$,x),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950)),new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null));
}
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha21682.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (spec){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay(((function (___$1,spec){
return (function (){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0));
});})(___$1,spec))
,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay(((function (___$1,spec){
return (function (){
return cljs.spec.alpha.gensub(self__.pred,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword("cljs.spec.alpha","pred","cljs.spec.alpha/pred",-798342594)),rmap,self__.form);
});})(___$1,spec))
,null)))], null)], null)], 0));
}
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha21682.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (spec){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.nilable_impl.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.alpha.nilable_impl.cljs$core$IFn$_invoke$arity$3(self__.form,self__.pred,gfn__$1) : cljs.spec.alpha.nilable_impl.call(null,self__.form,self__.pred,gfn__$1));
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha21682.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (spec){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null)),(function (){var x__10373__auto__ = self__.form;
return cljs.core._conj(cljs.core.List.EMPTY,x__10373__auto__);
})())));
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha21682.getBasis = ((function (spec){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"meta21683","meta21683",-312765061,null)], null);
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha21682.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha21682.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha21682";

cljs.spec.alpha.t_cljs$spec$alpha21682.cljs$lang$ctorPrWriter = ((function (spec){
return (function (this__10096__auto__,writer__10097__auto__,opt__10098__auto__){
return cljs.core._write(writer__10097__auto__,"cljs.spec.alpha/t_cljs$spec$alpha21682");
});})(spec))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha21682 = ((function (spec){
return (function cljs$spec$alpha$nilable_impl_$___GT_t_cljs$spec$alpha21682(form__$1,pred__$1,gfn__$1,spec__$1,meta21683){
return (new cljs.spec.alpha.t_cljs$spec$alpha21682(form__$1,pred__$1,gfn__$1,spec__$1,meta21683));
});})(spec))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha21682(form,pred,gfn,spec,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * generates a number (default 10) of values compatible with spec and maps conform over them,
 *   returning a sequence of [val conformed-val] tuples. Optionally takes
 *   a generator overrides map as per gen
 */
cljs.spec.alpha.exercise = (function cljs$spec$alpha$exercise(var_args){
var args21720 = [];
var len__10660__auto___21723 = arguments.length;
var i__10661__auto___21724 = (0);
while(true){
if((i__10661__auto___21724 < len__10660__auto___21723)){
args21720.push((arguments[i__10661__auto___21724]));

var G__21725 = (i__10661__auto___21724 + (1));
i__10661__auto___21724 = G__21725;
continue;
} else {
}
break;
}

var G__21722 = args21720.length;
switch (G__21722) {
case 1:
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21720.length)].join('')));

}
});

cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$2(spec,(10));
});

cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$2 = (function (spec,n){
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$3(spec,n,null);
});

cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$3 = (function (spec,n,overrides){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21719_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__21719_SHARP_,cljs.spec.alpha.conform(spec,p1__21719_SHARP_)],null));
}),cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2(spec,overrides),n], 0)));
});

cljs.spec.alpha.exercise.cljs$lang$maxFixedArity = 3;

/**
 * Return true if inst at or after start and before end
 */
cljs.spec.alpha.inst_in_range_QMARK_ = (function cljs$spec$alpha$inst_in_range_QMARK_(start,end,inst){
var and__9427__auto__ = cljs.core.inst_QMARK_(inst);
if(and__9427__auto__){
var t = cljs.core.inst_ms(inst);
return ((cljs.core.inst_ms(start) <= t)) && ((t < cljs.core.inst_ms(end)));
} else {
return and__9427__auto__;
}
});
/**
 * Return true if start <= val and val < end
 */
cljs.spec.alpha.int_in_range_QMARK_ = (function cljs$spec$alpha$int_in_range_QMARK_(start,end,val){
if(cljs.core.integer_QMARK_(val)){
return ((start <= val)) && ((val < end));
} else {
if((val instanceof goog.math.Long)){
var and__9427__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__9427__auto__)){
return val.lessThan(end);
} else {
return and__9427__auto__;
}
} else {
if((val instanceof goog.math.Integer)){
var and__9427__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__9427__auto__)){
return val.lessThan(end);
} else {
return and__9427__auto__;
}
} else {
return false;

}
}
}
});
if(typeof cljs.spec.alpha._STAR_compile_asserts_STAR_ !== 'undefined'){
} else {
/**
 * If true, compiler will enable spec asserts, which are then
 * subject to runtime control via check-asserts? If false, compiler
 * will eliminate all spec assert overhead. See 'assert'.
 * Initially set to the negation of the ':elide-asserts' compiler option.
 * Defaults to true.
 */
cljs.spec.alpha._STAR_compile_asserts_STAR_ = true;
}
if(typeof cljs.spec.alpha._STAR_runtime_asserts_STAR_ !== 'undefined'){
} else {
cljs.spec.alpha._STAR_runtime_asserts_STAR_ = false;
}
/**
 * Returns the value set by check-asserts.
 */
cljs.spec.alpha.check_asserts_QMARK_ = (function cljs$spec$alpha$check_asserts_QMARK_(){
return cljs.spec.alpha._STAR_runtime_asserts_STAR_;
});
/**
 * Enable or disable spec asserts that have been compiled
 * with '*compile-asserts*' true.  See 'assert'.
 * Initially set to boolean value of cljs.spec.alpha/*runtime-asserts*.
 * Defaults to false.
 */
cljs.spec.alpha.check_asserts = (function cljs$spec$alpha$check_asserts(flag){
return cljs.spec.alpha._STAR_runtime_asserts_STAR_ = flag;
});
/**
 * Do not call this directly, use 'assert'.
 */
cljs.spec.alpha.assert_STAR_ = (function cljs$spec$alpha$assert_STAR_(spec,x){
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec,x))){
return x;
} else {
var ed = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.explain_data_STAR_(spec,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,x),new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"assertion-failed","assertion-failed",-970534477))], 0));
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Spec assertion failed\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__10531__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_21742_21744 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_21743_21745 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_21742_21744,_STAR_print_fn_STAR_21743_21745,sb__10531__auto__,ed){
return (function (x__10532__auto__){
return sb__10531__auto__.append(x__10532__auto__);
});})(_STAR_print_newline_STAR_21742_21744,_STAR_print_fn_STAR_21743_21745,sb__10531__auto__,ed))
;

try{cljs.spec.alpha.explain_out(ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_21743_21745;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_21742_21744;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__10531__auto__)].join('');
})())].join('')));
}
});
