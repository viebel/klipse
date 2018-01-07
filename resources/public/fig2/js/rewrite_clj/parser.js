// Compiled by ClojureScript 1.9.908 {}
goog.provide('rewrite_clj.parser');
goog.require('cljs.core');
goog.require('rewrite_clj.parser.core');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.reader');
/**
 * Parse next form from the given reader.
 */
rewrite_clj.parser.parse = (function rewrite_clj$parser$parse(reader){
return rewrite_clj.parser.core.parse_next.call(null,reader);
});
/**
 * Parse all forms from the given reader.
 */
rewrite_clj.parser.parse_all = (function rewrite_clj$parser$parse_all(reader){
var nodes = cljs.core.doall.call(null,cljs.core.take_while.call(null,cljs.core.identity,cljs.core.repeatedly.call(null,(function (){
return rewrite_clj.parser.parse.call(null,reader);
}))));
return cljs.core.with_meta.call(null,rewrite_clj.node.forms_node.call(null,nodes),cljs.core.meta.call(null,cljs.core.first.call(null,nodes)));
});
/**
 * Parse first form in the given string.
 */
rewrite_clj.parser.parse_string = (function rewrite_clj$parser$parse_string(s){
return rewrite_clj.parser.parse.call(null,rewrite_clj.reader.indexing_push_back_reader.call(null,s));
});
/**
 * Parse all forms in the given string.
 */
rewrite_clj.parser.parse_string_all = (function rewrite_clj$parser$parse_string_all(s){
return rewrite_clj.parser.parse_all.call(null,rewrite_clj.reader.indexing_push_back_reader.call(null,s));
});

//# sourceMappingURL=parser.js.map
