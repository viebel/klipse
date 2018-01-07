// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.tools.reader.edn');
goog.require('cljs.core');
goog.require('cljs.tools.reader.impl.errors');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.tools.reader.impl.utils');
goog.require('cljs.tools.reader.impl.commons');
goog.require('cljs.tools.reader');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');


cljs.tools.reader.edn.macro_terminating_QMARK_ = (function cljs$tools$reader$edn$macro_terminating_QMARK_(ch){
var and__8351__auto__ = !(("#" === ch));
if(and__8351__auto__){
var and__8351__auto____$1 = !(("'" === ch));
if(and__8351__auto____$1){
var and__8351__auto____$2 = !((":" === ch));
if(and__8351__auto____$2){
return cljs.tools.reader.edn.macros.call(null,ch);
} else {
return and__8351__auto____$2;
}
} else {
return and__8351__auto____$1;
}
} else {
return and__8351__auto__;
}
});
cljs.tools.reader.edn.not_constituent_QMARK_ = (function cljs$tools$reader$edn$not_constituent_QMARK_(ch){
return (("@" === ch)) || (("`" === ch)) || (("~" === ch));
});
cljs.tools.reader.edn.read_token = (function cljs$tools$reader$edn$read_token(var_args){
var G__17813 = arguments.length;
switch (G__17813) {
case 3:
return cljs.tools.reader.edn.read_token.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.tools.reader.edn.read_token.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.tools.reader.edn.read_token.cljs$core$IFn$_invoke$arity$3 = (function (rdr,kind,initch){
return cljs.tools.reader.edn.read_token.call(null,rdr,kind,initch,true);
});

cljs.tools.reader.edn.read_token.cljs$core$IFn$_invoke$arity$4 = (function (rdr,kind,initch,validate_leading_QMARK_){
if(cljs.core.not.call(null,initch)){
return cljs.tools.reader.impl.errors.throw_eof_at_start.call(null,rdr,kind);
} else {
if(cljs.core.truth_((function (){var and__8351__auto__ = validate_leading_QMARK_;
if(cljs.core.truth_(and__8351__auto__)){
return cljs.tools.reader.edn.not_constituent_QMARK_.call(null,initch);
} else {
return and__8351__auto__;
}
})())){
return cljs.tools.reader.impl.errors.throw_bad_char.call(null,rdr,kind,initch);
} else {
var sb = (new goog.string.StringBuffer());
var ch = (function (){
cljs.tools.reader.reader_types.unread.call(null,rdr,initch);

return initch;
})()
;
while(true){
if((cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch)) || (cljs.tools.reader.edn.macro_terminating_QMARK_.call(null,ch)) || ((ch == null))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
if(cljs.tools.reader.edn.not_constituent_QMARK_.call(null,ch)){
return cljs.tools.reader.impl.errors.throw_bad_char.call(null,rdr,kind,ch);
} else {
var G__17816 = (function (){var G__17814 = sb;
G__17814.append(cljs.tools.reader.reader_types.read_char.call(null,rdr));

return G__17814;
})();
var G__17817 = cljs.tools.reader.reader_types.peek_char.call(null,rdr);
sb = G__17816;
ch = G__17817;
continue;
}
}
break;
}

}
}
});

cljs.tools.reader.edn.read_token.cljs$lang$maxFixedArity = 4;

cljs.tools.reader.edn.read_dispatch = (function cljs$tools$reader$edn$read_dispatch(rdr,_,opts){
var temp__6751__auto__ = cljs.tools.reader.reader_types.read_char.call(null,rdr);
if(cljs.core.truth_(temp__6751__auto__)){
var ch = temp__6751__auto__;
var temp__6751__auto____$1 = cljs.tools.reader.edn.dispatch_macros.call(null,ch);
if(cljs.core.truth_(temp__6751__auto____$1)){
var dm = temp__6751__auto____$1;
return dm.call(null,rdr,ch,opts);
} else {
var temp__6751__auto____$2 = cljs.tools.reader.edn.read_tagged.call(null,(function (){var G__17818 = rdr;
cljs.tools.reader.reader_types.unread.call(null,G__17818,ch);

return G__17818;
})(),ch,opts);
if(cljs.core.truth_(temp__6751__auto____$2)){
var obj = temp__6751__auto____$2;
return obj;
} else {
return cljs.tools.reader.impl.errors.throw_no_dispatch.call(null,rdr,ch);
}
}
} else {
return cljs.tools.reader.impl.errors.throw_eof_at_dispatch.call(null,rdr);
}
});
cljs.tools.reader.edn.read_unmatched_delimiter = (function cljs$tools$reader$edn$read_unmatched_delimiter(rdr,ch,opts){
return cljs.tools.reader.impl.errors.throw_unmatch_delimiter.call(null,rdr,ch);
});
cljs.tools.reader.edn.read_unicode_char = (function cljs$tools$reader$edn$read_unicode_char(var_args){
var G__17820 = arguments.length;
switch (G__17820) {
case 4:
return cljs.tools.reader.edn.read_unicode_char.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.tools.reader.edn.read_unicode_char.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.tools.reader.edn.read_unicode_char.cljs$core$IFn$_invoke$arity$4 = (function (token,offset,length,base){
var l = (offset + length);
if((cljs.core.count.call(null,token) === l)){
} else {
cljs.tools.reader.impl.errors.throw_invalid_unicode_literal.call(null,null,token);
}

var i = offset;
var uc = (0);
while(true){
if((i === l)){
return String.fromCharCode(uc);
} else {
var d = cljs.tools.reader.char_code.call(null,cljs.core.nth.call(null,token,i),base);
if((d === (-1))){
return cljs.tools.reader.impl.errors.throw_invalid_unicode_digit_in_token.call(null,null,cljs.core.nth.call(null,token,i),token);
} else {
var G__17822 = (i + (1));
var G__17823 = (d + (uc * base));
i = G__17822;
uc = G__17823;
continue;
}
}
break;
}
});

cljs.tools.reader.edn.read_unicode_char.cljs$core$IFn$_invoke$arity$5 = (function (rdr,initch,base,length,exact_QMARK_){
var i = (1);
var uc = cljs.tools.reader.char_code.call(null,initch,base);
while(true){
if((uc === (-1))){
return cljs.tools.reader.impl.errors.throw_invalid_unicode_digit.call(null,rdr,initch);
} else {
if(!((i === length))){
var ch = cljs.tools.reader.reader_types.peek_char.call(null,rdr);
if(cljs.core.truth_((function (){var or__8363__auto__ = cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch);
if(or__8363__auto__){
return or__8363__auto__;
} else {
var or__8363__auto____$1 = cljs.tools.reader.edn.macros.call(null,ch);
if(cljs.core.truth_(or__8363__auto____$1)){
return or__8363__auto____$1;
} else {
return (ch == null);
}
}
})())){
if(cljs.core.truth_(exact_QMARK_)){
return cljs.tools.reader.impl.errors.throw_invalid_unicode_len.call(null,rdr,i,length);
} else {
return String.fromCharCode(uc);
}
} else {
var d = cljs.tools.reader.char_code.call(null,ch,base);
cljs.tools.reader.reader_types.read_char.call(null,rdr);

if((d === (-1))){
return cljs.tools.reader.impl.errors.throw_invalid_unicode_digit.call(null,rdr,ch);
} else {
var G__17824 = (i + (1));
var G__17825 = (d + (uc * base));
i = G__17824;
uc = G__17825;
continue;
}
}
} else {
return String.fromCharCode(uc);
}
}
break;
}
});

cljs.tools.reader.edn.read_unicode_char.cljs$lang$maxFixedArity = 5;

cljs.tools.reader.edn.upper_limit = ("\uD7FF" | (0));
cljs.tools.reader.edn.lower_limit = ("\uE000" | (0));
cljs.tools.reader.edn.read_char_STAR_ = (function cljs$tools$reader$edn$read_char_STAR_(rdr,backslash,opts){
var ch = cljs.tools.reader.reader_types.read_char.call(null,rdr);
if(!((ch == null))){
var token = (((cljs.tools.reader.edn.macro_terminating_QMARK_.call(null,ch)) || (cljs.tools.reader.edn.not_constituent_QMARK_.call(null,ch)) || (cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ch)].join(''):cljs.tools.reader.edn.read_token.call(null,rdr,new cljs.core.Keyword(null,"character","character",380652989),ch,false));
var token_len = cljs.core.count.call(null,token);
if(((1) === token_len)){
return cljs.core.nth.call(null,token,(0));
} else {
if((token === "newline")){
return "\n";
} else {
if((token === "space")){
return " ";
} else {
if((token === "tab")){
return "\t";
} else {
if((token === "backspace")){
return "\b";
} else {
if((token === "formfeed")){
return "\f";
} else {
if((token === "return")){
return "\r";
} else {
if(cljs.core.truth_(goog.string.startsWith(token,"u"))){
var c = cljs.tools.reader.edn.read_unicode_char.call(null,token,(1),(4),(16));
var ic = c.charCodeAt();
if(((ic > cljs.tools.reader.edn.upper_limit)) && ((ic < cljs.tools.reader.edn.lower_limit))){
return cljs.tools.reader.impl.errors.throw_invalid_character_literal.call(null,rdr,c);
} else {
return c;
}
} else {
if(cljs.core.truth_(goog.string.startsWith(token,"o"))){
var len = (token_len - (1));
if((len > (3))){
return cljs.tools.reader.impl.errors.throw_invalid_octal_len.call(null,rdr,token);
} else {
var uc = cljs.tools.reader.edn.read_unicode_char.call(null,token,(1),len,(8));
if(((uc | (0)) > (255))){
return cljs.tools.reader.impl.errors.throw_bad_octal_number.call(null,rdr);
} else {
return uc;
}
}
} else {
return cljs.tools.reader.impl.errors.throw_unsupported_character.call(null,rdr,token);

}
}
}
}
}
}
}
}
}
} else {
return cljs.tools.reader.impl.errors.throw_eof_in_character.call(null,rdr);
}
});
cljs.tools.reader.edn.starting_line_col_info = (function cljs$tools$reader$edn$starting_line_col_info(rdr){
if(cljs.core.truth_(cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null,rdr))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.tools.reader.reader_types.get_line_number.call(null,rdr),(((cljs.tools.reader.reader_types.get_column_number.call(null,rdr) | (0)) - (1)) | (0))], null);
} else {
return null;
}
});
cljs.tools.reader.edn.read_delimited = (function cljs$tools$reader$edn$read_delimited(kind,delim,rdr,opts){
var vec__17826 = cljs.tools.reader.edn.starting_line_col_info.call(null,rdr);
var start_line = cljs.core.nth.call(null,vec__17826,(0),null);
var start_column = cljs.core.nth.call(null,vec__17826,(1),null);
var delim__$1 = cljs.tools.reader.impl.utils.char$.call(null,delim);
var a = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var ch = cljs.tools.reader.impl.commons.read_past.call(null,cljs.tools.reader.impl.utils.whitespace_QMARK_,rdr);
if(cljs.core.truth_(ch)){
} else {
cljs.tools.reader.impl.errors.throw_eof_delimited.call(null,rdr,kind,start_line,start_column,cljs.core.count.call(null,a));
}

if(cljs.core._EQ_.call(null,delim__$1,cljs.tools.reader.impl.utils.char$.call(null,ch))){
return cljs.core.persistent_BANG_.call(null,a);
} else {
var temp__6751__auto__ = cljs.tools.reader.edn.macros.call(null,ch);
if(cljs.core.truth_(temp__6751__auto__)){
var macrofn = temp__6751__auto__;
var mret = macrofn.call(null,rdr,ch,opts);
var G__17830 = ((!((mret === rdr)))?cljs.core.conj_BANG_.call(null,a,mret):a);
a = G__17830;
continue;
} else {
var o = cljs.tools.reader.edn.read.call(null,(function (){var G__17829 = rdr;
cljs.tools.reader.reader_types.unread.call(null,G__17829,ch);

return G__17829;
})(),true,null,opts);
var G__17831 = ((!((o === rdr)))?cljs.core.conj_BANG_.call(null,a,o):a);
a = G__17831;
continue;
}
}
break;
}
});
cljs.tools.reader.edn.read_list = (function cljs$tools$reader$edn$read_list(rdr,_,opts){
var the_list = cljs.tools.reader.edn.read_delimited.call(null,new cljs.core.Keyword(null,"list","list",765357683),")",rdr,opts);
if(cljs.core.empty_QMARK_.call(null,the_list)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.apply.call(null,cljs.core.list,the_list);
}
});
cljs.tools.reader.edn.read_vector = (function cljs$tools$reader$edn$read_vector(rdr,_,opts){
return cljs.tools.reader.edn.read_delimited.call(null,new cljs.core.Keyword(null,"vector","vector",1902966158),"]",rdr,opts);
});
cljs.tools.reader.edn.read_map = (function cljs$tools$reader$edn$read_map(rdr,_,opts){
var vec__17832 = cljs.tools.reader.edn.starting_line_col_info.call(null,rdr);
var start_line = cljs.core.nth.call(null,vec__17832,(0),null);
var start_column = cljs.core.nth.call(null,vec__17832,(1),null);
var the_map = cljs.tools.reader.edn.read_delimited.call(null,new cljs.core.Keyword(null,"map","map",1371690461),"}",rdr,opts);
var map_count = cljs.core.count.call(null,the_map);
var ks = cljs.core.take_nth.call(null,(2),the_map);
var key_set = cljs.core.set.call(null,ks);
if(cljs.core.odd_QMARK_.call(null,map_count)){
cljs.tools.reader.impl.errors.throw_odd_map.call(null,rdr,start_line,start_column,the_map);
} else {
}

if(cljs.core._EQ_.call(null,cljs.core.count.call(null,key_set),cljs.core.count.call(null,ks))){
} else {
cljs.tools.reader.impl.errors.throw_dup_keys.call(null,rdr,new cljs.core.Keyword(null,"map","map",1371690461),ks);
}

if((map_count <= ((2) * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))){
return cljs.core.PersistentArrayMap.fromArray(cljs.core.to_array.call(null,the_map),true,true);
} else {
return cljs.core.PersistentHashMap.fromArray(cljs.core.to_array.call(null,the_map),true);
}
});
cljs.tools.reader.edn.read_number = (function cljs$tools$reader$edn$read_number(rdr,initch,opts){
var sb = (function (){var G__17835 = (new goog.string.StringBuffer());
G__17835.append(initch);

return G__17835;
})();
var ch = cljs.tools.reader.reader_types.read_char.call(null,rdr);
while(true){
if(cljs.core.truth_((function (){var or__8363__auto__ = cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch);
if(or__8363__auto__){
return or__8363__auto__;
} else {
var or__8363__auto____$1 = cljs.tools.reader.edn.macros.call(null,ch);
if(cljs.core.truth_(or__8363__auto____$1)){
return or__8363__auto____$1;
} else {
return (ch == null);
}
}
})())){
var s = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
cljs.tools.reader.reader_types.unread.call(null,rdr,ch);

var or__8363__auto__ = cljs.tools.reader.impl.commons.match_number.call(null,s);
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return cljs.tools.reader.impl.errors.throw_invalid_number.call(null,rdr,s);
}
} else {
var G__17837 = (function (){var G__17836 = sb;
G__17836.append(ch);

return G__17836;
})();
var G__17838 = cljs.tools.reader.reader_types.read_char.call(null,rdr);
sb = G__17837;
ch = G__17838;
continue;
}
break;
}
});
cljs.tools.reader.edn.escape_char = (function cljs$tools$reader$edn$escape_char(sb,rdr){
var ch = cljs.tools.reader.reader_types.read_char.call(null,rdr);
var G__17839 = ch;
switch (G__17839) {
case "t":
return "\t";

break;
case "r":
return "\r";

break;
case "n":
return "\n";

break;
case "\\":
return "\\";

break;
case "\"":
return "\"";

break;
case "b":
return "\b";

break;
case "f":
return "\f";

break;
case "u":
var ch__$1 = cljs.tools.reader.reader_types.read_char.call(null,rdr);
if(((-1) === parseInt((ch__$1 | (0)),(16)))){
return cljs.tools.reader.impl.errors.throw_invalid_unicode_escape.call(null,rdr,ch__$1);
} else {
return cljs.tools.reader.edn.read_unicode_char.call(null,rdr,ch__$1,(16),(4),true);
}

break;
default:
if(cljs.tools.reader.impl.utils.numeric_QMARK_.call(null,ch)){
var ch__$1 = cljs.tools.reader.edn.read_unicode_char.call(null,rdr,ch,(8),(3),false);
if(((ch__$1 | (0)) > (223))){
return cljs.tools.reader.impl.errors.throw_bad_octal_number.call(null,rdr);
} else {
return ch__$1;
}
} else {
return cljs.tools.reader.impl.errors.throw_bad_escape_char.call(null,rdr,ch);
}

}
});
cljs.tools.reader.edn.read_string_STAR_ = (function cljs$tools$reader$edn$read_string_STAR_(rdr,_,opts){
var sb = (new goog.string.StringBuffer());
var ch = cljs.tools.reader.reader_types.read_char.call(null,rdr);
while(true){
var G__17841 = ch;
if(cljs.core._EQ_.call(null,null,G__17841)){
return cljs.tools.reader.impl.errors.throw_eof_reading.call(null,rdr,new cljs.core.Keyword(null,"string","string",-1989541586),"\"",sb);
} else {
if(cljs.core._EQ_.call(null,"\\",G__17841)){
var G__17844 = (function (){var G__17842 = sb;
G__17842.append(cljs.tools.reader.edn.escape_char.call(null,sb,rdr));

return G__17842;
})();
var G__17845 = cljs.tools.reader.reader_types.read_char.call(null,rdr);
sb = G__17844;
ch = G__17845;
continue;
} else {
if(cljs.core._EQ_.call(null,"\"",G__17841)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
var G__17846 = (function (){var G__17843 = sb;
G__17843.append(ch);

return G__17843;
})();
var G__17847 = cljs.tools.reader.reader_types.read_char.call(null,rdr);
sb = G__17846;
ch = G__17847;
continue;

}
}
}
break;
}
});
cljs.tools.reader.edn.read_symbol = (function cljs$tools$reader$edn$read_symbol(rdr,initch){
var temp__6753__auto__ = cljs.tools.reader.edn.read_token.call(null,rdr,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),initch);
if(cljs.core.truth_(temp__6753__auto__)){
var token = temp__6753__auto__;
var G__17848 = token;
switch (G__17848) {
case "nil":
return null;

break;
case "true":
return true;

break;
case "false":
return false;

break;
case "/":
return new cljs.core.Symbol(null,"/","/",-1371932971,null);

break;
case "NaN":
return Number.NaN;

break;
case "-Infinity":
return Number.NEGATIVE_INFINITY;

break;
case "Infinity":
case "+Infinity":
return Number.POSITIVE_INFINITY;

break;
default:
var or__8363__auto__ = (function (){var temp__6753__auto____$1 = cljs.tools.reader.impl.commons.parse_symbol.call(null,token);
if(cljs.core.truth_(temp__6753__auto____$1)){
var p = temp__6753__auto____$1;
return cljs.core.symbol.call(null,p.call(null,(0)),p.call(null,(1)));
} else {
return null;
}
})();
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return cljs.tools.reader.impl.errors.throw_invalid.call(null,rdr,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),token);
}

}
} else {
return null;
}
});
cljs.tools.reader.edn.read_keyword = (function cljs$tools$reader$edn$read_keyword(reader,initch,opts){
var ch = cljs.tools.reader.reader_types.read_char.call(null,reader);
if(!(cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch))){
var token = cljs.tools.reader.edn.read_token.call(null,reader,new cljs.core.Keyword(null,"keyword","keyword",811389747),ch);
var s = cljs.tools.reader.impl.commons.parse_symbol.call(null,token);
if(cljs.core.truth_((function (){var and__8351__auto__ = s;
if(cljs.core.truth_(and__8351__auto__)){
return ((-1) === token.indexOf("::"));
} else {
return and__8351__auto__;
}
})())){
var ns = s.call(null,(0));
var name = s.call(null,(1));
if((":" === cljs.core.nth.call(null,token,(0)))){
return cljs.tools.reader.impl.errors.throw_invalid.call(null,reader,new cljs.core.Keyword(null,"keyword","keyword",811389747),token);
} else {
return cljs.core.keyword.call(null,ns,name);
}
} else {
return cljs.tools.reader.impl.errors.throw_invalid.call(null,reader,new cljs.core.Keyword(null,"keyword","keyword",811389747),token);
}
} else {
return cljs.tools.reader.impl.errors.throw_single_colon.call(null,reader);
}
});
cljs.tools.reader.edn.wrapping_reader = (function cljs$tools$reader$edn$wrapping_reader(sym){
return (function (rdr,_,opts){
var x__9317__auto__ = sym;
return cljs.core._conj.call(null,(function (){var x__9317__auto____$1 = cljs.tools.reader.edn.read.call(null,rdr,true,null,opts);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9317__auto____$1);
})(),x__9317__auto__);
});
});
cljs.tools.reader.edn.read_meta = (function cljs$tools$reader$edn$read_meta(rdr,_,opts){
var m = cljs.tools.reader.impl.utils.desugar_meta.call(null,cljs.tools.reader.edn.read.call(null,rdr,true,null,opts));
if(cljs.core.map_QMARK_.call(null,m)){
} else {
cljs.tools.reader.impl.errors.throw_bad_metadata.call(null,rdr,m);
}

var o = cljs.tools.reader.edn.read.call(null,rdr,true,null,opts);
if(((!((o == null)))?((((o.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IMeta$)))?true:false):false)){
return cljs.core.with_meta.call(null,o,cljs.core.merge.call(null,cljs.core.meta.call(null,o),m));
} else {
return cljs.tools.reader.impl.errors.throw_bad_metadata_target.call(null,rdr,o);
}
});
cljs.tools.reader.edn.read_set = (function cljs$tools$reader$edn$read_set(rdr,_,opts){
var coll = cljs.tools.reader.edn.read_delimited.call(null,new cljs.core.Keyword(null,"set","set",304602554),"}",rdr,opts);
var the_set = cljs.core.set.call(null,coll);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,the_set))){
} else {
cljs.tools.reader.impl.errors.throw_dup_keys.call(null,rdr,new cljs.core.Keyword(null,"set","set",304602554),coll);
}

