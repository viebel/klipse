// Compiled by ClojureScript 1.9.908 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__16086__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__16083 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__16084 = cljs.core.seq.call(null,vec__16083);
var first__16085 = cljs.core.first.call(null,seq__16084);
var seq__16084__$1 = cljs.core.next.call(null,seq__16084);
var tag = first__16085;
var body = seq__16084__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__16086 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16087__i = 0, G__16087__a = new Array(arguments.length -  0);
while (G__16087__i < G__16087__a.length) {G__16087__a[G__16087__i] = arguments[G__16087__i + 0]; ++G__16087__i;}
  args = new cljs.core.IndexedSeq(G__16087__a,0,null);
} 
return G__16086__delegate.call(this,args);};
G__16086.cljs$lang$maxFixedArity = 0;
G__16086.cljs$lang$applyTo = (function (arglist__16088){
var args = cljs.core.seq(arglist__16088);
return G__16086__delegate(args);
});
G__16086.cljs$core$IFn$_invoke$arity$variadic = G__16086__delegate;
return G__16086;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__9245__auto__ = (function sablono$core$update_arglists_$_iter__16089(s__16090){
return (new cljs.core.LazySeq(null,(function (){
var s__16090__$1 = s__16090;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__16090__$1);
if(temp__6753__auto__){
var s__16090__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16090__$2)){
var c__9243__auto__ = cljs.core.chunk_first.call(null,s__16090__$2);
var size__9244__auto__ = cljs.core.count.call(null,c__9243__auto__);
var b__16092 = cljs.core.chunk_buffer.call(null,size__9244__auto__);
if((function (){var i__16091 = (0);
while(true){
if((i__16091 < size__9244__auto__)){
var args = cljs.core._nth.call(null,c__9243__auto__,i__16091);
cljs.core.chunk_append.call(null,b__16092,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__16093 = (i__16091 + (1));
i__16091 = G__16093;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16092),sablono$core$update_arglists_$_iter__16089.call(null,cljs.core.chunk_rest.call(null,s__16090__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16092),null);
}
} else {
var args = cljs.core.first.call(null,s__16090__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__16089.call(null,cljs.core.rest.call(null,s__16090__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9245__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__9647__auto__ = [];
var len__9640__auto___16099 = arguments.length;
var i__9641__auto___16100 = (0);
while(true){
if((i__9641__auto___16100 < len__9640__auto___16099)){
args__9647__auto__.push((arguments[i__9641__auto___16100]));

var G__16101 = (i__9641__auto___16100 + (1));
i__9641__auto___16100 = G__16101;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((0) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__9648__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__9245__auto__ = (function sablono$core$iter__16095(s__16096){
return (new cljs.core.LazySeq(null,(function (){
var s__16096__$1 = s__16096;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__16096__$1);
if(temp__6753__auto__){
var s__16096__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16096__$2)){
var c__9243__auto__ = cljs.core.chunk_first.call(null,s__16096__$2);
var size__9244__auto__ = cljs.core.count.call(null,c__9243__auto__);
var b__16098 = cljs.core.chunk_buffer.call(null,size__9244__auto__);
if((function (){var i__16097 = (0);
while(true){
if((i__16097 < size__9244__auto__)){
var style = cljs.core._nth.call(null,c__9243__auto__,i__16097);
cljs.core.chunk_append.call(null,b__16098,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__16102 = (i__16097 + (1));
i__16097 = G__16102;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16098),sablono$core$iter__16095.call(null,cljs.core.chunk_rest.call(null,s__16096__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16098),null);
}
} else {
var style = cljs.core.first.call(null,s__16096__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__16095.call(null,cljs.core.rest.call(null,s__16096__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9245__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq16094){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16094));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to16103 = (function sablono$core$link_to16103(var_args){
var args__9647__auto__ = [];
var len__9640__auto___16106 = arguments.length;
var i__9641__auto___16107 = (0);
while(true){
if((i__9641__auto___16107 < len__9640__auto___16106)){
args__9647__auto__.push((arguments[i__9641__auto___16107]));

var G__16108 = (i__9641__auto___16107 + (1));
i__9641__auto___16107 = G__16108;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((1) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to16103.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9648__auto__);
});

sablono.core.link_to16103.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to16103.cljs$lang$maxFixedArity = (1);

sablono.core.link_to16103.cljs$lang$applyTo = (function (seq16104){
var G__16105 = cljs.core.first.call(null,seq16104);
var seq16104__$1 = cljs.core.next.call(null,seq16104);
return sablono.core.link_to16103.cljs$core$IFn$_invoke$arity$variadic(G__16105,seq16104__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to16103);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to16109 = (function sablono$core$mail_to16109(var_args){
var args__9647__auto__ = [];
var len__9640__auto___16116 = arguments.length;
var i__9641__auto___16117 = (0);
while(true){
if((i__9641__auto___16117 < len__9640__auto___16116)){
args__9647__auto__.push((arguments[i__9641__auto___16117]));

var G__16118 = (i__9641__auto___16117 + (1));
i__9641__auto___16117 = G__16118;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((1) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to16109.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9648__auto__);
});

sablono.core.mail_to16109.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__16112){
var vec__16113 = p__16112;
var content = cljs.core.nth.call(null,vec__16113,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__8363__auto__ = content;
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to16109.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to16109.cljs$lang$applyTo = (function (seq16110){
var G__16111 = cljs.core.first.call(null,seq16110);
var seq16110__$1 = cljs.core.next.call(null,seq16110);
return sablono.core.mail_to16109.cljs$core$IFn$_invoke$arity$variadic(G__16111,seq16110__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to16109);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list16119 = (function sablono$core$unordered_list16119(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__9245__auto__ = (function sablono$core$unordered_list16119_$_iter__16120(s__16121){
return (new cljs.core.LazySeq(null,(function (){
var s__16121__$1 = s__16121;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__16121__$1);
if(temp__6753__auto__){
var s__16121__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16121__$2)){
var c__9243__auto__ = cljs.core.chunk_first.call(null,s__16121__$2);
var size__9244__auto__ = cljs.core.count.call(null,c__9243__auto__);
var b__16123 = cljs.core.chunk_buffer.call(null,size__9244__auto__);
if((function (){var i__16122 = (0);
while(true){
if((i__16122 < size__9244__auto__)){
var x = cljs.core._nth.call(null,c__9243__auto__,i__16122);
cljs.core.chunk_append.call(null,b__16123,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__16124 = (i__16122 + (1));
i__16122 = G__16124;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16123),sablono$core$unordered_list16119_$_iter__16120.call(null,cljs.core.chunk_rest.call(null,s__16121__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16123),null);
}
} else {
var x = cljs.core.first.call(null,s__16121__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list16119_$_iter__16120.call(null,cljs.core.rest.call(null,s__16121__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9245__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list16119);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list16125 = (function sablono$core$ordered_list16125(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__9245__auto__ = (function sablono$core$ordered_list16125_$_iter__16126(s__16127){
return (new cljs.core.LazySeq(null,(function (){
var s__16127__$1 = s__16127;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__16127__$1);
if(temp__6753__auto__){
var s__16127__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16127__$2)){
var c__9243__auto__ = cljs.core.chunk_first.call(null,s__16127__$2);
var size__9244__auto__ = cljs.core.count.call(null,c__9243__auto__);
var b__16129 = cljs.core.chunk_buffer.call(null,size__9244__auto__);
if((function (){var i__16128 = (0);
while(true){
if((i__16128 < size__9244__auto__)){
var x = cljs.core._nth.call(null,c__9243__auto__,i__16128);
cljs.core.chunk_append.call(null,b__16129,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__16130 = (i__16128 + (1));
i__16128 = G__16130;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16129),sablono$core$ordered_list16125_$_iter__16126.call(null,cljs.core.chunk_rest.call(null,s__16127__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16129),null);
}
} else {
var x = cljs.core.first.call(null,s__16127__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list16125_$_iter__16126.call(null,cljs.core.rest.call(null,s__16127__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9245__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list16125);
/**
 * Create an image element.
 */
sablono.core.image16131 = (function sablono$core$image16131(var_args){
var G__16133 = arguments.length;
switch (G__16133) {
case 1:
return sablono.core.image16131.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image16131.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image16131.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image16131.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image16131.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image16131);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__16135_SHARP_,p2__16136_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16135_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__16136_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__16137_SHARP_,p2__16138_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16137_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__16138_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__8363__auto__ = value;
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field16139 = (function sablono$core$color_field16139(var_args){
var G__16141 = arguments.length;
switch (G__16141) {
case 1:
return sablono.core.color_field16139.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field16139.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field16139.cljs$core$IFn$_invoke$arity$1 = (function (name__16073__auto__){
return sablono.core.color_field16139.call(null,name__16073__auto__,null);
});

sablono.core.color_field16139.cljs$core$IFn$_invoke$arity$2 = (function (name__16073__auto__,value__16074__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__16073__auto__,value__16074__auto__);
});

sablono.core.color_field16139.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field16139);

/**
 * Creates a date input field.
 */
sablono.core.date_field16142 = (function sablono$core$date_field16142(var_args){
var G__16144 = arguments.length;
switch (G__16144) {
case 1:
return sablono.core.date_field16142.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field16142.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field16142.cljs$core$IFn$_invoke$arity$1 = (function (name__16073__auto__){
return sablono.core.date_field16142.call(null,name__16073__auto__,null);
});

sablono.core.date_field16142.cljs$core$IFn$_invoke$arity$2 = (function (name__16073__auto__,value__16074__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__16073__auto__,value__16074__auto__);
});

sablono.core.date_field16142.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field16142);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field16145 = (function sablono$core$datetime_field16145(var_args){
var G__16147 = arguments.length;
switch (G__16147) {
case 1:
return sablono.core.datetime_field16145.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field16145.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field16145.cljs$core$IFn$_invoke$arity$1 = (function (name__16073__auto__){
return sablono.core.datetime_field16145.call(null,name__16073__auto__,null);
});

sablono.core.datetime_field16145.cljs$core$IFn$_invoke$arity$2 = (function (name__16073__auto__,value__16074__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__16073__auto__,value__16074__auto__);
});

sablono.core.datetime_field16145.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field16145);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field16148 = (function sablono$core$datetime_local_field16148(var_args){
var G__16150 = arguments.length;
switch (G__16150) {
case 1:
return sablono.core.datetime_local_field16148.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field16148.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field16148.cljs$core$IFn$_invoke$arity$1 = (function (name__16073__auto__){
return sablono.core.datetime_local_field16148.call(null,name__16073__auto__,null);
});

sablono.core.datetime_local_field16148.cljs$core$IFn$_invoke$arity$2 = (function (name__16073__auto__,value__16074__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__16073__auto__,value__16074__auto__);
});

sablono.core.datetime_local_field16148.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field16148);

/**
 * Creates a email input field.
 */
sablono.core.email_field16151 = (function sablono$core$email_field16151(var_args){
var G__16153 = arguments.length;
switch (G__16153) {
case 1:
return sablono.core.email_field16151.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field16151.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field16151.cljs$core$IFn$_invoke$arity$1 = (function (name__16073__auto__){
return sablono.core.email_field16151.call(null,name__16073__auto__,null);
});

sablono.core.email_field16151.cljs$core$IFn$_invoke$arity$2 = (function (name__16073__auto__,value__16074__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__16073__auto__,value__16074__auto__);
});

sablono.core.email_field16151.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field16151);

/**
 * Creates a file input field.
 */
sablono.core.file_field16154 = (function sablono$core$file_field16154(var_args){
var G__16156 = arguments.length;
switch (G__16156) {
case 1:
return sablono.core.file_field16154.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field16154.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field16154.cljs$core$IFn$_invoke$arity$1 = (function (name__16073__auto__){
return sablono.core.file_field16154.call(null,name__16073__auto__,null);
});

sablono.core.file_field16154.cljs$core$IFn$_invoke$arity$2 = (function (name__16073__auto__,value__16074__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__16073__auto__,value__16074__auto__);
});

sablono.core.file_field16154.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field16154);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field16157 = (function sablono$core$hidden_field16157(var_args){
var G__16159 = arguments.length;
switch (G__16159) {
case 1:
return sablono.core.hidden_field16157.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field16157.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field16157.cljs$core$IFn$_invoke$arity$1 = (function (name__16073__auto__){
return sablono.core.hidden_field16157.call(null,name__16073__auto__,null);
});

sablono.core.hidden_field16157.cljs$core$IFn$_invoke$arity$2 = (function (name__16073__auto__,value__16074__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__16073__auto__,value__16074__auto__);
});

sablono.core.hidden_field16157.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field16157);

/**
 * Creates a month input field.
 */
sablono.core.month_field16160 = (function sablono$core$month_field16160(var_args){
var G__16162 = arguments.length;
switch (G__16162) {
case 1:
return sablono.core.month_field16160.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field16160.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field16160.cljs$core$IFn$_invoke$arity$1 = (function (name__16073__auto__){
return sablono.core.month_field16160.call(null,name__16073__auto__,null);
});

sablono.core.month_field16160.cljs$core$IFn$_invoke$arity$2 = (function (name__16073__auto__,value__16074__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__16073__auto__,value__16074__auto__);
});

sablono.core.month_field16160.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field16160);

/**
 * Creates a number input field.
 */
sablono.core.number_field16163 = (function sablono$core$number_field16163(var_args){
var G__16165 = arguments.length;
switch (G__16165) {
case 1:
return sablono.core.number_field16163.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field16163.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field16163.cljs$core$IFn$_invoke$arity$1 = (function (name__16073__auto__){
return sablono.core.number_field16163.call(null,name__16073__auto__,null);
});

sablono.core.number_field16163.cljs$core$IFn$_invoke$arity$2 = (function (name__16073__auto__,value__16074__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__16073__auto__,value__16074__auto__);
});

sablono.core.number_field16163.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field16163);

/**
 * Creates a password input field.
 */
sablono.core.password_field16166 = (function sablono$core$password_field16166(var_args){
var G__16168 = arguments.length;
switch (G__16168) {
case 1:
return sablono.core.password_field16166.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field16166.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field16166.cljs$core$IFn$_invoke$arity$1 = (function (name__16073__auto__){
return sablono.core.password_field16166.call(null,name__16073__auto__,null);
});

sablono.core.password_field16166.cljs$core$IFn$_invoke$arity$2 = (function (name__16073__auto__,value__16074__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__16073__auto__,value__16074__auto__);
});

sablono.core.password_field16166.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field16166);

/**
 * Creates a range input field.
 */
sablono.core.range_field16169 = (function sablono$core$range_field16169(var_args){
var G__16171 = arguments.length;
switch (G__16171) {
case 1:
return sablono.core.range_field16169.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field16169.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field16169.cljs$core$IFn$_invoke$arity$1 = (function (name__16073__auto__){
return sablono.core.range_field16169.call(null,name__16073__auto__,null);
});

sablono.core.range_field16169.cljs$core$IFn$_invoke$arity$2 = (function (name__16073__auto__,value__16074__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__16073__auto__,value__16074__auto__);
});

sablono.core.range_field16169.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field16169);

/**
 * Creates a search input field.
 */
sablono.core.search_field16172 = (function sablono$core$search_field16172(var_args){
var G__16174 = arguments.length;
switch (G__16174) {
case 1:
return sablono.core.search_field16172.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field16172.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field16172.cljs$core$IFn$_invoke$arity$1 = (function (name__16073__auto__){
return sablono.core.search_field16172.call(null,name__16073__auto__,null);
});

sablono.core.search_field16172.cljs$core$IFn$_invoke$arity$2 = (function (name__16073__auto__,value__16074__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__16073__auto__,value__16074__auto__);
});

sablono.core.search_field16172.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field16172);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field16175 = (function sablono$core$tel_field16175(var_args){
var G__16177 = arguments.length;
switch (G__16177) {
case 1:
return sablono.core.tel_field16175.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field16175.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field16175.cljs$core$IFn$_invoke$arity$1 = (function (name__16073__auto__){
return sablono.core.tel_field16175.call(null,name__16073__auto__,null);
});

sablono.core.tel_field16175.cljs$core$IFn$_invoke$arity$2 = (function (name__16073__auto__,value__16074__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__16073__auto__,value__16074__auto__);
});

sablono.core.tel_field16175.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field16175);

/**
 * Creates a text input field.
 */
sablono.core.text_field16178 = (function sablono$core$text_field16178(var_args){
var G__16180 = arguments.length;
switch (G__16180) {
case 1:
return sablono.core.text_field16178.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field16178.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field16178.cljs$core$IFn$_invoke$arity$1 = (function (name__16073__auto__){
return sablono.core.text_field16178.call(null,name__16073__auto__,null);
});

sablono.core.text_field16178.cljs$core$IFn$_invoke$arity$2 = (function (name__16073__auto__,value__16074__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__16073__auto__,value__16074__auto__);
});

sablono.core.text_field16178.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field16178);

/**
 * Creates a time input field.
 */
sablono.core.time_field16181 = (function sablono$core$time_field16181(var_args){
var G__16183 = arguments.length;
switch (G__16183) {
case 1:
return sablono.core.time_field16181.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field16181.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field16181.cljs$core$IFn$_invoke$arity$1 = (function (name__16073__auto__){
return sablono.core.time_field16181.call(null,name__16073__auto__,null);
});

sablono.core.time_field16181.cljs$core$IFn$_invoke$arity$2 = (function (name__16073__auto__,value__16074__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__16073__auto__,value__16074__auto__);
});

sablono.core.time_field16181.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field16181);

/**
 * Creates a url input field.
 */
sablono.core.url_field16184 = (function sablono$core$url_field16184(var_args){
var G__16186 = arguments.length;
switch (G__16186) {
case 1:
return sablono.core.url_field16184.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field16184.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field16184.cljs$core$IFn$_invoke$arity$1 = (function (name__16073__auto__){
return sablono.core.url_field16184.call(null,name__16073__auto__,null);
});

sablono.core.url_field16184.cljs$core$IFn$_invoke$arity$2 = (function (name__16073__auto__,value__16074__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__16073__auto__,value__16074__auto__);
});

sablono.core.url_field16184.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field16184);

/**
 * Creates a week input field.
 */
sablono.core.week_field16187 = (function sablono$core$week_field16187(var_args){
var G__16189 = arguments.length;
switch (G__16189) {
case 1:
return sablono.core.week_field16187.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field16187.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field16187.cljs$core$IFn$_invoke$arity$1 = (function (name__16073__auto__){
return sablono.core.week_field16187.call(null,name__16073__auto__,null);
});

sablono.core.week_field16187.cljs$core$IFn$_invoke$arity$2 = (function (name__16073__auto__,value__16074__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__16073__auto__,value__16074__auto__);
});

sablono.core.week_field16187.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field16187);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box16207 = (function sablono$core$check_box16207(var_args){
var G__16209 = arguments.length;
switch (G__16209) {
case 1:
return sablono.core.check_box16207.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box16207.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box16207.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box16207.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box16207.call(null,name,null);
});

sablono.core.check_box16207.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box16207.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box16207.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__8363__auto__ = value;
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box16207.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box16207);
/**
 * Creates a radio button.
 */
sablono.core.radio_button16211 = (function sablono$core$radio_button16211(var_args){
var G__16213 = arguments.length;
switch (G__16213) {
case 1:
return sablono.core.radio_button16211.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button16211.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button16211.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button16211.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button16211.call(null,group,null);
});

sablono.core.radio_button16211.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button16211.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button16211.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__8363__auto__ = value;
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button16211.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button16211);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options16215 = (function sablono$core$select_options16215(coll){
var iter__9245__auto__ = (function sablono$core$select_options16215_$_iter__16216(s__16217){
return (new cljs.core.LazySeq(null,(function (){
var s__16217__$1 = s__16217;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__16217__$1);
if(temp__6753__auto__){
var s__16217__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16217__$2)){
var c__9243__auto__ = cljs.core.chunk_first.call(null,s__16217__$2);
var size__9244__auto__ = cljs.core.count.call(null,c__9243__auto__);
var b__16219 = cljs.core.chunk_buffer.call(null,size__9244__auto__);
if((function (){var i__16218 = (0);
while(true){
if((i__16218 < size__9244__auto__)){
var x = cljs.core._nth.call(null,c__9243__auto__,i__16218);
cljs.core.chunk_append.call(null,b__16219,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__16220 = x;
var text = cljs.core.nth.call(null,vec__16220,(0),null);
var val = cljs.core.nth.call(null,vec__16220,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__16220,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options16215.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__16226 = (i__16218 + (1));
i__16218 = G__16226;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16219),sablono$core$select_options16215_$_iter__16216.call(null,cljs.core.chunk_rest.call(null,s__16217__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16219),null);
}
} else {
var x = cljs.core.first.call(null,s__16217__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__16223 = x;
var text = cljs.core.nth.call(null,vec__16223,(0),null);
var val = cljs.core.nth.call(null,vec__16223,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__16223,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options16215.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options16215_$_iter__16216.call(null,cljs.core.rest.call(null,s__16217__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9245__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options16215);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down16227 = (function sablono$core$drop_down16227(var_args){
var G__16229 = arguments.length;
switch (G__16229) {
case 2:
return sablono.core.drop_down16227.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down16227.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down16227.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down16227.call(null,name,options,null);
});

sablono.core.drop_down16227.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down16227.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down16227);
/**
 * Creates a text area element.
 */
sablono.core.text_area16231 = (function sablono$core$text_area16231(var_args){
var G__16233 = arguments.length;
switch (G__16233) {
case 1:
return sablono.core.text_area16231.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area16231.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area16231.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area16231.call(null,name,null);
});

sablono.core.text_area16231.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__8363__auto__ = value;
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area16231.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area16231);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label16235 = (function sablono$core$label16235(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label16235);
/**
 * Creates a submit button.
 */
sablono.core.submit_button16236 = (function sablono$core$submit_button16236(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button16236);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button16237 = (function sablono$core$reset_button16237(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button16237);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to16238 = (function sablono$core$form_to16238(var_args){
var args__9647__auto__ = [];
var len__9640__auto___16245 = arguments.length;
var i__9641__auto___16246 = (0);
while(true){
if((i__9641__auto___16246 < len__9640__auto___16245)){
args__9647__auto__.push((arguments[i__9641__auto___16246]));

var G__16247 = (i__9641__auto___16246 + (1));
i__9641__auto___16246 = G__16247;
continue;
} else {
}
break;
}

var argseq__9648__auto__ = ((((1) < args__9647__auto__.length))?(new cljs.core.IndexedSeq(args__9647__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to16238.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9648__auto__);
});

sablono.core.form_to16238.cljs$core$IFn$_invoke$arity$variadic = (function (p__16241,body){
var vec__16242 = p__16241;
var method = cljs.core.nth.call(null,vec__16242,(0),null);
var action = cljs.core.nth.call(null,vec__16242,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to16238.cljs$lang$maxFixedArity = (1);

sablono.core.form_to16238.cljs$lang$applyTo = (function (seq16239){
var G__16240 = cljs.core.first.call(null,seq16239);
var seq16239__$1 = cljs.core.next.call(null,seq16239);
return sablono.core.form_to16238.cljs$core$IFn$_invoke$arity$variadic(G__16240,seq16239__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to16238);

//# sourceMappingURL=core.js.map
