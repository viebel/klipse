// Compiled by ClojureScript 1.9.908 {:static-fns true, :fn-invoke-direct true, :optimize-constants false}
goog.provide('cljs.tools.reader.impl.errors');
goog.require('cljs.core');
goog.require('cljs.tools.reader.reader_types');
goog.require('clojure.string');
goog.require('cljs.tools.reader.impl.inspect');
cljs.tools.reader.impl.errors.ex_details = (function cljs$tools$reader$impl$errors$ex_details(rdr,ex_type){
var details = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098),new cljs.core.Keyword(null,"ex-kind","ex-kind",1581199296),ex_type], null);
if(cljs.core.truth_(cljs.tools.reader.reader_types.indexing_reader_QMARK_(rdr))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(details,new cljs.core.Keyword(null,"file","file",-1269645878),cljs.tools.reader.reader_types.get_file_name(rdr),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"line","line",212345235),cljs.tools.reader.reader_types.get_line_number(rdr),new cljs.core.Keyword(null,"col","col",-1959363084),cljs.tools.reader.reader_types.get_column_number(rdr)], 0));
} else {
return details;
}
});
/**
 * Throw an ex-info error.
 */
cljs.tools.reader.impl.errors.throw_ex = (function cljs$tools$reader$impl$errors$throw_ex(var_args){
var args__10036__auto__ = [];
var len__10029__auto___15099 = arguments.length;
var i__10030__auto___15100 = (0);
while(true){
if((i__10030__auto___15100 < len__10029__auto___15099)){
args__10036__auto__.push((arguments[i__10030__auto___15100]));

var G__15101 = (i__10030__auto___15100 + (1));
i__10030__auto___15100 = G__15101;
continue;
} else {
}
break;
}

var argseq__10037__auto__ = ((((2) < args__10036__auto__.length))?(new cljs.core.IndexedSeq(args__10036__auto__.slice((2)),(0),null)):null);
return cljs.tools.reader.impl.errors.throw_ex.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10037__auto__);
});

cljs.tools.reader.impl.errors.throw_ex.cljs$core$IFn$_invoke$arity$variadic = (function (rdr,ex_type,msg){
var details = cljs.tools.reader.impl.errors.ex_details(rdr,ex_type);
var file = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(details);
var line = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(details);
var col = new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(details);
var msg1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)," "].join(''):null);
var msg2 = (cljs.core.truth_(line)?["[line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),", col ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col),"]"].join(''):null);
var msg3 = (cljs.core.truth_((function (){var or__8752__auto__ = msg1;
if(cljs.core.truth_(or__8752__auto__)){
return or__8752__auto__;
} else {
return msg2;
}
})())?" ":null);
var full_msg = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.str,msg1,msg2,msg3,msg);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(full_msg,details);
});

cljs.tools.reader.impl.errors.throw_ex.cljs$lang$maxFixedArity = (2);

cljs.tools.reader.impl.errors.throw_ex.cljs$lang$applyTo = (function (seq15086){
var G__15087 = cljs.core.first(seq15086);
var seq15086__$1 = cljs.core.next(seq15086);
var G__15088 = cljs.core.first(seq15086__$1);
var seq15086__$2 = cljs.core.next(seq15086__$1);
return cljs.tools.reader.impl.errors.throw_ex.cljs$core$IFn$_invoke$arity$variadic(G__15087,G__15088,seq15086__$2);
});

/**
 * Throws an ExceptionInfo with the given message.
 * If rdr is an IndexingReader, additional information about column and line number is provided
 */
cljs.tools.reader.impl.errors.reader_error = (function cljs$tools$reader$impl$errors$reader_error(var_args){
var args__10036__auto__ = [];
var len__10029__auto___15115 = arguments.length;
var i__10030__auto___15116 = (0);
while(true){
if((i__10030__auto___15116 < len__10029__auto___15115)){
args__10036__auto__.push((arguments[i__10030__auto___15116]));

var G__15117 = (i__10030__auto___15116 + (1));
i__10030__auto___15116 = G__15117;
continue;
} else {
}
break;
}

var argseq__10037__auto__ = ((((1) < args__10036__auto__.length))?(new cljs.core.IndexedSeq(args__10036__auto__.slice((1)),(0),null)):null);
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10037__auto__);
});

cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic = (function (rdr,msgs){
return cljs.tools.reader.impl.errors.throw_ex.cljs$core$IFn$_invoke$arity$variadic(rdr,new cljs.core.Keyword(null,"reader-error","reader-error",1610253121),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msgs)], 0));
});

cljs.tools.reader.impl.errors.reader_error.cljs$lang$maxFixedArity = (1);

cljs.tools.reader.impl.errors.reader_error.cljs$lang$applyTo = (function (seq15109){
var G__15110 = cljs.core.first(seq15109);
var seq15109__$1 = cljs.core.next(seq15109);
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(G__15110,seq15109__$1);
});

/**
 * Throws an ExceptionInfo with the given message.
 * If rdr is an IndexingReader, additional information about column and line number is provided
 */
cljs.tools.reader.impl.errors.illegal_arg_error = (function cljs$tools$reader$impl$errors$illegal_arg_error(var_args){
var args__10036__auto__ = [];
var len__10029__auto___15129 = arguments.length;
var i__10030__auto___15130 = (0);
while(true){
if((i__10030__auto___15130 < len__10029__auto___15129)){
args__10036__auto__.push((arguments[i__10030__auto___15130]));

var G__15131 = (i__10030__auto___15130 + (1));
i__10030__auto___15130 = G__15131;
continue;
} else {
}
break;
}

var argseq__10037__auto__ = ((((1) < args__10036__auto__.length))?(new cljs.core.IndexedSeq(args__10036__auto__.slice((1)),(0),null)):null);
return cljs.tools.reader.impl.errors.illegal_arg_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10037__auto__);
});

cljs.tools.reader.impl.errors.illegal_arg_error.cljs$core$IFn$_invoke$arity$variadic = (function (rdr,msgs){
return cljs.tools.reader.impl.errors.throw_ex.cljs$core$IFn$_invoke$arity$variadic(rdr,new cljs.core.Keyword(null,"illegal-argument","illegal-argument",-1845493170),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msgs)], 0));
});

cljs.tools.reader.impl.errors.illegal_arg_error.cljs$lang$maxFixedArity = (1);

cljs.tools.reader.impl.errors.illegal_arg_error.cljs$lang$applyTo = (function (seq15127){
var G__15128 = cljs.core.first(seq15127);
var seq15127__$1 = cljs.core.next(seq15127);
return cljs.tools.reader.impl.errors.illegal_arg_error.cljs$core$IFn$_invoke$arity$variadic(G__15128,seq15127__$1);
});

/**
 * Throws an ExceptionInfo with the given message.
 * If rdr is an IndexingReader, additional information about column and line number is provided
 */
cljs.tools.reader.impl.errors.eof_error = (function cljs$tools$reader$impl$errors$eof_error(var_args){
var args__10036__auto__ = [];
var len__10029__auto___15138 = arguments.length;
var i__10030__auto___15139 = (0);
while(true){
if((i__10030__auto___15139 < len__10029__auto___15138)){
args__10036__auto__.push((arguments[i__10030__auto___15139]));

var G__15140 = (i__10030__auto___15139 + (1));
i__10030__auto___15139 = G__15140;
continue;
} else {
}
break;
}

var argseq__10037__auto__ = ((((1) < args__10036__auto__.length))?(new cljs.core.IndexedSeq(args__10036__auto__.slice((1)),(0),null)):null);
return cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10037__auto__);
});

cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic = (function (rdr,msgs){
return cljs.tools.reader.impl.errors.throw_ex.cljs$core$IFn$_invoke$arity$variadic(rdr,new cljs.core.Keyword(null,"eof","eof",-489063237),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msgs)], 0));
});

cljs.tools.reader.impl.errors.eof_error.cljs$lang$maxFixedArity = (1);

cljs.tools.reader.impl.errors.eof_error.cljs$lang$applyTo = (function (seq15135){
var G__15136 = cljs.core.first(seq15135);
var seq15135__$1 = cljs.core.next(seq15135);
return cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic(G__15136,seq15135__$1);
});

