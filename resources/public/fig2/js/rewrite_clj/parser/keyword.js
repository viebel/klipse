// Compiled by ClojureScript 1.9.908 {}
goog.provide('rewrite_clj.parser.keyword');
goog.require('cljs.core');
goog.require('rewrite_clj.node');
goog.require('cljs.tools.reader.reader_types');
goog.require('rewrite_clj.reader');
rewrite_clj.parser.keyword.parse_keyword = (function rewrite_clj$parser$keyword$parse_keyword(reader){
rewrite_clj.reader.read_char.call(null,reader);

var temp__6751__auto__ = rewrite_clj.reader.peek_char.call(null,reader);
if(cljs.core.truth_(temp__6751__auto__)){
var c = temp__6751__auto__;
if((c === ":")){
return rewrite_clj.node.keyword_node.call(null,rewrite_clj.reader.read_keyword.call(null,reader,":"),true);
} else {
rewrite_clj.reader.unread.call(null,reader,":");

return rewrite_clj.node.keyword_node.call(null,rewrite_clj.reader.read_keyword.call(null,reader,":"));
}
} else {
return rewrite_clj.reader.throw_reader.call(null,reader,"unexpected EOF while reading keyword.");
}
});

//# sourceMappingURL=keyword.js.map