return the_set;
});
cljs.tools.reader.edn.read_discard = (function cljs$tools$reader$edn$read_discard(rdr,_,opts){
var G__17851 = rdr;
cljs.tools.reader.edn.read.call(null,G__17851,true,null,true);

return G__17851;
});
cljs.tools.reader.edn.read_namespaced_map = (function cljs$tools$reader$edn$read_namespaced_map(rdr,_,opts){
var token = cljs.tools.reader.edn.read_token.call(null,rdr,new cljs.core.Keyword(null,"namespaced-map","namespaced-map",1235665380),cljs.tools.reader.reader_types.read_char.call(null,rdr));
var temp__6751__auto__ = (function (){var G__17852 = token;
var G__17852__$1 = (((G__17852 == null))?null:cljs.tools.reader.impl.commons.parse_symbol.call(null,G__17852));
if((G__17852__$1 == null)){
return null;
} else {
return cljs.tools.reader.impl.utils.second_SINGLEQUOTE_.call(null,G__17852__$1);
}
})();
if(cljs.core.truth_(temp__6751__auto__)){
var ns = temp__6751__auto__;
var ch = cljs.tools.reader.impl.commons.read_past.call(null,cljs.tools.reader.impl.utils.whitespace_QMARK_,rdr);
if((ch === "{")){
var items = cljs.tools.reader.edn.read_delimited.call(null,new cljs.core.Keyword(null,"namespaced-map","namespaced-map",1235665380),"}",rdr,opts);
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,items))){
cljs.tools.reader.impl.errors.throw_odd_map.call(null,rdr,null,null,items);
} else {
}

var keys = cljs.tools.reader.impl.utils.namespace_keys.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),cljs.core.take_nth.call(null,(2),items));
var vals = cljs.core.take_nth.call(null,(2),cljs.core.rest.call(null,items));
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.set.call(null,keys)),cljs.core.count.call(null,keys))){
} else {
cljs.tools.reader.impl.errors.throw_dup_keys.call(null,rdr,new cljs.core.Keyword(null,"namespaced-map","namespaced-map",1235665380),keys);
}

