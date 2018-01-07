// Compiled by ClojureScript 1.9.908 {}
goog.provide('rewrite_clj.parser.whitespace');
goog.require('cljs.core');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.reader');
/**
 * Parse as much whitespace as possible. The created node can either contain
 * only linebreaks or only space/tabs.
 */
rewrite_clj.parser.whitespace.parse_whitespace = (function rewrite_clj$parser$whitespace$parse_whitespace(reader){
if(rewrite_clj.reader.linebreak_QMARK_.call(null,rewrite_clj.reader.peek_char.call(null,reader))){
return rewrite_clj.node.newline_node.call(null,rewrite_clj.reader.read_while.call(null,reader,rewrite_clj.reader.linebreak_QMARK_));
} else {
return rewrite_clj.node.whitespace_node.call(null,rewrite_clj.reader.read_while.call(null,reader,rewrite_clj.reader.space_QMARK_));
}
});

//# sourceMappingURL=whitespace.js.map
