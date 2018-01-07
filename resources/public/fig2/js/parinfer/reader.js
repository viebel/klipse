// Compiled by ClojureScript 1.9.908 {}
goog.provide('parinfer.reader');
goog.require('cljs.core');
parinfer.reader.matching_delim = new cljs.core.PersistentArrayMap(null, 6, ["{","}","}","{","[","]","]","[","(",")",")","("], null);
parinfer.reader.opening_delim_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["(",null,"{",null,"[",null], null), null);
parinfer.reader.closing_delim_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["]",null,")",null,"}",null], null), null);
parinfer.reader.whitespace_QMARK_ = (function parinfer$reader$whitespace_QMARK_(ch){
return cljs.core.re_find.call(null,/\s/,ch);
});
parinfer.reader.prev_ch = (function parinfer$reader$prev_ch(stack){
return new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(cljs.core.peek.call(null,stack));
});
/**
 * Next character will be escaped.
 */
parinfer.reader.escaping_QMARK_ = (function parinfer$reader$escaping_QMARK_(stack){
return cljs.core._EQ_.call(null,"\\",parinfer.reader.prev_ch.call(null,stack));
});
/**
 * Next character is inside a string.
 */
parinfer.reader.in_str_QMARK_ = (function parinfer$reader$in_str_QMARK_(stack){
var ch = parinfer.reader.prev_ch.call(null,(function (){var G__22749 = stack;
if(cljs.core.truth_(parinfer.reader.escaping_QMARK_.call(null,stack))){
return cljs.core.pop.call(null,G__22749);
} else {
return G__22749;
}
})());
return cljs.core._EQ_.call(null,"\"",ch);
});
/**
 * Next character is inside a comment.
 */
parinfer.reader.in_comment_QMARK_ = (function parinfer$reader$in_comment_QMARK_(stack){
return cljs.core._EQ_.call(null,";",parinfer.reader.prev_ch.call(null,stack));
});
/**
 * Next character is inside actual code.
 */
parinfer.reader.in_code_QMARK_ = (function parinfer$reader$in_code_QMARK_(stack){
return (cljs.core.not.call(null,parinfer.reader.in_str_QMARK_.call(null,stack))) && (cljs.core.not.call(null,parinfer.reader.in_comment_QMARK_.call(null,stack)));
});
/**
 * Determine if the given closing delimiter can be used next, assuming we are inside code.
 */