cljs.tools.reader.impl.errors.throw_eof_delimited = (function cljs$tools$reader$impl$errors$throw_eof_delimited(var_args){
var G__15144 = arguments.length;
switch (G__15144) {
case 4:
return cljs.tools.reader.impl.errors.throw_eof_delimited.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.tools.reader.impl.errors.throw_eof_delimited.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.tools.reader.impl.errors.throw_eof_delimited.cljs$core$IFn$_invoke$arity$4 = (function (rdr,kind,column,line){
return cljs.tools.reader.impl.errors.throw_eof_delimited.cljs$core$IFn$_invoke$arity$5(rdr,kind,line,column,null);
});

cljs.tools.reader.impl.errors.throw_eof_delimited.cljs$core$IFn$_invoke$arity$5 = (function (rdr,kind,line,column,n){
return cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unexpected EOF while reading ",(cljs.core.truth_(n)?["item ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)," of "].join(''):null),cljs.core.name(kind),(cljs.core.truth_(line)?[", starting at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," and column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):null),"."], 0));
});

cljs.tools.reader.impl.errors.throw_eof_delimited.cljs$lang$maxFixedArity = 5;

cljs.tools.reader.impl.errors.throw_odd_map = (function cljs$tools$reader$impl$errors$throw_odd_map(rdr,line,col,elements){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["The map literal starting with ",cljs.tools.reader.impl.inspect.inspect.cljs$core$IFn$_invoke$arity$1(cljs.core.first(elements)),(cljs.core.truth_(line)?[" on line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join(''):null)," contains ",cljs.core.count(elements)," form(s). Map literals must contain an even number of forms."], 0));
});
cljs.tools.reader.impl.errors.throw_invalid_number = (function cljs$tools$reader$impl$errors$throw_invalid_number(rdr,token){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid number: ",token,"."], 0));
});
cljs.tools.reader.impl.errors.throw_invalid_unicode_literal = (function cljs$tools$reader$impl$errors$throw_invalid_unicode_literal(rdr,token){
throw cljs.tools.reader.impl.errors.illegal_arg_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid unicode literal: \\",token,"."], 0));
});
cljs.tools.reader.impl.errors.throw_invalid_unicode_escape = (function cljs$tools$reader$impl$errors$throw_invalid_unicode_escape(rdr,ch){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid unicode escape: \\u",ch,"."], 0));
});
cljs.tools.reader.impl.errors.throw_invalid = (function cljs$tools$reader$impl$errors$throw_invalid(rdr,kind,token){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid ",cljs.core.name(kind),": ",token,"."], 0));
});
cljs.tools.reader.impl.errors.throw_eof_at_start = (function cljs$tools$reader$impl$errors$throw_eof_at_start(rdr,kind){
return cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unexpected EOF while reading start of ",cljs.core.name(kind),"."], 0));
});
cljs.tools.reader.impl.errors.throw_bad_char = (function cljs$tools$reader$impl$errors$throw_bad_char(rdr,kind,ch){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid character: ",ch," found while reading ",cljs.core.name(kind),"."], 0));
});
cljs.tools.reader.impl.errors.throw_eof_at_dispatch = (function cljs$tools$reader$impl$errors$throw_eof_at_dispatch(rdr){
return cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unexpected EOF while reading dispatch character."], 0));
});
cljs.tools.reader.impl.errors.throw_bad_dispatch = (function cljs$tools$reader$impl$errors$throw_bad_dispatch(rdr,ch){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["No dispatch macro for ",ch,"."], 0));
});
cljs.tools.reader.impl.errors.throw_unmatch_delimiter = (function cljs$tools$reader$impl$errors$throw_unmatch_delimiter(rdr,ch){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unmatched delimiter ",ch,"."], 0));
});
cljs.tools.reader.impl.errors.throw_eof_reading = (function cljs$tools$reader$impl$errors$throw_eof_reading(var_args){
var args__10036__auto__ = [];
var len__10029__auto___15167 = arguments.length;
var i__10030__auto___15168 = (0);
while(true){
if((i__10030__auto___15168 < len__10029__auto___15167)){
args__10036__auto__.push((arguments[i__10030__auto___15168]));

var G__15169 = (i__10030__auto___15168 + (1));
i__10030__auto___15168 = G__15169;
continue;
} else {
}
break;
}

var argseq__10037__auto__ = ((((2) < args__10036__auto__.length))?(new cljs.core.IndexedSeq(args__10036__auto__.slice((2)),(0),null)):null);
return cljs.tools.reader.impl.errors.throw_eof_reading.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10037__auto__);
});

cljs.tools.reader.impl.errors.throw_eof_reading.cljs$core$IFn$_invoke$arity$variadic = (function (rdr,kind,start){
var init = (function (){var G__15166 = kind;
var G__15166__$1 = (((G__15166 instanceof cljs.core.Keyword))?G__15166.fqn:null);
switch (G__15166__$1) {
case "regex":
return "#\"";

break;
case "string":
return "\"";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15166__$1)].join('')));

}
})();
return cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unexpected EOF reading ",cljs.core.name(kind)," starting ",cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,init,start),"."], 0));
});

