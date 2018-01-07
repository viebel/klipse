// Compiled by ClojureScript 1.9.908 {}
goog.provide('klipse.run.plugin.plugin');
goog.require('cljs.core');
goog.require('klipse.core');
goog.require('klipse.lang.javascript');
goog.require('klipse.lang.google_charts');
goog.require('klipse.lang.function_plot');
goog.require('klipse.lang.lua');
goog.require('klipse.lang.oblivion');
goog.require('klipse.lang.js_compile');
goog.require('klipse.lang.ruby');
goog.require('klipse.lang.cpp');
goog.require('klipse.lang.jsx');
goog.require('klipse.lang.brainfuck');
goog.require('klipse.lang.sql');
goog.require('klipse.lang.scheme');
goog.require('klipse.lang.python');
goog.require('klipse.lang.php');
goog.require('klipse.lang.markdown');
goog.require('klipse.lang.lambdaway');
goog.require('klipse.lang.html');
goog.require('klipse.lang.server_eval');
goog.require('klipse.lang.clojure');
goog.require('klipse.lang.reagent');
goog.require('klipse.lang.ocaml');
goog.require('klipse.lang.reason');
goog.require('klipse.plugin');
console.info("settings: ",(window["klipse_settings"]));
klipse.run.plugin.plugin.settings = (function klipse$run$plugin$plugin$settings(){
return (window["klipse_settings"]);
});
goog.exportSymbol('klipse.run.plugin.plugin.settings', klipse.run.plugin.plugin.settings);
if(cljs.core.truth_(klipse.run.plugin.plugin.settings.call(null))){
klipse.plugin.init.call(null,klipse.run.plugin.plugin.settings.call(null));
} else {
}

//# sourceMappingURL=plugin.js.map