return cljs.core.zipmap.call(null,keys,vals);
} else {
return cljs.tools.reader.impl.errors.throw_ns_map_no_map.call(null,rdr,token);
}
} else {
return cljs.tools.reader.impl.errors.throw_bad_ns.call(null,rdr,token);
}
});
cljs.tools.reader.edn.macros = (function cljs$tools$reader$edn$macros(ch){
var G__17853 = ch;
switch (G__17853) {
case "\"":
return cljs.tools.reader.edn.read_string_STAR_;

break;
case ":":
return cljs.tools.reader.edn.read_keyword;

break;
case ";":
return cljs.tools.reader.impl.commons.read_comment;

break;
case "^":
return cljs.tools.reader.edn.read_meta;

break;
case "(":
return cljs.tools.reader.edn.read_list;

break;
case ")":
return cljs.tools.reader.edn.read_unmatched_delimiter;

break;
case "[":
return cljs.tools.reader.edn.read_vector;

break;
case "]":
return cljs.tools.reader.edn.read_unmatched_delimiter;

break;
case "{":
return cljs.tools.reader.edn.read_map;

break;
case "}":
return cljs.tools.reader.edn.read_unmatched_delimiter;

break;
case "\\":
return cljs.tools.reader.edn.read_char_STAR_;

break;
case "#":
return cljs.tools.reader.edn.read_dispatch;

break;
default:
return null;

}
});
cljs.tools.reader.edn.dispatch_macros = (function cljs$tools$reader$edn$dispatch_macros(ch){
var G__17855 = ch;
switch (G__17855) {
case "^":
return cljs.tools.reader.edn.read_meta;

break;
case "{":
return cljs.tools.reader.edn.read_set;

break;
case "<":
return cljs.tools.reader.impl.commons.throwing_reader.call(null,"Unreadable form");

break;
case "!":
return cljs.tools.reader.impl.commons.read_comment;

break;
case "_":
return cljs.tools.reader.edn.read_discard;

break;
case ":":
return cljs.tools.reader.edn.read_namespaced_map;

break;
default:
return null;

}
});
cljs.tools.reader.edn.read_tagged = (function cljs$tools$reader$edn$read_tagged(rdr,initch,opts){
var tag = cljs.tools.reader.edn.read.call(null,rdr,true,null,opts);
var object = cljs.tools.reader.edn.read.call(null,rdr,true,null,opts);
if(!((tag instanceof cljs.core.Symbol))){
cljs.tools.reader.impl.errors.throw_bad_reader_tag.call(null,rdr,"Reader tag must be a symbol");
} else {
}

var temp__6751__auto__ = (function (){var or__8363__auto__ = cljs.core.get.call(null,new cljs.core.Keyword(null,"readers","readers",-2118263030).cljs$core$IFn$_invoke$arity$1(opts),tag);
if(cljs.core.truth_(or__8363__auto__)){
return or__8363__auto__;
} else {
return cljs.tools.reader.default_data_readers.call(null,tag);
}
})();
if(cljs.core.truth_(temp__6751__auto__)){
var f = temp__6751__auto__;
return f.call(null,object);
} else {
var temp__6751__auto____$1 = new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__6751__auto____$1)){
var d = temp__6751__auto____$1;
return d.call(null,tag,object);
} else {
return cljs.tools.reader.impl.errors.throw_unknown_reader_tag.call(null,rdr,tag);
}
}
});
/**
 * Reads the first object from an IPushbackReader.
 * Returns the object read. If EOF, throws if eof-error? is true otherwise returns eof.
 * If no reader is provided, *in* will be used.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * clojure.tools.reader.edn/read doesn't depend on dynamic Vars, all configuration
 * is done by passing an opt map.
 * 
 * opts is a map that can include the following keys:
 * :eof - value to return on end-of-file. When not supplied, eof throws an exception.
 * :readers  - a map of tag symbols to data-reader functions to be considered before default-data-readers.
 *            When not supplied, only the default-data-readers will be used.
 * :default - A function of two args, that will, if present and no reader is found for a tag,
 *            be called with the tag and the value.
 */