cljs.tools.reader.impl.errors.throw_eof_reading.cljs$lang$maxFixedArity = (2);

cljs.tools.reader.impl.errors.throw_eof_reading.cljs$lang$applyTo = (function (seq15163){
var G__15164 = cljs.core.first(seq15163);
var seq15163__$1 = cljs.core.next(seq15163);
var G__15165 = cljs.core.first(seq15163__$1);
var seq15163__$2 = cljs.core.next(seq15163__$1);
return cljs.tools.reader.impl.errors.throw_eof_reading.cljs$core$IFn$_invoke$arity$variadic(G__15164,G__15165,seq15163__$2);
});

cljs.tools.reader.impl.errors.throw_no_dispatch = (function cljs$tools$reader$impl$errors$throw_no_dispatch(rdr,ch){
return cljs.tools.reader.impl.errors.throw_bad_dispatch(rdr,ch);
});
cljs.tools.reader.impl.errors.throw_invalid_unicode_char = (function cljs$tools$reader$impl$errors$throw_invalid_unicode_char(rdr,token){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid unicode character \\",token,"."], 0));
});
cljs.tools.reader.impl.errors.throw_invalid_unicode_digit_in_token = (function cljs$tools$reader$impl$errors$throw_invalid_unicode_digit_in_token(rdr,ch,token){
return cljs.tools.reader.impl.errors.illegal_arg_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid digit ",ch," in unicode character \\",token,"."], 0));
});
cljs.tools.reader.impl.errors.throw_invalid_unicode_digit = (function cljs$tools$reader$impl$errors$throw_invalid_unicode_digit(rdr,ch){
return cljs.tools.reader.impl.errors.illegal_arg_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid digit ",ch," in unicode character."], 0));
});
cljs.tools.reader.impl.errors.throw_invalid_unicode_len = (function cljs$tools$reader$impl$errors$throw_invalid_unicode_len(rdr,actual,expected){
return cljs.tools.reader.impl.errors.illegal_arg_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid unicode literal. Unicode literals should be ",expected,"characters long.  ","value suppled is ",actual,"characters long."], 0));
});
cljs.tools.reader.impl.errors.throw_invalid_character_literal = (function cljs$tools$reader$impl$errors$throw_invalid_character_literal(rdr,token){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid character literal \\u",token,"."], 0));
});
cljs.tools.reader.impl.errors.throw_invalid_octal_len = (function cljs$tools$reader$impl$errors$throw_invalid_octal_len(rdr,token){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid octal escape sequence in a character literal:",token,". Octal escape sequences must be 3 or fewer digits."], 0));
});
cljs.tools.reader.impl.errors.throw_bad_octal_number = (function cljs$tools$reader$impl$errors$throw_bad_octal_number(rdr){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Octal escape sequence must be in range [0, 377]."], 0));
});
cljs.tools.reader.impl.errors.throw_unsupported_character = (function cljs$tools$reader$impl$errors$throw_unsupported_character(rdr,token){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unsupported character: ",token,"."], 0));
});
cljs.tools.reader.impl.errors.throw_eof_in_character = (function cljs$tools$reader$impl$errors$throw_eof_in_character(rdr){
return cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unexpected EOF while reading character."], 0));
});
cljs.tools.reader.impl.errors.throw_bad_escape_char = (function cljs$tools$reader$impl$errors$throw_bad_escape_char(rdr,ch){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unsupported escape character: \\",ch,"."], 0));
});
cljs.tools.reader.impl.errors.throw_single_colon = (function cljs$tools$reader$impl$errors$throw_single_colon(rdr){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["A single colon is not a valid keyword."], 0));
});
cljs.tools.reader.impl.errors.throw_bad_metadata = (function cljs$tools$reader$impl$errors$throw_bad_metadata(rdr,x){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Metadata cannot be ",cljs.tools.reader.impl.inspect.inspect.cljs$core$IFn$_invoke$arity$1(x),". Metadata must be a Symbol, Keyword, String or Map."], 0));
});
cljs.tools.reader.impl.errors.throw_bad_metadata_target = (function cljs$tools$reader$impl$errors$throw_bad_metadata_target(rdr,target){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Metadata can not be applied to ",cljs.tools.reader.impl.inspect.inspect.cljs$core$IFn$_invoke$arity$1(target),". ","Metadata can only be applied to IMetas."], 0));
});
cljs.tools.reader.impl.errors.throw_feature_not_keyword = (function cljs$tools$reader$impl$errors$throw_feature_not_keyword(rdr,feature){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Feature cannot be ",cljs.tools.reader.impl.inspect.inspect.cljs$core$IFn$_invoke$arity$1(feature)," Features must be keywords."], 0));
});
cljs.tools.reader.impl.errors.throw_ns_map_no_map = (function cljs$tools$reader$impl$errors$throw_ns_map_no_map(rdr,ns_name){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Namespaced map with namespace ",ns_name," does not specify a map."], 0));
});
cljs.tools.reader.impl.errors.throw_bad_ns = (function cljs$tools$reader$impl$errors$throw_bad_ns(rdr,ns_name){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid value used as namespace in namespaced map: ",ns_name,"."], 0));
});
cljs.tools.reader.impl.errors.throw_bad_reader_tag = (function cljs$tools$reader$impl$errors$throw_bad_reader_tag(rdr,tag){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid reader tag: ",cljs.tools.reader.impl.inspect.inspect.cljs$core$IFn$_invoke$arity$1(tag),". Reader tags must be symbols."], 0));
});
cljs.tools.reader.impl.errors.throw_unknown_reader_tag = (function cljs$tools$reader$impl$errors$throw_unknown_reader_tag(rdr,tag){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["No reader function for tag ",cljs.tools.reader.impl.inspect.inspect.cljs$core$IFn$_invoke$arity$1(tag),"."], 0));
});
cljs.tools.reader.impl.errors.duplicate_keys_error = (function cljs$tools$reader$impl$errors$duplicate_keys_error(msg,coll){
var duplicates = (function cljs$tools$reader$impl$errors$duplicate_keys_error_$_duplicates(seq){
var iter__9634__auto__ = (function cljs$tools$reader$impl$errors$duplicate_keys_error_$_duplicates_$_iter__15188(s__15189){
return (new cljs.core.LazySeq(null,(function (){
var s__15189__$1 = s__15189;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__15189__$1);
if(temp__5278__auto__){
var s__15189__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15189__$2)){
var c__9632__auto__ = cljs.core.chunk_first(s__15189__$2);
var size__9633__auto__ = cljs.core.count(c__9632__auto__);
var b__15191 = cljs.core.chunk_buffer(size__9633__auto__);
if((function (){var i__15190 = (0);
while(true){
if((i__15190 < size__9633__auto__)){
var vec__15192 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9632__auto__,i__15190);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15192,(0),null);
var freq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15192,(1),null);
if((freq > (1))){
cljs.core.chunk_append(b__15191,id);

var G__15202 = (i__15190 + (1));
i__15190 = G__15202;
continue;
} else {
var G__15203 = (i__15190 + (1));
i__15190 = G__15203;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15191),cljs$tools$reader$impl$errors$duplicate_keys_error_$_duplicates_$_iter__15188(cljs.core.chunk_rest(s__15189__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15191),null);
}
} else {
var vec__15196 = cljs.core.first(s__15189__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15196,(0),null);
var freq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15196,(1),null);
if((freq > (1))){
return cljs.core.cons(id,cljs$tools$reader$impl$errors$duplicate_keys_error_$_duplicates_$_iter__15188(cljs.core.rest(s__15189__$2)));
} else {
var G__15207 = cljs.core.rest(s__15189__$2);
s__15189__$1 = G__15207;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9634__auto__(cljs.core.frequencies(seq));
});
var dups = duplicates(coll);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.str,msg,(((cljs.core.count(dups) > (1)))?"s":null),": ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",dups));
});
cljs.tools.reader.impl.errors.throw_dup_keys = (function cljs$tools$reader$impl$errors$throw_dup_keys(rdr,kind,ks){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.tools.reader.impl.errors.duplicate_keys_error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.capitalize(cljs.core.name(kind)))," literal contains duplicate key"].join(''),ks)], 0));
});
cljs.tools.reader.impl.errors.throw_eof_error = (function cljs$tools$reader$impl$errors$throw_eof_error(rdr,line){
if(cljs.core.truth_(line)){
return cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["EOF while reading, starting at line ",line,"."], 0));
} else {
return cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["EOF while reading."], 0));
}
});
