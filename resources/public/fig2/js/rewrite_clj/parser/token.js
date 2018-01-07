// Compiled by ClojureScript 1.9.908 {}
goog.provide('rewrite_clj.parser.token');
goog.require('cljs.core');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.reader');
goog.require('goog.string');
rewrite_clj.parser.token.join_2 = (function rewrite_clj$parser$token$join_2(a,b){
return (new goog.string.StringBuffer(a)).append(b).toString();
});
rewrite_clj.parser.token.allowed_default_QMARK_ = (function rewrite_clj$parser$token$allowed_default_QMARK_(c){
return false;
});
rewrite_clj.parser.token.allowed_suffix_QMARK_ = (function rewrite_clj$parser$token$allowed_suffix_QMARK_(c){
return ((c === "'")) || ((c === ":"));
});
rewrite_clj.parser.token.read_to_boundary = (function rewrite_clj$parser$token$read_to_boundary(reader,allowed_QMARK_){
return rewrite_clj.reader.read_until.call(null,reader,(function (p1__24992_SHARP_){
return (cljs.core.not.call(null,allowed_QMARK_.call(null,p1__24992_SHARP_))) && (rewrite_clj.reader.whitespace_or_boundary_QMARK_.call(null,p1__24992_SHARP_));
}));
});
rewrite_clj.parser.token.read_to_char_boundary = (function rewrite_clj$parser$token$read_to_char_boundary(reader){
var c = rewrite_clj.reader.read_char.call(null,reader);
return rewrite_clj.parser.token.join_2.call(null,c,((!((c === "\\")))?rewrite_clj.parser.token.read_to_boundary.call(null,reader,rewrite_clj.parser.token.allowed_default_QMARK_):""));
});
/**
 * Symbols allow for certain boundary characters that have
 * to be handled explicitly.
 */
rewrite_clj.parser.token.symbol_node = (function rewrite_clj$parser$token$symbol_node(reader,value,value_string){
var suffix = rewrite_clj.parser.token.read_to_boundary.call(null,reader,rewrite_clj.parser.token.allowed_suffix_QMARK_);
if(cljs.core.empty_QMARK_.call(null,suffix)){
return rewrite_clj.node.token_node.call(null,value,value_string);
} else {
var s = rewrite_clj.parser.token.join_2.call(null,value_string,suffix);
return rewrite_clj.node.token_node.call(null,rewrite_clj.reader.read_string.call(null,s),s);
}
});
/**
 * Parse a single token.
 */
rewrite_clj.parser.token.parse_token = (function rewrite_clj$parser$token$parse_token(reader){
var first_char = rewrite_clj.reader.read_char.call(null,reader);
var s = rewrite_clj.parser.token.join_2.call(null,first_char,(((first_char === "\\"))?rewrite_clj.parser.token.read_to_char_boundary.call(null,reader):rewrite_clj.parser.token.read_to_boundary.call(null,reader,rewrite_clj.parser.token.allowed_default_QMARK_)));
var v = rewrite_clj.reader.read_string.call(null,s);
if((v instanceof cljs.core.Symbol)){
return rewrite_clj.parser.token.symbol_node.call(null,reader,v,s);
} else {
return rewrite_clj.node.token_node.call(null,v,s);
}
});

//# sourceMappingURL=token.js.map