parinfer.reader.valid_closer_QMARK_ = (function parinfer$reader$valid_closer_QMARK_(stack,ch){
return cljs.core._EQ_.call(null,parinfer.reader.prev_ch.call(null,stack),parinfer.reader.matching_delim.call(null,ch));
});
if(typeof parinfer.reader.push_char_STAR_ !== 'undefined'){
} else {
/**
 * Update the delimiter stack with the given character.
 */
parinfer.reader.push_char_STAR_ = (function (){var method_table__9416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9420__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"parinfer.reader","push-char*"),((function (method_table__9416__auto__,prefer_table__9417__auto__,method_cache__9418__auto__,cached_hierarchy__9419__auto__,hierarchy__9420__auto__){
return (function (p__22750){
var map__22751 = p__22750;
var map__22751__$1 = ((((!((map__22751 == null)))?((((map__22751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22751.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22751):map__22751);
var ch = cljs.core.get.call(null,map__22751__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
if(cljs.core.truth_(parinfer.reader.opening_delim_QMARK_.call(null,ch))){
return new cljs.core.Keyword(null,"open","open",-1763596448);
} else {
if(cljs.core.truth_(parinfer.reader.closing_delim_QMARK_.call(null,ch))){
return new cljs.core.Keyword(null,"close","close",1835149582);
} else {
return ch;

}
}
});})(method_table__9416__auto__,prefer_table__9417__auto__,method_cache__9418__auto__,cached_hierarchy__9419__auto__,hierarchy__9420__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9420__auto__,method_table__9416__auto__,prefer_table__9417__auto__,method_cache__9418__auto__,cached_hierarchy__9419__auto__));
})();
}
cljs.core._add_method.call(null,parinfer.reader.push_char_STAR_,"\t",(function (p__22753){
var map__22754 = p__22753;
var map__22754__$1 = ((((!((map__22754 == null)))?((((map__22754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22754.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22754):map__22754);
var stack = cljs.core.get.call(null,map__22754__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
if(cljs.core.not.call(null,parinfer.reader.in_str_QMARK_.call(null,stack))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ch","ch",-554717905),"  "], null);
} else {
return null;

}
}));
cljs.core._add_method.call(null,parinfer.reader.push_char_STAR_,new cljs.core.Keyword(null,"open","open",-1763596448),(function (p__22756){
var map__22757 = p__22756;
var map__22757__$1 = ((((!((map__22757 == null)))?((((map__22757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22757.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22757):map__22757);
var state = map__22757__$1;
var stack = cljs.core.get.call(null,map__22757__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
if(cljs.core.truth_(parinfer.reader.escaping_QMARK_.call(null,stack))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop.call(null,stack)], null);
} else {
if(cljs.core.truth_(parinfer.reader.in_code_QMARK_.call(null,stack))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj.call(null,stack,cljs.core.select_keys.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x-pos","x-pos",-382213783),new cljs.core.Keyword(null,"ch","ch",-554717905),new cljs.core.Keyword(null,"indent-delta","indent-delta",-1753368232)], null)))], null);
} else {
return null;

}
}
}));
cljs.core._add_method.call(null,parinfer.reader.push_char_STAR_,new cljs.core.Keyword(null,"close","close",1835149582),(function (p__22759){
var map__22760 = p__22759;
var map__22760__$1 = ((((!((map__22760 == null)))?((((map__22760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22760.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22760):map__22760);
var stack = cljs.core.get.call(null,map__22760__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var backup = cljs.core.get.call(null,map__22760__$1,new cljs.core.Keyword(null,"backup","backup",26347393));
var ch = cljs.core.get.call(null,map__22760__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
if(cljs.core.truth_(parinfer.reader.escaping_QMARK_.call(null,stack))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop.call(null,stack)], null);
} else {
if(cljs.core.truth_(parinfer.reader.in_code_QMARK_.call(null,stack))){
if(cljs.core.truth_(parinfer.reader.valid_closer_QMARK_.call(null,stack,ch))){
var opener = cljs.core.peek.call(null,stack);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop.call(null,stack),new cljs.core.Keyword(null,"backup","backup",26347393),cljs.core.conj.call(null,backup,opener)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ch","ch",-554717905),""], null);
}
} else {
return null;

}
}
}));
cljs.core._add_method.call(null,parinfer.reader.push_char_STAR_,";",(function (p__22762){
var map__22763 = p__22762;
var map__22763__$1 = ((((!((map__22763 == null)))?((((map__22763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22763.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22763):map__22763);
var state = map__22763__$1;
var stack = cljs.core.get.call(null,map__22763__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
if(cljs.core.truth_(parinfer.reader.escaping_QMARK_.call(null,stack))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop.call(null,stack)], null);
} else {
if(cljs.core.truth_(parinfer.reader.in_code_QMARK_.call(null,stack))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj.call(null,stack,cljs.core.select_keys.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x-pos","x-pos",-382213783),new cljs.core.Keyword(null,"ch","ch",-554717905)], null)))], null);
} else {
return null;

}
}
}));
cljs.core._add_method.call(null,parinfer.reader.push_char_STAR_,"\n",(function (p__22765){
var map__22766 = p__22765;
var map__22766__$1 = ((((!((map__22766 == null)))?((((map__22766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22766.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22766):map__22766);
var stack = cljs.core.get.call(null,map__22766__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var stack__$1 = (function (){var G__22768 = stack;
if(cljs.core.truth_(parinfer.reader.escaping_QMARK_.call(null,stack))){
return cljs.core.pop.call(null,G__22768);
} else {
return G__22768;
}
})();
var stack__$2 = (function (){var G__22769 = stack__$1;
if(cljs.core.truth_(parinfer.reader.in_comment_QMARK_.call(null,stack__$1))){
return cljs.core.pop.call(null,G__22769);
} else {
return G__22769;
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",-554717905),"",new cljs.core.Keyword(null,"stack","stack",-793405930),stack__$2], null);
}));
cljs.core._add_method.call(null,parinfer.reader.push_char_STAR_,"\\",(function (p__22770){
var map__22771 = p__22770;
var map__22771__$1 = ((((!((map__22771 == null)))?((((map__22771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22771.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22771):map__22771);
var state = map__22771__$1;
var stack = cljs.core.get.call(null,map__22771__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
if(cljs.core.truth_(parinfer.reader.escaping_QMARK_.call(null,stack))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop.call(null,stack)], null);
} else {
if(cljs.core.truth_(parinfer.reader.in_comment_QMARK_.call(null,stack))){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj.call(null,stack,cljs.core.select_keys.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x-pos","x-pos",-382213783),new cljs.core.Keyword(null,"ch","ch",-554717905)], null)))], null);

}
}
}));
cljs.core._add_method.call(null,parinfer.reader.push_char_STAR_,"\"",(function (p__22773){
var map__22774 = p__22773;
var map__22774__$1 = ((((!((map__22774 == null)))?((((map__22774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22774.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22774):map__22774);
var state = map__22774__$1;
var stack = cljs.core.get.call(null,map__22774__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
if(cljs.core.truth_(parinfer.reader.escaping_QMARK_.call(null,stack))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop.call(null,stack)], null);
} else {
if(cljs.core.truth_(parinfer.reader.in_str_QMARK_.call(null,stack))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop.call(null,stack)], null);
} else {
if(cljs.core.truth_(parinfer.reader.in_comment_QMARK_.call(null,stack))){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj.call(null,stack,cljs.core.select_keys.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x-pos","x-pos",-382213783),new cljs.core.Keyword(null,"ch","ch",-554717905)], null)))], null);

}
}
}
}));
cljs.core._add_method.call(null,parinfer.reader.push_char_STAR_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__22776){
var map__22777 = p__22776;
var map__22777__$1 = ((((!((map__22777 == null)))?((((map__22777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22777.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22777):map__22777);
var stack = cljs.core.get.call(null,map__22777__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
if(cljs.core.truth_(parinfer.reader.escaping_QMARK_.call(null,stack))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop.call(null,stack)], null);
} else {
return null;

}
}));
parinfer.reader.push_char = (function parinfer$reader$push_char(state){
var new_data = parinfer.reader.push_char_STAR_.call(null,state);
return cljs.core.merge_with.call(null,((function (new_data){
return (function (p1__22780_SHARP_,p2__22779_SHARP_){
var or__8363__auto__ = p2__22779_SHARP_;
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return p1__22780_SHARP_;
}
});})(new_data))
,state,new_data);
});

//# sourceMappingURL=reader.js.map