cljs.tools.reader.edn.read = (function cljs$tools$reader$edn$read(var_args){
var G__17858 = arguments.length;
switch (G__17858) {
case 1:
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$1 = (function (reader){
return cljs.tools.reader.edn.read.call(null,cljs.core.PersistentArrayMap.EMPTY,reader);
});

cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2 = (function (p__17859,reader){
var map__17860 = p__17859;
var map__17860__$1 = ((((!((map__17860 == null)))?((((map__17860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17860.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17860):map__17860);
var opts = map__17860__$1;
var eof = cljs.core.get.call(null,map__17860__$1,new cljs.core.Keyword(null,"eof","eof",-489063237));
var eof_error_QMARK_ = !(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"eof","eof",-489063237)));
return cljs.tools.reader.edn.read.call(null,reader,eof_error_QMARK_,eof,opts);
});

cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4 = (function (reader,eof_error_QMARK_,eof,opts){
try{while(true){
var ch = cljs.tools.reader.reader_types.read_char.call(null,reader);
if(cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch)){
continue;
} else {
if((ch == null)){
if(cljs.core.truth_(eof_error_QMARK_)){
return cljs.tools.reader.impl.errors.throw_eof_error.call(null,reader,null);
} else {
return eof;
}
} else {
if(cljs.tools.reader.impl.commons.number_literal_QMARK_.call(null,reader,ch)){
return cljs.tools.reader.edn.read_number.call(null,reader,ch,opts);
} else {
var f = cljs.tools.reader.edn.macros.call(null,ch);
if(cljs.core.truth_(f)){
var res = f.call(null,reader,ch,opts);
if((res === reader)){
continue;
} else {
return res;
}
} else {
return cljs.tools.reader.edn.read_symbol.call(null,reader,ch);
}

}
}
}
break;
}
}catch (e17862){if((e17862 instanceof Error)){
var e = e17862;
if(cljs.tools.reader.impl.utils.ex_info_QMARK_.call(null,e)){
var d = cljs.core.ex_data.call(null,e);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(d))){
throw e;
} else {
throw cljs.core.ex_info.call(null,e.message,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098)], null),d,(cljs.core.truth_(cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null,reader))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),cljs.tools.reader.reader_types.get_line_number.call(null,reader),new cljs.core.Keyword(null,"column","column",2078222095),cljs.tools.reader.reader_types.get_column_number.call(null,reader),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.tools.reader.reader_types.get_file_name.call(null,reader)], null):null)),e);
}
} else {
throw cljs.core.ex_info.call(null,e.message,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098)], null),(cljs.core.truth_(cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null,reader))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),cljs.tools.reader.reader_types.get_line_number.call(null,reader),new cljs.core.Keyword(null,"column","column",2078222095),cljs.tools.reader.reader_types.get_column_number.call(null,reader),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.tools.reader.reader_types.get_file_name.call(null,reader)], null):null)),e);
}
} else {
throw e17862;

}
}});

cljs.tools.reader.edn.read.cljs$lang$maxFixedArity = 4;

/**
 * Reads one object from the string s.
 * Returns nil when s is nil or empty.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * opts is a map as per clojure.tools.reader.edn/read
 */
cljs.tools.reader.edn.read_string = (function cljs$tools$reader$edn$read_string(var_args){
var G__17865 = arguments.length;
switch (G__17865) {
case 1:
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.tools.reader.edn.read_string.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eof","eof",-489063237),null], null),s);
});

cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
if(cljs.core.truth_((function (){var and__8351__auto__ = s;
if(cljs.core.truth_(and__8351__auto__)){
return cljs.core.not_EQ_.call(null,s,"");
} else {
return and__8351__auto__;
}
})())){
return cljs.tools.reader.edn.read.call(null,opts,cljs.tools.reader.reader_types.string_push_back_reader.call(null,s));
} else {
return null;
}
});

cljs.tools.reader.edn.read_string.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=edn.js.map
