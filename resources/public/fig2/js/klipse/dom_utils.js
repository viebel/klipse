// Compiled by ClojureScript 1.9.908 {}
goog.provide('klipse.dom_utils');
goog.require('cljs.core');
goog.require('goog.dom');
klipse.dom_utils.add_class = (function klipse$dom_utils$add_class(element,klass){
var obj_SHARP_ = (element["classList"]);
var fn_SHARP_ = (obj_SHARP_["add"]);
return fn_SHARP_.call(obj_SHARP_,klass);
});
klipse.dom_utils.create_div_after = (function klipse$dom_utils$create_div_after(element,attrs){
var div = goog.dom.createDom("div",cljs.core.clj__GT_js.call(null,attrs),goog.dom.createTextNode(""));
goog.dom.insertSiblingAfter(div,element);

return div;
});
klipse.dom_utils.value = (function klipse$dom_utils$value(element){
return (element["value"]);
});
klipse.dom_utils.add_event_listener = (function klipse$dom_utils$add_event_listener(element,event,listener){
var obj_SHARP_ = element;
var fn_SHARP_ = (obj_SHARP_["addEventListener"]);
return fn_SHARP_.call(obj_SHARP_,event,listener);
});

//# sourceMappingURL=dom_utils.js.map
