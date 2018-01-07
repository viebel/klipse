// Compiled by ClojureScript 1.9.908 {}
goog.provide('parinfer.string');
goog.require('cljs.core');
goog.require('clojure.string');
parinfer.string.insert_string = (function parinfer$string$insert_string(orig,idx,insert){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,orig,(0),idx)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(insert),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,orig,idx))].join('');
});
parinfer.string.remove_str_range = (function parinfer$string$remove_str_range(orig,start,end){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,orig,(0),start)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,orig,end))].join('');
});
/**
 * get all lines (even empty ones)
 *   source: http://stackoverflow.com/a/29614863/142317
 */
parinfer.string.get_lines = (function parinfer$string$get_lines(text){
return clojure.string.split.call(null,text,/\n/,(-1));
});

//# sourceMappingURL=string.js.map
